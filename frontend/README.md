# 🎮 GameZone Frontend

![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-%23ff9800?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> Interface web do projeto **GameZone**, construída em **React + TypeScript**.  
> Permite visualizar, filtrar e adicionar produtos ao carrinho.

---

## 📌 **Funcionalidades**
- Listagem de produtos por categoria
- Busca de produtos específicos
- Exibição de detalhes de cada produto
- Carrinho de compras simples

---

## 📍 **Rotas Disponíveis**

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com listagem de produtos |
| `/products` | Exibe todos os produtos cadastrados |
| `/products/:id` | Exibe os detalhes de um produto específico |
| `/categories/:nomeCategoria` | Lista os produtos de uma categoria específica |
| `/cart` | Exibe os itens adicionados ao carrinho |

---

## 🚀 **Instalação e Execução**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/alanalvess/gamezone.git
   cd frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API**
    - No arquivo `.env` defina a URL do backend:
      ```env
      VITE_API_URL=http://localhost:8080
      ```

4. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev

5. Acesse no navegador:  
   👉 `http://localhost:5173`

---

## 📦 **Exemplo de Tela**
### Listagem de Produtos
> Exibe todos os produtos cadastrados.

![home.jpg](src/assets/img/home.jpg)
---

## 🖥 Backend do Projeto
Para que o frontend funcione corretamente, é necessário rodar o backend:  
🔗 [GameZone API](https://github.com/alanalvess/gamezone-backend)

---

## 🛠 Tecnologias Utilizadas
- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS + shadcn/ui
- 🔄 Axios

---

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.  
