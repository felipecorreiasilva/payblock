'use client'

import { ethers } from 'ethers';
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({
    user: {},
    setUser: function (value:any) { return value },
    errorsRegister: {},
    setErrorsRegister: function (value:any) { return value },
    errorsLogin: {},
    setErrorsLogin: function (value:any) { return value },
    signUp: function (value:any) {},
    logIn: function (email: string, password: string) {},
    logOut: function () {}
});

export const useAuth = () => useContext<any>(AuthContext);

const getInitialAuth = () => {
    const user = (typeof window !== 'undefined') && localStorage.getItem('user')
    return user && JSON.parse(user)
}

// Create the auth context provider
export const AuthContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    
    const [user, setUser] = useState<any>(getInitialAuth);
    const [errorsLogin,setErrorsLogin] = useState<string>('')
    const [errorsRegister,setErrorsRegister] = useState<string>('')
    // const router = useRouter();
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);
    
    // Sign up the user
    const signUp = async(values:any) => {
        
        let validationErrors = ''

        console.log(values)
        const unmaskPhone = values.phone?.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
        
        if (!values.username.trim()){
            validationErrors = "Campo de nome obrigatório"
            setErrorsRegister(validationErrors)
            return
        } else if (values.username.length < 4){
            validationErrors = 'Nome deve ter pelo menos 4 caracteres'
            setErrorsRegister(validationErrors)
            return
        }

        const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!values.email.trim()){
            validationErrors = "Campo de email obrigatório"
            setErrorsRegister(validationErrors)
            return
            
        } 
        else if (values.email.length < 3){
            validationErrors = "Email deve ter pelo menos 3 caracteres"
            setErrorsRegister(validationErrors)
            return
            
        } 
        
        else if (!emailValidator.test(values.email)){
            validationErrors = 'Formato de email inválido'
            setErrorsRegister(validationErrors)
            return
            
        }

        if (!unmaskPhone.trim()){
            validationErrors = "Campo de telefone obrigatório"
            setErrorsRegister(validationErrors)
            return
        } else if (unmaskPhone?.length !== 11){
            validationErrors = 'Formato de telefone inválido'
            setErrorsRegister(validationErrors)
            return
        }

        if (!values.birth.trim()){
            validationErrors = "Campo data de nascimento obrigatório"
            setErrorsRegister(validationErrors)
            return
        }

        const wallet = ethers.Wallet.createRandom()
        console.log(wallet)
              
    };

    // Login the user
    const logIn = async (email: string, password: string) => {

        let validationErrors = ''

        const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!email.trim()){
            validationErrors = "Campo obrigatório"
            setErrorsLogin(validationErrors)
            return
            
        } 
        else if (email.length < 3){
            validationErrors = "Email deve ter pelo menos 3 caracteres"
            setErrorsLogin(validationErrors)
            return
            
        } 
        
        else if (!emailValidator.test(email)){
            validationErrors = 'Formato de email inválido'
            setErrorsLogin(validationErrors)
            return
            
        }

        if (!password.trim()){
            validationErrors = "Campo obrigatório"
            setErrorsRegister(validationErrors)
            return
        } else if (password.length < 8){
            validationErrors = 'Senha deve ter pelo menos 8 caracteres'
            setErrorsRegister(validationErrors)
            return
        }
        
    };

    // Logout the user
    const logOut = async () => {
        setUser(null);
        // router.push('/');
    };

    const value = { 
        
        user,
        setUser,
        signUp,
        logIn, 
        logOut,
        errorsRegister,
        setErrorsRegister,
        errorsLogin,
        setErrorsLogin
        
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};