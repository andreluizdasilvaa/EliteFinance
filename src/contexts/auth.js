import React, { 
    createContext,
    useState
} from "react";
import api from '../services/api';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const navigation = useNavigation();

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signUp(email, password, nome) {
        try {
            setLoadingAuth(true)
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email,
            })
            setLoadingAuth(false);
            navigation.goBack();
        } catch (error) {
            console.log('ERRO AO CADASTRAR: ', error);
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider   
            value={{ user, signUp, loadingAuth }} // O valor do contexto, acessível por outros componentes
        >
            {children} // Renderiza os componentes filhos dentro do provedor
        </AuthContext.Provider>
    )
}

export default AuthProvider;