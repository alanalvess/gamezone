# 🎮 GameZone API

![Java](https://img.shields.io/badge/Java-21-red?logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot)
![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> API para gerenciamento de produtos e categorias, desenvolvida em **Java Spring Boot**.  
> Permite adicionar, listar e filtrar produtos por categoria.

---

## 📌 **Endpoints Disponíveis**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| ![POST](https://img.shields.io/badge/POST-%23ff9800) | `/products/add` | Adiciona um novo produto. Cria categoria automaticamente se não existir. |
| ![GET](https://img.shields.io/badge/GET-%2300bcd4) | `/products/all` | Retorna todos os produtos cadastrados em JSON. |
| ![GET](https://img.shields.io/badge/GET-%2300bcd4) | `/products/{id}` | Retorna os dados de um produto específico pelo ID. |
| ![GET](https://img.shields.io/badge/GET-%2300bcd4) | `/products/categories/all` | Retorna todas as categorias cadastradas. |
| ![GET](https://img.shields.io/badge/GET-%2300bcd4) | `/products/category/{nomeCategoria}` | Retorna produtos de uma categoria específica. |

---

## 📦 **Exemplo de Requisição**

### **Adicionar Produto**
**POST** `/products/add`

```json
{
  "nome": "Console XYZ",
  "preco": 1999.99,
  "categoria": "Consoles"
}
```

Resposta (201 - Created)

```json
{
"id": 1,
"nome": "Console XYZ",
"preco": 1999.99,
"categoria": "Consoles"
}
```

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/alanalvess/gamezone-api.git
   ```
2. **Abra na sua IDE** e execute o projeto.

3. **Verifique o perfil ativo do Spring Boot**  
      No arquivo `application.properties`, confirme que o perfil está configurado como **dev** para execução local:
   ```properties
   spring.profiles.active=dev
   ```

4. **Importe o arquivo de testes** [`gamezone-testes.json`](./gamezone-testes.json) no Postman ou Insomnia

5. **Execute primeiro os testes POST** para popular o banco.

6. **Depois, teste os demais endpoints.**
> ⚠️ **Importante:** No ambiente de nuvem, configure o perfil como `prod`.

---

## 🖥 Frontend do Projeto
Você pode testar direto no frontend usando o repositório:

🔗 [GameZone Frontend](https://github.com/alanalvess/gamezone-frontend)

![home.jpg](https://github.com/alanalvess/gamezone-frontend/blob/main/src/assets/img/home.jpg?raw=true)

---

## 🛠 Tecnologias Utilizadas
- ☕ Java
- 🍃 Spring Boot
- 📦 Maven
- 🗄 MySQL
- 🧪 Postman / Insomnia

---

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.