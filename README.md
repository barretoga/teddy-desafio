# 🐻 Desafio Teddy Open Finance - Front-End Developer
Desafio desenvolvido para a vaga de Desenvolvedor Front-End pela [Teddy Open Finance](https://teddydigital.io/). O desafio consiste em criar uma aplicação que use micro frontends, utilizando obrigatorimanete o Angular@15 e outro framework (O escolhido nesse projeto do React@18).

# 🧑‍💻 Technologies
- Single SPA;
- Angular@15;
- React@18;
- Webpack@5;
- PNPM@8.6.12;
- Tailwindcss;
- Docker;

# ⚙️ Setup
Para realizar o setup do projeto é necessário ter ambiente com as seguintes ferramentas:
- PNPM@8.6.12
- Node@21.7.3
- Angular@15.2.0
- AngularCLI@15.2.11

Também é possível realizar o setup utilizando Docker, facilitando na hora de subir a aplicação.

## ⚙️ Setup Commands
1. **Single SPA server**
```bash
pnpm i
pnpm start
```

2. **React-MFE server - Micro-Frontend do React**
```bash
pnpm i
pnpm start  
```

2. **Angular-MFE server - Micro-Frontend do Angular**
```bash
pnpm i
pnpm start
```

# 🐋 Docker Setup

Para simplificar o setup do projeto, você pode utilizar Docker e Docker Compose para subir a aplicação e seus micro frontends. Siga os passos abaixo:

## Pré-requisitos
Certifique-se de que você tenha as seguintes ferramentas instaladas no seu ambiente:
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instruções para rodar com o Docker Compose
1. **Clone o repositório:**
```bash
git clone git@github.com:barretoga/teddy-desafio.git
cd teddy-desafio
```

2. **Construa e inicie os containers:**
No diretório raiz do projeto, execute o comando:
```bash
docker-compose up --build
```
Isso fará com que os containers do Single SPA, React-MFE, e Angular-MFE sejam construídos e executados. As aplicações ficarão disponíveis nas seguintes portas:

Single SPA: http://localhost:9000
React-MFE: http://localhost:8080
Angular-MFE: http://localhost:8081

3. **Acessar a aplicação:**
Agora você pode acessar a aplicação principal pela URL do Single SPA (http://localhost:9000) e navegar entre os Front-Ends.

# 💻 Páginas/Funcionalidades

## Login

### Se autenticar na aplicação

**Description:** Para se autenticar na aplicação basta preencher os campos de **usuário** e **senha**.

### Manter-se logado

**Description:** Ao ativar a caixa de manter-se logado, a aplicação irá guardar suas informações para a próxima vez que você acessá-la, não sendo preciso se autenticar novamente.

### Logout

**Description:** Para realizar o logout você pode clicar no ícone ao lado direito da foto de perfil ou utilizar o atalho para dispositivos móveis no Menu (ele só é exibido no menu em resoluções de dispositivos móveis). Realizando o logout o estado de Manter-se Logado é resetado, tornando preciso ativa-lo novamente num próximo login.

## Partners

### Create Partner

**Endpoint**: `POST /partners`

**Description:** Realiza a criação de um novo parceiro.

**Campos:**
```
- Nome
- Descrição
- Repositório GIT
- URL DOC
- Clientes (ID's separado por vírgula)
- Projetos (ID's separado por vírgula)
```

### Edit Partner

**Endpoint**: `POST /partners/:id`

**Description:** Realiza a edição dos dados de um parceiro existente.

**Campos:**
```
- Nome
- Descrição
- Repositório GIT
- URL DOC
- Clientes (ID's separado por vírgula)
- Projetos (ID's separado por vírgula)
```

### Remove Partner

**Endpoint**: `DELETE /partners/:id`

**Description:** Realiza a exclusão de um parceiro existente.

## External Companies

### Create External Company

**Endpoint**: `POST /external-companies`

**Description:** Realiza a criação de uma nova empresa parceira.

**Campos:**
```
- Nome
- Nome da empresa
- Número de colaboradores
- Empresa ativa?
```

### Edit External Company

**Endpoint**: `POST /external-companies/:id`

**Description:** Realiza a edição dos dados de uma empresa parceira existente.

**Campos:**
```
- Nome
- Nome da empresa
- Número de colaboradores
- Empresa ativa?
```

### Remove Partner

**Endpoint**: `DELETE /external-companies/:id`

**Description:** Realiza a exclusão de uma empresa parceira existente.
