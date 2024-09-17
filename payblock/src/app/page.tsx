import MainContainer from "@/components/MainContainer";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    
      <MainContainer>
        <div className="sm:flex sm:space-x-32">
          
          <div className="">
            <h1 className="text-[30px] text-center sm:text-[75px] mb-8">Bem vindo a web3</h1>
            <div className="px-[70px] sm:px-0 sm:text-base text-xs">
            <p>Faça parte de cada bloco junto conosco.</p>
            <p>Uma rede blockchain oferece segurança, transparência e imutabilidade.</p>
            <p>Nesse mundo você vai aprender a transformar ativos em Tokens e NFT's.</p>
            <p>Alem de ter sua carteira e suas chaves privadas e públicas.</p>

            </div>
            
          </div>

          <div className="">
          <h1 className="text-xl sm:mt-20 mt-8 mb-6 text-center sm:text-start">PayBlock oferece:</h1>
          <div className="px-[70px] sm:px-0 text-xs sm:text-sm ">
            <p>Criações de carteiras e acesso na rede ethereum</p>
            <p>Transações de ativos como ether, tokens, nft</p>
            <p>Históricos de transações, Contratos inteligentes.</p>
            <div className="">

            <p>Não perca tempo e junte-se a PayBlock 
            
            <Link
            className="text-cyan-600 underline flex flex-row"
            href={'/signup'}
            >Criar conta<FaArrowRight className="ml-1" /></Link>
            
            </p>
            
            </div>
            

          </div>
          
          </div>
          
        </div>
        
      </MainContainer>
      
      
    
  );
}
