'use client';

import Link from "next/link";
import { useState } from "react";

export default function ProjetosCodigosPage() {
  const [secao, setSecao] = useState<"menu" | "download" | "projetos" | "projeto-detalhes">("menu");
  const [projetoAberto, setProjetoAberto] = useState<number | null>(null);

  const projetos = [
    {
      id: 1,
      titulo: "Hello World em C",
      icone: "📝",
      descricao: "Seu primeiro programa",
      tempo: "5 minutos",
      dificuldade: "Iniciante",
      cor: "purple",
      detalhes: {
        downloads: [
          {
            nome: "GCC (Compilador C)",
            link: "https://www.mingw-w64.org/",
            plataforma: "Windows",
            instrucoes: "Baixe o instalador, execute e siga as instruções padrão"
          },
          {
            nome: "Visual Studio Code",
            link: "https://code.visualstudio.com/",
            plataforma: "Todos",
            instrucoes: "Baixe, instale e execute"
          }
        ],
        codigo: `#include <stdio.h>

int main() {
  printf("Olá, Mundo!\\n");
  return 0;
}`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o Bloco de Notas",
            detalhes: "Clique no botão Windows (canto inferior esquerdo) + R, digite 'notepad' e pressione Enter"
          },
          {
            numero: 2,
            titulo: "Cole o código",
            detalhes: "Copie o código acima e cole no Bloco de Notas"
          },
          {
            numero: 3,
            titulo: "Salve como arquivo C",
            detalhes: "Pressione Ctrl+S, nomeie como 'hello.c' (com aspas) e salve na pasta Documentos"
          },
          {
            numero: 4,
            titulo: "Abra o Terminal",
            detalhes: "Clique em Windows + R, digite 'cmd' e pressione Enter"
          },
          {
            numero: 5,
            titulo: "Navegue até a pasta",
            detalhes: "No terminal, digite: cd Documentos"
          },
          {
            numero: 6,
            titulo: "Compile o código",
            detalhes: "Digite: gcc hello.c -o hello"
          },
          {
            numero: 7,
            titulo: "Execute o programa",
            detalhes: "Digite: hello"
          }
        ],
        resultado: "Olá, Mundo!"
      }
    },
    {
      id: 2,
      titulo: "Calculadora Simples",
      icone: "🧮",
      descricao: "Python - Operações básicas",
      tempo: "15 minutos",
      dificuldade: "Iniciante",
      cor: "blue",
      detalhes: {
        downloads: [
          {
            nome: "Python",
            link: "https://www.python.org/downloads/",
            plataforma: "Todos",
            instrucoes: "Baixe a versão mais recente e instale"
          }
        ],
        codigo: `def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b != 0:
        return a / b
    return "Erro: divisão por zero"

print("Calculadora Simples")
print(f"5 + 3 = {somar(5, 3)}")
print(f"10 - 4 = {subtrair(10, 4)}")
print(f"6 * 7 = {multiplicar(6, 7)}")
print(f"20 / 4 = {dividir(20, 4)}")`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o Bloco de Notas",
            detalhes: "Windows + R, digite 'notepad' e pressione Enter"
          },
          {
            numero: 2,
            titulo: "Cole o código",
            detalhes: "Copie o código acima e cole"
          },
          {
            numero: 3,
            titulo: "Salve como arquivo Python",
            detalhes: "Pressione Ctrl+S, nomeie como 'calculadora.py' (com aspas) e salve"
          },
          {
            numero: 4,
            titulo: "Abra o Terminal",
            detalhes: "Windows + R, digite 'cmd' e pressione Enter"
          },
          {
            numero: 5,
            titulo: "Execute o programa",
            detalhes: "Digite: python calculadora.py"
          }
        ],
        resultado: "Calculadora Simples\n5 + 3 = 8\n10 - 4 = 6\n6 * 7 = 42\n20 / 4 = 5.0"
      }
    },
    {
      id: 3,
      titulo: "Seu Primeiro Site",
      icone: "🌐",
      descricao: "HTML + CSS básico",
      tempo: "20 minutos",
      dificuldade: "Iniciante",
      cor: "emerald",
      detalhes: {
        downloads: [
          {
            nome: "Visual Studio Code",
            link: "https://code.visualstudio.com/",
            plataforma: "Todos",
            instrucoes: "Baixe e instale"
          }
        ],
        codigo: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo ao Meu Site!</h1>
        <p>Este é meu primeiro site criado com HTML e CSS.</p>
        <p>Parabéns por chegar até aqui!</p>
    </div>
</body>
</html>`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o VS Code",
            detalhes: "Execute o Visual Studio Code"
          },
          {
            numero: 2,
            titulo: "Crie um novo arquivo",
            detalhes: "Clique em File > New File"
          },
          {
            numero: 3,
            titulo: "Cole o código",
            detalhes: "Copie o código acima e cole no arquivo"
          },
          {
            numero: 4,
            titulo: "Salve como HTML",
            detalhes: "Pressione Ctrl+S, nomeie como 'index.html' (com aspas)"
          },
          {
            numero: 5,
            titulo: "Abra no navegador",
            detalhes: "Clique com botão direito no arquivo e selecione 'Open with Live Server' ou abra manualmente"
          }
        ],
        resultado: "Uma página branca com um box centralizado contendo 'Bem-vindo ao Meu Site!' e mais texto"
      }
    },
    {
      id: 4,
      titulo: "App Android",
      icone: "📱",
      descricao: "Kotlin + Android Studio",
      tempo: "30 minutos",
      dificuldade: "Iniciante",
      cor: "pink",
      detalhes: {
        downloads: [
          {
            nome: "Android Studio",
            link: "https://developer.android.com/studio",
            plataforma: "Todos",
            instrucoes: "Baixe e instale (pode levar alguns minutos)"
          }
        ],
        codigo: `// MainActivity.kt
package com.example.meuapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val botao = findViewById<Button>(R.id.botao)
        botao.setOnClickListener {
            Toast.makeText(this, "Olá, Mundo!", Toast.LENGTH_SHORT).show()
        }
    }
}`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o Android Studio",
            detalhes: "Execute o Android Studio (pode levar alguns minutos na primeira vez)"
          },
          {
            numero: 2,
            titulo: "Crie um novo projeto",
            detalhes: "Clique em 'New Project' e selecione 'Empty Activity'"
          },
          {
            numero: 3,
            titulo: "Configure o projeto",
            detalhes: "Nome: MeuApp, Language: Kotlin, Minimum SDK: API 21"
          },
          {
            numero: 4,
            titulo: "Aguarde a compilação",
            detalhes: "O Android Studio vai baixar dependências (pode levar alguns minutos)"
          },
          {
            numero: 5,
            titulo: "Execute no emulador",
            detalhes: "Clique em Run > Run 'app'"
          }
        ],
        resultado: "Um app Android com um botão que mostra 'Olá, Mundo!' quando clicado"
      }
    },
    {
      id: 5,
      titulo: "App Desktop",
      icone: "💻",
      descricao: "Python + Tkinter",
      tempo: "20 minutos",
      dificuldade: "Iniciante",
      cor: "cyan",
      detalhes: {
        downloads: [
          {
            nome: "Python",
            link: "https://www.python.org/downloads/",
            plataforma: "Todos",
            instrucoes: "Já deve estar instalado se fez a Calculadora"
          }
        ],
        codigo: `import tkinter as tk
from tkinter import messagebox

janela = tk.Tk()
janela.title("Meu Primeiro App")
janela.geometry("300x200")

def clique_botao():
    messagebox.showinfo("Sucesso", "Você clicou no botão!")

label = tk.Label(janela, text="Bem-vindo ao meu app!", font=("Arial", 14))
label.pack(pady=20)

botao = tk.Button(janela, text="Clique aqui", command=clique_botao, bg="purple", fg="white", font=("Arial", 12))
botao.pack(pady=10)

janela.mainloop()`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o Bloco de Notas",
            detalhes: "Windows + R, digite 'notepad' e pressione Enter"
          },
          {
            numero: 2,
            titulo: "Cole o código",
            detalhes: "Copie o código acima e cole"
          },
          {
            numero: 3,
            titulo: "Salve como arquivo Python",
            detalhes: "Pressione Ctrl+S, nomeie como 'app.py' (com aspas)"
          },
          {
            numero: 4,
            titulo: "Abra o Terminal",
            detalhes: "Windows + R, digite 'cmd' e pressione Enter"
          },
          {
            numero: 5,
            titulo: "Execute o programa",
            detalhes: "Digite: python app.py"
          }
        ],
        resultado: "Uma janela com título 'Meu Primeiro App', um texto de boas-vindas e um botão roxo"
      }
    },
    {
      id: 6,
      titulo: "Jogo do Número Secreto",
      icone: "🎮",
      descricao: "Python - Lógica de programação",
      tempo: "15 minutos",
      dificuldade: "Iniciante",
      cor: "orange",
      detalhes: {
        downloads: [
          {
            nome: "Python",
            link: "https://www.python.org/downloads/",
            plataforma: "Todos",
            instrucoes: "Já deve estar instalado"
          }
        ],
        codigo: `import random

numero_secreto = random.randint(1, 100)
tentativas = 0
acertou = False

print("Bem-vindo ao Jogo do Número Secreto!")
print("Estou pensando em um número entre 1 e 100")

while not acertou:
    tentativa = int(input("Qual é o seu palpite? "))
    tentativas += 1
    
    if tentativa < numero_secreto:
        print("O número secreto é maior!")
    elif tentativa > numero_secreto:
        print("O número secreto é menor!")
    else:
        print(f"Parabéns! Você acertou em {tentativas} tentativas!")
        acertou = True`,
        passos: [
          {
            numero: 1,
            titulo: "Abra o Bloco de Notas",
            detalhes: "Windows + R, digite 'notepad' e pressione Enter"
          },
          {
            numero: 2,
            titulo: "Cole o código",
            detalhes: "Copie o código acima e cole"
          },
          {
            numero: 3,
            titulo: "Salve como arquivo Python",
            detalhes: "Pressione Ctrl+S, nomeie como 'jogo.py' (com aspas)"
          },
          {
            numero: 4,
            titulo: "Abra o Terminal",
            detalhes: "Windows + R, digite 'cmd' e pressione Enter"
          },
          {
            numero: 5,
            titulo: "Execute o programa",
            detalhes: "Digite: python jogo.py"
          }
        ],
        resultado: "Um jogo interativo onde você tenta adivinhar um número entre 1 e 100"
      }
    }
  ];

  const projeto = projetos.find(p => p.id === projetoAberto);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/projetos-codigos" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6">
            <span>←</span>
            <span>Voltar</span>
          </Link>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projetos & Códigos
          </h1>
          
          <p className="text-lg text-slate-400">
            Escolha entre baixar códigos prontos ou seguir projetos passo a passo para iniciantes
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Menu Principal */}
        {secao === "menu" && (
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
              {/* Download de Códigos */}
              <button
                onClick={() => setSecao("download")}
                className="group bg-slate-900 hover:bg-slate-800/80 border-8 border-purple-500 rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
              >
                <div className="text-6xl mb-4">📥</div>
                <h2 className="text-3xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition">
                  Download de Códigos
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                  Baixe diversos códigos prontos para usar em seus projetos. Perfeito para quem quer estudar código profissional.
                </p>
                <div className="flex items-center text-purple-400 text-lg font-medium group-hover:translate-x-2 transition-transform">
                  Acessar <span className="ml-2">→</span>
                </div>
              </button>

              {/* Projetos para Iniciantes */}
              <button
                onClick={() => setSecao("projetos")}
                className="group bg-slate-900 hover:bg-slate-800/80 border-8 border-purple-500 rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
              >
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition">
                  Projetos para Iniciantes
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                  Siga passo a passo para criar seus primeiros programas. Cada projeto tem instruções detalhadas e código completo.
                </p>
                <div className="flex items-center text-purple-300 text-lg font-medium group-hover:translate-x-2 transition-transform">
                  Começar <span className="ml-2">→</span>
                </div>
              </button>
            </div>

            {/* Dicas */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">💡 Como Usar Esta Seção</h2>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">Se Você é Iniciante</h3>
                    <p>Clique em "Projetos para Iniciantes" e siga o passo a passo. Cada projeto tem instruções super detalhadas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">Se Quer Estudar Código</h3>
                    <p>Clique em "Download de Códigos" para baixar exemplos de código profissional e estudar como funciona.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">Comece Hoje</h3>
                    <p>Não precisa de experiência. Escolha um projeto e comece agora mesmo!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download de Códigos */}
        {secao === "download" && (
          <div className="mt-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-8 border-purple-500 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">📥 Download de Códigos</h2>
              <p className="text-slate-300 text-lg">
                Esta seção está em desenvolvimento. Em breve você poderá baixar diversos códigos prontos para usar em seus projetos!
              </p>
            </div>

            <button
              onClick={() => setSecao("menu")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition border-8 border-purple-500"
            >
              <span>←</span>
              <span>Voltar ao Menu</span>
            </button>
          </div>
        )}

        {/* Projetos para Iniciantes - Lista */}
        {secao === "projetos" && !projetoAberto && (
          <div>
            <button
              onClick={() => setSecao("menu")}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-8 border-8 border-purple-500 rounded-lg px-4 py-2 mt-12"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projetos.map((projeto) => (
                <button
                  key={projeto.id}
                  onClick={() => {
                    setProjetoAberto(projeto.id);
                    setSecao("projeto-detalhes");
                  }}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-900 border-8 border-purple-500 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 text-left cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{projeto.icone}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-700/50 text-slate-300">
                      {projeto.dificuldade}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{projeto.titulo}</h3>
                  <p className="text-slate-400 text-sm mb-4">{projeto.descricao}</p>
                  
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>⏱️ {projeto.tempo}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Detalhes do Projeto */}
        {secao === "projeto-detalhes" && projeto && (
          <div className="mt-12">
            <button
              onClick={() => {
                setProjetoAberto(null);
                setSecao("projetos");
              }}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition mb-6 border-8 border-purple-500 rounded-lg px-4 py-2"
            >
              <span>←</span>
              <span>Voltar aos Projetos</span>
            </button>
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-8 border-purple-500 rounded-lg overflow-hidden">
              <div className="p-8 border-b border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{projeto.icone}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-100 mb-2">{projeto.titulo}</h2>
                    <div className="flex gap-4 text-sm text-slate-400">
                      <span>⏱️ {projeto.tempo}</span>
                      <span>📊 {projeto.dificuldade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 space-y-8">
                
                {/* Downloads */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">📥 O Que Você Precisa Baixar</h3>
                  <div className="space-y-3">
                    {projeto.detalhes.downloads.map((download, idx) => (
                      <div key={idx} className="border-8 border-purple-500 rounded-lg overflow-hidden">
                        <a
                          href={download.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-slate-700/50 hover:bg-slate-700 transition hover:shadow-lg hover:shadow-purple-500/40"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-slate-100">{download.nome}</p>
                            <p className="text-sm text-slate-400">{download.plataforma}</p>
                            <p className="text-sm text-slate-500 mt-1">{download.instrucoes}</p>
                          </div>
                          <span className="text-slate-400 ml-4">→</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Código */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">💻 Código</h3>
                  <div className="bg-slate-900 p-6 rounded-lg border-8 border-purple-500 font-mono text-sm overflow-x-auto">
                    <pre className="text-slate-300 whitespace-pre-wrap break-words">
                      {projeto.detalhes.codigo}
                    </pre>
                  </div>
                </div>

                {/* Passo a Passo */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">🔧 Passo a Passo Detalhado</h3>
                  <div className="space-y-4">
                    {projeto.detalhes.passos.map((passo, idx) => (
                      <div key={idx} className="border-8 border-purple-500 rounded-lg p-4 bg-slate-700/30">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white font-bold text-2xl">
                              {passo.numero}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-100 mb-1 text-lg">{passo.titulo}</h4>
                            <p className="text-slate-300 text-base">{passo.detalhes}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resultado */}
                <div className="bg-purple-500/10 border-8 border-purple-500 p-6 rounded-lg">
                  <p className="text-purple-400 font-semibold mb-2 text-lg">✨ Resultado Esperado</p>
                  <p className="text-slate-300 font-mono whitespace-pre-wrap text-base">{projeto.detalhes.resultado}</p>
                </div>

              </div>

              {/* Footer com botão de voltar */}
              <div className="border-t-4 border-slate-300 p-6 bg-slate-800/50">
                <button
                  onClick={() => {
                    setProjetoAberto(null);
                    setSecao("projetos");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition border-8 border-purple-500"
                >
                  <span>←</span>
                  <span>Voltar aos Projetos</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}