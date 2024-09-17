
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InputMask } from '@/utils/InputMask'
import { useAuth } from '@/context/AuthContext'
import { IoMdAlert } from "react-icons/io";
import { Eye, EyeOff } from 'lucide-react'

type SignUpType = {
  
    username: string,
    password: string,
    confirmPassword: string,
    email: string,
    phone: string,
    cpf: string,
    birth: string
  
}

const SignUp = () => {

  const { signUp, errorsRegister } = useAuth();

  const [formData, setFormData] = useState<SignUpType>({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    cpf: '',
    birth: '',
  });

  const [isShow, setIsShow] = useState<boolean>(false);
  const handlePassword = () => setIsShow(!isShow);


  const handleOnChange = (e:any)=> {

    e.preventDefault()

    switch(e.target.name){

      case 'cpf':
          const cpfObj = {...formData,[e.target.name]:InputMask('cpf',e.target.value)}
          setFormData(cpfObj)
          break;

      case 'phone':
          const phoneObj = {...formData,[e.target.name]:InputMask('phone',e.target.value)}
          setFormData(phoneObj)
          break;
    
      default:
        const newObj = {...formData,[e.target.name]:e.target.value}
        setFormData(newObj)
        break
        
    }
 
  }

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signUp(formData)
    
    
  }

  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="md:w-[500px] w-[320px] mt-32 md:mt-64">
          <CardHeader>
            <CardTitle className='mb-4 text-2xl'>Criar Conta</CardTitle>
            <CardDescription className=''>Enviaremos sua chave privada para seu email.</CardDescription>
          </CardHeader>
          <CardContent>
          {errorsRegister && (
                
                  <p 
                  className='mb-8 flex bg-red-900 p-4 shadow-md rounded-sm text-white text-[12px]'><IoMdAlert className='mr-3 h-5 w-5' /> Aviso: {errorsRegister}
                  </p>
                
            )}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">

                <label className="relative">
                  
                  <input 
                  required
                  name='username'
                  placeholder='Digite seu nome completo' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.username}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Nome
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                  
                </label>

                <label className="relative">

                  <input
                  required
                  type={isShow ? "text" : "password"}
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  placeholder="Digite sua senha"
                  id="password"
                  name="password"
                  onChange={handleOnChange}
                  value={formData.password}
                  />
                  
                  <p className='text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Senha
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>

                  <div
                  onClick={handlePassword}
                  className="absolute top-[10px] right-[12px]"
                  
                  >
                  {!isShow && <Eye size={18} />}
                  {isShow && <EyeOff size={18} />}
                </div>
                  
                  
                </label>

                <label className="relative">
                  
                  <input 
                  required
                  name='confirmPassword'
                  type={isShow ? "text" : "password"}
                  placeholder='Digite a confirmação da senha' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.confirmPassword}
                  onChange={handleOnChange}
                  />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Repetir senha
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                  
                </label>
                
                <label className="relative">
                  
                  <input 
                  required
                  name='email'
                  placeholder='Digite seu endereço de email' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.email}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Endereço de email
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                </label>

                <label className="relative">
                  
                  <input 
                  required
                  name='phone'
                  placeholder='(99) 9 9999-9999' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.phone}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Número de telefone
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                </label>

                <label className="relative">
                  
                  <input 
                  required
                  name='cpf'
                  placeholder='Informe sua Identicação de pessoa física' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.cpf}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  CPF
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                </label>

                <label className="relative">
                  
                  <input 
                  required
                  name='birth'
                  placeholder='Data de Nascimento' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.birth}
                  onChange={handleOnChange}
                  type="date" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-2 ml-2 px-[6px] duration-300 bg-white peer-valid:text-sm peer-valid:-translate-y-5'>
                  Data de nascimento
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  </p>
                  
                </label>

                <div className="flex">
                
                <Button 
                type='submit'
                className='w-32 mt-5 ml-auto' 
                variant="outline">Criar carteira</Button>
    
                </div>

                </div>
                
            </form>
          </CardContent>
          <CardFooter>
            <p>Já possui uma conta ? 
                <Link 
                href={'/login'}
                className='text-cyan-600'> Entrar.</Link></p>
          </CardFooter>
        </Card>
    </div>
  )
}

export default SignUp