import React, { 
    createContext,
    useState,
    useEffect
} from "react";
import api from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const navigation = useNavigation();

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@finToken');

            if(storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                .catch(() => {
                    setUser(null);
                })

                // define o headers para ser usado em todas as requisições se a req acima não cair no catch.
                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false);
            }

            setLoading(false);

        }

        loadStorage();
    }, []);

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

    async function signIn(email, password) {
        try {
            setLoadingAuth(true);
            const response = await api.post('/login', {
                email: email,
                password: password,
            })
            console.log(response.data);
            const { id, name, token } = response.data;

            const data = {
                id,
                name,
                token,
                email
            }

            // define o headers para ser usado em todas as requisições.
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            await AsyncStorage.setItem('@finToken', token);

            setUser({
                id,
                name,
                email,
            });
            setLoadingAuth(false);
        } catch (error) {
            console.log('ERRO AO CADASTRAR: ', error);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider   
            value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }} 
        >
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider;