# Boas vindas ao repositório do API Web Motors

---

## Sistema Operacional
A construção deste teste foi realizada em um ambiente Linux, portanto os comandos informados abaixo só rodarão em uma máquina que possua Linux como base de seu sistema operacional.

---

## Aviso sobre a camada Model e o Banco de dados
Este repositório não foi realizado o deploy da aplicação, por isso, é necessário que sua máquina possua o MySQl (o banco utilizado neste teste). O repositório possui também a camada Model (`src/models`), ela é responsável pela conexão com o banco. Dentro do caminho `src/models`, existe o arquivo `mysql_connection.js`,
altere o campo `user` e `password`, adicionando o seu usuário admin com sua a respectiva senha, caso exista. Se o seu usuário padrão for o `root`, não há necessidade de alteração do campo `user`, e se o seu MySQL não possui uma senha, não há necessidade de alterar o campo `password`.

---

## Rode o Servidor no terminal de sua máquina
Entre na pasta do projeto `API_Web_Motors`, uma vez dentro, execute o comando `npm start`, este comando é responsável por inicializar o servidor no seu terminal,
caso dê algum erro, execute no terminal `npm install` para atualizar as dependências do projeto (que estão no arquivo `package.json`) e execute novamente o comando `npm start`. É de suma importância que o terminal esteja ligado para que o Postman ou Thunder Client funcione e que seja possível visualizar as APIs rodando.

---

## Rodando as APIs - use o Postman ou Thunder Client
O Postman e o Thunder Client possuem o mesmo objetivo de criar, compartilhar, testar e documentar APIs, ou seja, se quero buscar um dado pelo id, basta escolher qual será o tipo da requisição `(GET, POST, PUT ou DELETE)`, que neste caso é um `GET`, e passe em seguida o endpoint `http:localhost:4000/webmotors/1` por exemplo, ele retornará os dados daquele id escolhido.

---

## Como usar o Thunder Client
O Thunder Client é uma extensão do Visual Code, para baixar é só ir em `extensões (Ctrl + x)`, pesquisar `Thunder Client` e clicar em instalar. Para mais informações veja este link (`https://blog.cod3r.com.br/thunder-client-requisicoes-http-a-partir-do-visual-studio-code/`).

---

## Como usar o Postman
O Postman é mais completo que o Thunder Client, é possível criar pastas e nelas adicionar as APIs construídas, para mais detalhes, veja o link (`https://jera.com.br/blog/5847/desenvolvimento/como-usar-o-postman`).
