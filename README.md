# server-agenda-live

API criada para servir o projeto do **Curso de Angular 9**  do canal [Michelli Brito](https://www.youtube.com/playlist?list=PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q "Michelli Brito"), a principio foi disponibilizado um serviço back-end em **Java** com **Spring Boot**, mas decidi reescrever o Back End com NodeJS e Express  por questões didáticas.

## Status:
### Em construção 
O projeto supre todas a parte de CRUD de uma API, porém ainda não possui as regras de negócio estabelecidas para utilizar com a aplicação criada com o Angular e também as validações dos campos.

## Tecnologias:
- NodeJS
- Express 4.17.1
- Sequelize ORM 6.6.5
- MariaDB 2.5.4

## Como testar :rocket:

Na pasta do projeto, com o node instalado execute o comando:

` npm install `

Altere o arquivo de conexão em **src/database/dbconfig.js** e adicione as credenciais do servidor de banco de dados.

> Você pode utilizar o banco de dados de sua preferência para isto leia este artigo no [Manual Sequelize](https://sequelize.org/v6/manual/getting-started.html#connecting-to-a-database "Manual Sequelize")

Crie um banco de dados no servidor com o nome de *bd_api_livemanager*

Execute o comando abaixo para criação das tabelas :
`node src\models\migrations\live_migration.js`

E finalmente execute o comando para rodar a aplicação:
`npm run dev`


### Cadastrar uma live:

```http
  POST  /live/
```
**Parâmetros:**
Objeto JSON
```yaml
{
 "tituloLive"    : "É por isso que as orcas são chamadas de baleias assassinas", 
 nomeCanal"     : "Tou Ligado",
 linkLive"      : "https://www.youtube.com/watch?v=m_pLHI6DVdQ",
 dataLive"      : "2021-09-26",
 horarioLive"   : "13:11:00"
}
```
**Retorno:** Objeto enviado anteriormente com as colunas de controle do banco de dados, `id, updatedAt e createdAt `

### Exibir todas as lives:

```http
  GET  /live/
```
**Retorno:** Todas as lives cadastradas no banco


### Alterar uma live:

```http
  PUT  /live/
```
**Parâmetros:**  
Objeto JSON*

O parâmetro *id* é obrigatório
```yaml
{
    "id": 1,
    "tituloLive": "20 ANIMAIS MISTERIOSOS QUE RARAMENTE SÃO VISTOS",
    "linkLive": "https://www.youtube.com/watch?v=a1A6LH-NlZo",  
}
```
**Retorno:** *Id* da ultima live atualizada OU *0*  caso o *id* enviado seja inválido .

### Deletar uma live:

```http
  PUT  /live/id
```
**Parâmetros:**  URL id
**Retorno:** *Registro apagado* ou em caso de erro *Live não encontrada*


