# ☕ Cafezinho da Bia - Single Page Application

Este projeto é uma aplicação web completa desenvolvida em **React JS** para a disciplina de Desenvolvimento Web. O site apresenta o "Cafezinho da Bia", uma cafeteria de rua localizada na Cidade Nova, Rio de Janeiro.

---

## 🚀 Tecnologias Utilizadas

*   **React JS**: Biblioteca principal para construção da interface.
*   **Vite**: Tooling para um desenvolvimento rápido e moderno.
*   **Docker**: Conteinerização da aplicação para ambiente de desenvolvimento.
*   **Git Flow**: Controle de versão organizado por branches de funcionalidades.
*   **Google Maps API**: Integração para localização dinâmica.

---

## 🛠️ Requisitos Técnicos Atendidos

1.  **Design e UI/UX**: Interface responsiva com foco na identidade visual do café de rua.
2.  **Componentização**: Uso de componentes funcionais e passagem de dados via **Props** (ex: `CoffeeCard`).
3.  **Gestão de Estado**: Formulário de contato funcional utilizando o hook `useState` com validação de campos.
4.  **Integração de API (Bônus)**: Consumo dinâmico do Google Maps com tratamento de estado de *Loading*.
5.  **Clean Code**: Variáveis e funções nomeadas em inglês e pastas organizadas (`/components`, `/pages`, `/assets`).

---

## 🐳 Como Rodar o Projeto via Docker

Para rodar a aplicação localmente utilizando containers, siga os passos abaixo:

1.  **Certifique-se de ter o Docker instalado em sua máquina.**
2.  **Construa a imagem do projeto:**
    ```bash
    docker build -t cafe-app .
    ```
3.  **Suba o container:**
    ```bash
    docker run -p 5173:5173 --name cafe-container cafe-app
    ```
4.  **Acesse no navegador:**
    [http://localhost:5173](http://localhost:5173)

---

## 🌿 Fluxo de Trabalho (Git Flow)

O desenvolvimento seguiu rigorosamente a separação por branches para evitar commits diretos na `main`:

*   `feature/setup-projeto`: Configuração inicial e Docker.
*   `feature/home-layout`: Desenvolvimento da UI e Cards de produtos.
*   `feature/contact-form`: Lógica do formulário com gestão de estado.
*   `feature/google-maps`: Implementação da funcionalidade bônus de localização.

---

## 📍 Localização
**Endereço:** Rua Laura de Araújo - Cidade Nova, Rio de Janeiro - RJ.
