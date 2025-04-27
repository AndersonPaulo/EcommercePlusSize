import { SocialIcon } from "react-social-icons"
import {  ArrowUp } from 'lucide-react'

function Footer() {

    const scrollToTop = () =>{

      window.scrollTo({ top: 0 , behavior: 'smooth'})
    }

    const year = new Date().getFullYear()
    return (
      <footer className="p-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy;{year} ModaPlus. Todos os direitos reservados.

          </p>
          <div className="socialsmedia flex ">
            <SocialIcon url="https://facebook.com" bgColor="#ffffff" fgColor="#4267B2" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://instagram.com" bgColor="#ffffff" fgColor="#E1306C" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://twitter.com" bgColor="#ffffff" fgColor="#1DA1F2" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://whatsapp.com" bgColor="#ffffff" fgColor="#1DA1F2" style={{ height: 35, width: 35 }} /> 
          </div>
          <span
            onClick={scrollToTop}
            className="arrowUp absolute right-6 bottom-6 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full shadow-md transition"
            aria-label="Voltar ao topo"
        >
            <ArrowUp size={18} />
        </span>
        </div>
       
      </footer>
    );
  }
  
  export default Footer;
  