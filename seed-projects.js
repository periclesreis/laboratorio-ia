// seed-projects.js
// Execute este arquivo para adicionar os projetos ao banco de dados
// Comando: node seed-projects.js

const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new Database(dbPath);

console.log('📚 Adicionando projetos ao banco de dados...');

const projetos = [
  {
    title: "Hello World em C",
    icon: "📝",
    description: "Seu primeiro programa",
    time: "5 minutos",
    difficulty: "Iniciante",
    code: `#include <stdio.h>

int main() {
  printf("Olá, Mundo!\\n");
  return 0;
}`,
    published: 1
  },
  {
    title: "Calculadora Simples",
    icon: "🧮",
    description: "Python - Operações básicas",
    time: "15 minutos",
    difficulty: "Iniciante",
    code: `def somar(a, b):
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
    published: 1
  },
  {
    title: "Seu Primeiro Site",
    icon: "🌐",
    description: "HTML + CSS básico",
    time: "20 minutos",
    difficulty: "Iniciante",
    code: `<!DOCTYPE html>
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
    published: 1
  },
  {
    title: "App Android",
    icon: "📱",
    description: "Kotlin + Android Studio",
    time: "30 minutos",
    difficulty: "Iniciante",
    code: `// MainActivity.kt
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
    published: 1
  },
  {
    title: "App Desktop",
    icon: "💻",
    description: "Python + Tkinter",
    time: "20 minutos",
    difficulty: "Iniciante",
    code: `import tkinter as tk
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
    published: 1
  },
  {
    title: "Jogo do Número Secreto",
    icon: "🎮",
    description: "Python - Lógica de programação",
    time: "15 minutos",
    difficulty: "Iniciante",
    code: `import random

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
    published: 1
  }
];

try {
  projetos.forEach(projeto => {
    db.prepare(`
      INSERT INTO projects (title, icon, description, time, difficulty, code, published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      projeto.title,
      projeto.icon,
      projeto.description,
      projeto.time,
      projeto.difficulty,
      projeto.code,
      projeto.published
    );
  });
  
  console.log('✅ 6 projetos adicionados com sucesso!');
  console.log('📊 Projetos adicionados:');
  console.log('  1. Hello World em C');
  console.log('  2. Calculadora Simples');
  console.log('  3. Seu Primeiro Site');
  console.log('  4. App Android');
  console.log('  5. App Desktop');
  console.log('  6. Jogo do Número Secreto');
  console.log('\n🌐 Acesse http://localhost:3000/projetos-codigos para ver os projetos!');
} catch (error) {
  console.error('❌ Erro ao adicionar projetos:', error.message);
}

db.close();
