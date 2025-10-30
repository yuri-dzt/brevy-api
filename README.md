# 🧠 Brevy — AI Text Summarizer

> Resuma qualquer texto em segundos com Inteligência Artificial.  
> Um projeto experimental criado com **Express.js**, **TypeScript** e **OpenAI API**, focado em código limpo e aprendizado de boas práticas modernas.

---

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-5.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

---

## 🚀 Tecnologias

- ⚡ **Express.js** — servidor web simples e performático  
- 🧩 **TypeScript** — segurança e clareza no código  
- 🤖 **OpenAI API** — geração e resumo de texto  
- 🧰 **pnpm** — gerenciador de pacotes rápido e eficiente  
- 🧪 **Vitest** — para testes automatizados

---

## ✨ Features

- ✅ Resumo de textos em segundos usando IA  
- ✅ API simples e modular baseada em Clean Architecture  
- ✅ Estrutura preparada para expansão e integração com front-end  
- ✅ Fácil configuração com variáveis de ambiente  

---

## 📂 Estrutura do projeto

```bash
src/
 ├── app/
 │    └── use-cases/ 
 ├── contracts/
 │    ├── controllers/
 │    └── services/
 ├── infra/
 │    ├── controllers/
 │    ├── factories/
 │    ├── routes/
 │    ├── schemas/
 │    ├── services/
 │    ├── app.ts
 │    ├── logger.ts
 │    └── server.ts
__tests__/
    ├── app/
    │    └── use-cases/ 
.env
package.json
tsconfig.json
```

O projeto foi estruturado de forma modular para facilitar manutenção e evolução futura (Clean Architecture, DDD, etc.).

⚙️ Instalação e uso

1️⃣ Clonar o repositório
```bash
  git clone https://github.com/yuri-dzt/brevy.git
  cd brevy
```

2️⃣ Instalar dependências
```bash
  pnpm install
```

3️⃣ Criar o arquivo .env
- Crie um arquivo .env na raiz com:
```bash 
  OPENAI_API_KEY=coloque_sua_chave_aqui
  PORT=4000
```

4️⃣ Rodar o servidor
```bash
  pnpm dev
```

O servidor estará rodando em:
- http://localhost:4000

🧩 Endpoint principal
```bash
POST /api/summarize
```

📥 Request body:
```bash
{
  "text": "A inteligência artificial tem revolucionado diversos setores..."
}
```

📤 Response:
```bash
{
  "summary": "A IA está transformando setores, otimizando processos e criando novas oportunidades."
}
```

🧠 Como funciona
- O usuário envia um texto via POST /summarize.
- O servidor envia o texto para a API da OpenAI com um prompt de resumo.
- O modelo da OpenAI retorna o resumo otimizado.
- O servidor devolve o resumo diretamente no corpo da resposta.

🧭 Objetivo do projeto
- Brevy foi criado como um projeto experimental para:
- Estudar integração com IA (OpenAI)
- Praticar boas práticas de arquitetura (DDD, TDD, Clean Architecture)

🛠 Contribuição
- Contribuições são bem-vindas!
- Para contribuir:
- Faça um fork do projeto
- Crie uma branch para sua feature (git checkout -b feature/nome-da-feature)
- Faça commit das suas alterações (git commit -m 'feat: descrição')
- Envie para o repositório remoto (git push origin feature/nome-da-feature)
- Abra um Pull Request

💡 Futuras melhorias
- 🔑 Sistema de login e cadastro de usuários, garantindo que cada pessoa tenha acesso à sua própria conta
- 🌐 Interface web com Next.js para facilitar o uso
- 🈯 Suporte a múltiplos idiomas para resumos internacionais
- 📄 Suporte a diferentes formatos de texto (PDF, DOCX)
- 🗂 Histórico de resumos, permitindo consultar e salvar resultados anteriores
- 🚀 Exportação e compartilhamento de resumos em PDF ou link

🧑‍💻 Autor:
- Feito por Yuri Donizete