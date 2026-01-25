# 🎮 GameZone

Aplicação full stack para **e-commerce de games e consoles**, com interface web moderna e API REST desenvolvida em Java.

O projeto simula uma loja de games, permitindo visualizar produtos, adicionar itens ao carrinho e finalizar a compra.

---

## 🧩 Visão Geral do Projeto

Este repositório contém **dois módulos principais**:

- **Frontend**: interface web para clientes
- **Backend**: API REST para gerenciamento de jogos e consoles de videogames

---

## 🖥️ Demonstração

### Tela inicial do sistema
Exibe todas as tortas e bebidas cadastradas, com preço, descrição e disponibilidade.

![Tela inicial do sistema](../home.jpg)

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 💠 Flowbite React
- 🔄 Axios

### Backend
- ☕ Java 21
- 🍃 Spring Boot 3.x
- 📦 Maven
- 🗄 MySQL

---

## 🚀 Pré-requisitospara executar o Projeto

- Node.js 18+
- Java 21
- Maven
- MySQL (ou banco configurado no backend)

📘 **Documentação completa do backend:**  
[`GameZone Backend`](./backend/README.md)

📘 **Documentação completa do frontend:**  
[`GameZone Frontend`](./frontend/README.md)

---
## 🔗 Comunicação entre Frontend e Backend

O frontend consome a API REST do backend por meio da variável de ambiente:

```env
VITE_API_URL=http://localhost:8080
```

Certifique-se de que o backend esteja em execução antes de iniciar o frontend.

Além disso, o sistema permite o envio de pedidos diretamente para o WhatsApp da empresa, utilizando links formatados automaticamente.

---

## 📌 Funcionalidades do Sistema

- Listagem de produtos: jogos e consoles de videogames
- Visualização de detalhes do produto
- Carrinho de compras

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---