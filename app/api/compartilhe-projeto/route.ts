// app/api/compartilhe-projeto/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type EmailErrorDetails = {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nome = String(formData.get('nome') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const nomeProjeto = String(formData.get('nomeProjeto') || '').trim();
    const linguagem = String(formData.get('linguagem') || '').trim();
    const descricao = String(formData.get('descricao') || '').trim();
    const arquivo = formData.get('arquivo') as File | null;

    if (!nome || !nomeProjeto || !linguagem || !descricao || !arquivo) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const arrayBuffer = await arquivo.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const maxSize = 10 * 1024 * 1024;

    if (buffer.length > maxSize) {
      return NextResponse.json(
        { error: 'O arquivo é muito grande. Envie um arquivo de até 10 MB.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Servidor de email não configurado.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Laboratório de IA" <${smtpUser}>`,
      to: 'periclesreis@bol.com.br',
      replyTo: email || smtpUser,
      subject: `Novo projeto enviado: ${nomeProjeto}`,
      text: `
Novo projeto enviado pelo site Laboratório de IA

Nome do usuário: ${nome}
Email do usuário: ${email || 'Não informado'}

Nome do projeto: ${nomeProjeto}
Linguagem / tecnologia: ${linguagem}

Descrição:
${descricao}
      `.trim(),
      attachments: [
        {
          filename: arquivo.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: 'Projeto enviado com sucesso.',
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido';

    const errorDetails = error as EmailErrorDetails;

    console.error('Erro detalhado ao enviar projeto:', {
      message: errorMessage,
      code: errorDetails.code,
      command: errorDetails.command,
      response: errorDetails.response,
      responseCode: errorDetails.responseCode,
    });

    let mensagem = 'Erro ao enviar projeto.';

    if (errorDetails.code === 'EAUTH' || errorDetails.responseCode === 535) {
      mensagem =
        'Falha na autenticação do Gmail. Confira se SMTP_USER é o Gmail correto e se SMTP_PASS é a senha de app, sem espaços.';
    } else if (errorDetails.responseCode === 534) {
      mensagem =
        'O Gmail bloqueou o envio. Confirme se a verificação em duas etapas está ativa e gere uma nova senha de app.';
    } else if (errorDetails.code === 'ECONNECTION') {
      mensagem =
        'Erro de conexão com o servidor de email. Confira SMTP_HOST e SMTP_PORT.';
    } else if (errorDetails.code === 'ETIMEDOUT') {
      mensagem =
        'Tempo esgotado ao conectar ao Gmail. Tente usar SMTP_PORT=465 com secure=true.';
    } else if (errorDetails.code === 'EMESSAGE') {
      mensagem =
        'Erro na montagem da mensagem. Tente enviar um arquivo menor ou com outro nome.';
    }

    return NextResponse.json(
      { error: mensagem },
      { status: 500 }
    );
  }
}