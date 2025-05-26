// Importa React e funções auxiliares para criar contexto e gerenciar estado
import React, { 
    createContext, // Permite criar um novo contexto
    useState      // Hook para gerenciar estado local
} from "react";

// Cria o contexto de autenticação, que será usado para compartilhar dados entre componentes
export const AuthContext = createContext({});

// Define o componente provedor do contexto de autenticação
function AuthProvider({ children }) {

    // Cria um estado local 'user' com valor inicial, e função para atualizá-lo
    const [user, setUser] = useState({
        nome: 'André'
    })
    // Retorna o provedor do contexto, passando o valor do usuário para os componentes filhos
    return (
        <AuthContext.Provider   
            value={{ user }} // O valor do contexto, acessível por outros componentes
        >
            {children} // Renderiza os componentes filhos dentro do provedor
        </AuthContext.Provider>
    )
}

// Exporta o provedor para ser usado na árvore de componentes da aplicação
export default AuthProvider;