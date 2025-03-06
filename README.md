Este projeto é um gerenciador de filmes e séries construído com Node.js, Express, EJS e um banco de dados relacional. Ele permite organizar e gerenciar informações sobre seus filmes e séries favoritos, avaliando-os com uma nota de 1-5 e separando-os por gênero, tipo e streaming.

Como executar o projeto?
É necessária a instalação de alguns componentes previamente na máquina:
- Node.js (E Npm, que é instalado junto no node)
- XAMPP: Para configurar o MySQL, recomendamos o uso do XAMPP, que inclui o MySQL e outras ferramentas necessárias.
- Git: Necessário para clonagem desse repositório e ter acesso ao código atualizado.

Instalação:
git clone 
cd DbGerador

npm install 
_Este comando instalará todas as dependências listadas no arquivo package.json, incluindo express e outras bibliotecas necessárias._

npm start
_Realizar este comando após a instalação e abertura do XAMPP, com a tabela DbGerador._

Estrutura do Banco de Dados:
O banco de dados do projeto é composto pelas seguintes tabelas:

tbgêneros: Armazena informações sobre os gêneros dos filmes e séries.
tbmídia: Armazena informações individuais sobre filmes e séries.
tbstreaming: Armazena informações sobre os serviços de streaming.
tbstreamingmídia: Relaciona mídias com serviços de streaming (Quando entram e quando saem de cada um).
tbtipomídia: Armazena informações sobre os tipos de mídia (filme, série, etc.).
tbusuáriomidia: Relaciona usuários com mídias (Isso acontece por meio das avaliações).
tbusuários: Armazena informações sobre os usuários do sistema.

Relacionamentos:
TbMídia e TbStreaming: Um para muitos (uma mídia pertence a um serviço de streaming).
TbMídia e TbGênero: Um para muitos (uma mídia pertence a um gênero).
TbMidia e TbTipo: Um para muitos (uma mídia pertence a um tipo).
TbStreamingMidia e TbStreaming: Muitos para um (várias disponibilidades pertencem a um serviço de streaming).
TbStreamingMidia e TbMidia: Muitos para um (várias disponibilidades pertencem a uma mídia).
TdMídiaUsuário e TbMidia: Muitos para um (várias avaliações pertencem a uma mídia).
TdMídiaUsuário e tbusuários: Muitos para um (várias avaliações pertencem a um usuário).


![image](https://github.com/user-attachments/assets/51bf79b8-a34d-4bfd-9f89-43f158217c9b) - Banco Relacional

Modelo Físico: 

TbMidia:
IdMidia (INT, PK)
NoMídia (VARCHAR(50))
AnoMídia (DATE)
IdStreaming (TINYINT, FK)
IdGenero (TINYINT, FK)
IdTipo (TINYINT, FK)

TbGenero:
IdGenero (TINYINT, PK)
NoGenero (VARCHAR(50))

TbTipo:
IdTipo (TINYINT, PK)
NoTipo (VARCHAR(5))

TbStreaming:
IdStreaming (TINYINT, PK)
NoStreaming (VARCHAR(58))

TbStreamingMidia:
IdDisponibilidade (PK)
DataEntrada (DATE)
DataSaída (DATE, NULL)
IdStreaming (TINYINT, FK)
IdMidia (INT, FK)

TdMídiaUsuário:
IdAvaliação (PK)
Nota (TINYINT(5))
IdMidia (INT, FK)
Matrícula (BIGINT, FK)

tbusuários:
Matrícula (BIGINT, PK)
NomeUsuário (VARCHAR(100))




  
