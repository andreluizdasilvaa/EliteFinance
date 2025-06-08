# Elite Finance - Documentação

## 📱 Sobre o Aplicativo
Elite Finance é um aplicativo mobile desenvolvido em React Native com Expo para gerenciamento de finanças pessoais. Permite registrar receitas e despesas, visualizar saldo e histórico de transações.

## 🛠 Tecnologias Utilizadas

- React Native
- Expo
- React Navigation
- Styled Components 
- Axios
- AsyncStorage
- React Native Calendars
- Date-fns

## ⚙️ Requisitos

- Node.js instalado
- Expo CLI instalado (`npm install -g expo-cli`)
- Um dispositivo móvel com Expo Go ou um emulador

## 🚀 Como Iniciar

1. Clone o repositório:
```bash
git clone https://github.com/andreluizdasilvaa/EliteFinance
cd EliteFinance
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

## 📱 Funcionalidades

### Autenticação
- Login de usuário
- Cadastro de novo usuário
- Persistência de sessão
- Logout

### Gestão Financeira
- Registro de receitas
- Registro de despesas
- Visualização de saldo atual
- Histórico de transações
- Filtro por data

## 🗂 Estrutura do Projeto

```
EliteFinance/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # Contextos da aplicação
│   ├── pages/         # Telas do aplicativo
│   ├── routes/        # Configuração de rotas
│   └── services/      # Configuração de serviços (API)
└── assets/            # Recursos estáticos
```

## 📋 Componentes Principais

### AuthProvider
Gerencia o estado de autenticação do usuário através do Context API.

### Routes
Controla a navegação do app com base no estado de autenticação:
- AuthRoutes: Rotas para usuários não autenticados
- AppRoutes: Rotas para usuários autenticados

### Pages
- **SignIn**: Tela de login
- **SignUp**: Tela de cadastro
- **Home**: Dashboard principal
- **New**: Registro de transações
- **Profile**: Perfil do usuário

## 🔌 API Integration

O aplicativo se comunica com um backend através do Axios. O código fonte do backend está disponível em: https://github.com/devfraga/backend-financas

Configuração base:

```javascript
const api = axios.create({
    baseURL: 'http://[seu Ip]:3333'
});
```

Para executar o backend:
```bash
# Clone o repositório do backend
git clone https://github.com/devfraga/backend-financas
cd backend-financas

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env seguindo o exemplo do .env.example

# Inicie o servidor
npm start
```

### Endpoints Utilizados
- `/users` - Cadastro de usuários
- `/login` - Autenticação
- `/receives` - Gerenciamento de transações
- `/balance` - Consulta de saldo

## 🎨 Estilização

O projeto utiliza Styled Components para estilização. Principais características:
- Design responsivo
- Temas consistentes
- Componentes estilizados reutilizáveis

## 💾 Armazenamento Local

Utiliza AsyncStorage para:
- Persistência do token de autenticação
- Dados do usuário logado

## 📱 Navegação

Implementa dois tipos de navegação:
- Stack Navigation: Para fluxo de autenticação
- Drawer Navigation: Para usuários autenticados

## 🔐 Segurança

- Autenticação via token JWT 
- Proteção de rotas
- Validação de inputs
- Tratamento de erros

## 🔄 Estado da Aplicação

Gerenciamento de estado através de:
- Context API
- useState
- useEffect
- Custom Hooks

## 📝 Boas Práticas

- Componentização
- Separação de responsabilidades
- Reutilização de código
- Consistência de código
