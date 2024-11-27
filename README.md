BeTalent - Visualização de Tabela
Este projeto é parte do Teste Técnico Mobile da BeTalent e consiste na criação de uma visualização de tabela utilizando React Native, consumindo dados de uma API simulada. O projeto foi desenvolvido com foco em boas práticas de programação, organização de código e facilidade de manutenção.

📝 Sobre o Projeto
A aplicação exibe uma tabela com informações de usuários provenientes de uma API simulada. A tabela contém as seguintes colunas:

Imagem (thumbnail) do/a usuário/a;
Nome;
Cargo;
Data de admissão;
Telefone.
Além disso, a aplicação permite a busca dinâmica por:

Nome,
Cargo,
Telefone.
🎯 Funcionalidades
Exibição dos Dados em Tabela

Dados organizados em colunas.
Thumbnail exibido ao lado das informações textuais.
Busca Dinâmica

Campo de pesquisa para filtrar dados por nome, cargo ou telefone.
Formatação de Dados

Datas no formato DD/MM/YYYY.
Telefones no formato (XX) XXXXX-XXXX.
Configuração Flexível

Base URL configurável dinamicamente para facilitar o uso em diferentes dispositivos.
🚀 Tecnologias Utilizadas
React Native: Framework principal para desenvolvimento mobile.
TypeScript: Para tipagem estática e melhor manutenção de código.
Styled-Components: Para estilização.
json-server: Para simular uma API local.
Axios: Para requisições HTTP.
⚙️ Pré-requisitos
Certifique-se de ter as ferramentas abaixo instaladas na sua máquina:

Node.js
Yarn
Expo CLI
json-server
🛠️ Como Rodar o Projeto
1. Rodar o Servidor da API (desafio-mobile)
Navegue até a pasta desafio-mobile:

cd caminho/para/desafio-mobile
Instale o json-server, caso ainda não tenha:

npm install -g json-server
Inicie o servidor:

json-server --watch db.json
O servidor estará disponível em http://localhost:3000.

2. Rodar o Front-End (be-talent)
Abra um novo terminal e navegue até a pasta be-talent:

cd caminho/para/be-talent
Instale as dependências:

yarn install
Inicie o Expo:

npx expo start
Localize o endereço IP exibido pelo Expo após o comando (exemplo: exp://192.168.x.x:19000). Atualize o arquivo src/config.ts com este IP para que o front-end consiga acessar a API:

export const API_BASE_URL = "http://192.168.x.x:3000";
Substitua 192.168.x.x pelo número mostrado no Expo e salve o arquivo.

Rode a aplicação em um dispositivo ou emulador:

Para Android:
yarn android
Para iOS:
yarn ios
Ou escaneie o QR code exibido no terminal pelo Expo Go.
🔧 Configuração da Base URL
A URL da API está definida no arquivo src/config.ts. Por padrão, ela é configurada dinamicamente com o IP local gerado pelo Expo.
Caso ocorra algum erro ao conectar, atualize manualmente o arquivo com o IP do seu dispositivo.

