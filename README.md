<img src="https://github.com/usuario/repo/assets/logo.svg" alt="Logo">

# EDUCAROCK 🎸📚


EDUCAROCK é um projeto desenvolvido para promover o aprendizado por meio da música, especialmente o rock, criando um ambiente interativo e estimulante para os estudos. O site oferece um quiz de conhecimento teórico e um gráfico para acompanhamento das horas de estudo diárias.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Banco de Dados:** MySQL

## Funcionalidades

- **Quiz de Conhecimento Teórico:** Um quiz sobre o gênero musical rock para testar e reforçar o conhecimento dos usuários.
- **Gráfico de Horas Estudadas:** Exibe um gráfico com o registro de horas estudadas diariamente, incentivando o acompanhamento do progresso.

## Estrutura do Projeto

- `public/`: Arquivos estáticos, como CSS, imagens e JavaScript frontend.
- `src/`: Código fonte principal.
  - `controllers/`: Lógica de controle para as rotas e funcionalidades.
  - `models/`: Definições de modelos para interação com o banco de dados MySQL.
  - `views/`: Templates HTML para renderizar as páginas.
- `database/`: Arquivo de configuração e scripts SQL para o banco de dados MySQL.
- `app.js`: Arquivo principal que configura e inicia o servidor.

## Configuração e Execução

### 💻 Pré-requisitos

- Node.js e npm instalados
- MySQL configurado

### 🚀 Instalação EDUCAROCK

1. Clone este repositório:
   ```bash
   git clone https://github.com/felipe-lim4/EDUCAROCK.git
   ```

2. Instale as dependências:
   ```bash
   cd EDUCAROCK
   npm install
   ```

3. Configure o banco de dados:
   - Crie um banco de dados MySQL.
   - Importe o arquivo SQL na pasta `database/` para criar as tabelas.
   - Atualize as credenciais de conexão com o MySQL no arquivo de configuração.

4. Inicie o servidor:
   ```bash
   node app.js
   ```

5. Acesse o site em `http://localhost:3000`.

## 📫 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para suas modificações:
   ```bash
   git checkout -b minha-modificacao
   ```
3. Faça commit de suas mudanças e envie para o GitHub.
4. Abra um Pull Request para análise.

## Contato

Para dúvidas ou sugestões, entre em contato com [felipe.acbb@gmail.com](mailto:felipe.acbb@gmail.com).
