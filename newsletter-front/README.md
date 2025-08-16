
---


# 📬 Projeto Newsletter | Full Stack

Este projeto foi desenvolvido como parte de um teste técnico para uma vaga de estágio. A proposta consistia na criação de uma aplicação full stack com funcionalidades de cadastro de e-mails em uma newsletter, validações básicas e integração entre frontend e backend.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**
- **SQLite3** (banco de dados local)
- **Express**
- **Body-parser**
- **Cors**

### Frontend
- **JavaScript**
- **React** com **Vite**
- **Tailwind CSS** com **PostCSS**

---

## 💻 Ambiente de Desenvolvimento

- IDE utilizada: **WebStorm**
- Gerenciador de pacotes: **NPM**

---

## 📌 Funcionalidades

- Cadastro de e-mails na newsletter com integração direta ao banco de dados.
- Validação de e-mails duplicados: o sistema retorna mensagens de erro caso o e-mail já esteja cadastrado.
- Feedback visual ao usuário: em caso de sucesso, uma tela de agradecimento exibida ao final.
- Estilização conforme os requisitos do teste, com pequenas adaptações visuais.
- Responsividade testada no browser, simulando smartphones e tablets, sem distorções perceptíveis.

---

## ⚠️ Observações

A proposta original incluía a implementação de um sistema de validação antifraude via e-mail, onde o usuário receberia uma confirmação para validar o cadastro. No entanto, devido à complexidade e limitações técnicas encontradas durante o desenvolvimento, essa funcionalidade não foi concluída.

---

## 🚀 Como Executar o Projeto

### Preparação do Ambiente

1. Faça o clone do repositório

```
git clone https://github.com/diogoneriscwb/newsletter.git
```
2. Instalando as dependências execute no terminal o comando

```bash
npm install
```

### Backend

1. Acesse a pasta `newsletter-back`
2. Execute o comando:

```bash
npm start
```

>Isso iniciará o servidor Node.js (`server.js`) na porta **3001** e abrirá no console da IDE e fica monitorando as entradas de dados novos.

3. Alternativamente, para iniciar os processos do backend diretamente (opcional)

```bash
node server.js
```
4. Outra alternativa para iniciar e ver todos os dados cadastrados do Banco de Dados no console (opcional)

```bash
node index.js
```
---

### Frontend

1. Acesse a pasta `newsletter-front`
2. Execute o comando:

```bash
npm run dev
```

> Isso iniciará o servidor Vite na porta **3000**. O console exibirá um link.
>  ➜  Local:   http://localhost:3000


---

## ✍️ Considerações Finais

Este projeto foi desenvolvido com foco em entregar uma solução funcional, responsiva e alinhada aos requisitos propostos. Apesar dos desafios técnicos, especialmente na parte de validação por e-mail, o resultado final representa bem minha capacidade de adaptação, aprendizado rápido e comprometimento com entregas de qualidade.

---



