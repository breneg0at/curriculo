'use client'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import breneFoto from '/public/breneFoto.jpeg'
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact, FaWhatsapp } from 'react-icons/fa6';
import { SiFigma, SiGraphql, SiReactquery, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
export default function Home() {
  const [activeSection, setActiveSection] = useState('portfolio'); 


  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contatoRef = useRef(null);

  useEffect(() => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const options = {
    threshold: 0.6,
  };

  const observer = new IntersectionObserver(observerCallback, options);

  if (portfolioRef.current) observer.observe(portfolioRef.current);
  if (aboutRef.current) observer.observe(aboutRef.current);
  if (skillsRef.current) observer.observe(skillsRef.current);
  if (contatoRef.current) observer.observe(contatoRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] p-4 gap-3 text-white">
      <header className={`mx-auto text-2xl ${activeSection === 'portfolio' ? 'border-b-2 border-b-indigo-500' : ''}`}>
        Portfólio
      </header>

      <section ref={portfolioRef} id='portfolio'>
        <div className='flex flex-col items-center gap-3 mt-5'>
          <Image src={breneFoto} alt='Breno Leite' width={180} height={180} className='rounded-full' />
          <div className='flex flex-col gap-1 items-center'>
            <h2 className='text-4xl text-wrap text-center'>
              Olá, eu sou o <br /> <span className='text-indigo-500'>Breno Leite</span>
            </h2>
            <p className='text-gray-500'>Desenvolvedor Front-end</p>
          </div>
          <div>
        <a
          href="https://wa.me/+5571987252586" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <button className='w-56 border border-indigo-500 p-3 rounded-md hover:bg-gray-900'>
            Entre em contato
          </button>
        </a>          
    </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        id='sobre-mim'
        className={`flex flex-col gap-3 mt-5`}
      >
        <h2 className={`text-2xl mx-auto ${activeSection === 'sobre-mim' ? 'border-b-2 border-b-indigo-500' : ''}`}>Sobre mim</h2>
   <div className='mx-auto text-justify'>
    <p>Já estou na área há quase 3 anos profissionalmente. Hoje estou em busca de recolocação no mercado.</p>
    <br />
    <div>
      <p>[03/2022 - 03/2023] - Instrutor de conteúdo Kenzie Academy</p>
    </div>
    <div>
      <p>[04/2023 - 01/2024] - Desenvolvedor Front-end Compra Rápida</p>
    </div>
    <div>
      <p>[01/2024 - 05/2024] - Desenvolvedor Front-end Andrinno Software House</p>
    </div>
    <br />
    <p>Atuei com React.js, Nextjs, JavaScript, TypeScript, Styled-Components, Tailwind, GraphQL, ContextApi, Material UI e consumo de APIs REST. Também possuo experiência em projetos gerenciados por Metodologias Ágeis. Formado em Desenvolvimento Web Fullstack na Kenzie Academy Brasil.</p>
  </div>
      </section>

      <section
        ref={skillsRef}
        id='skills'
        className={`flex flex-col gap-3 mt-5`}
      >
        <h2 className={`text-2xl mx-auto ${activeSection === 'skills' ? 'border-b-2 border-b-indigo-500' : ''}`}>Habilidades</h2>

        <div className='flex flex-row flex-wrap justify-between gap-6'>
          <div className='text-orange-600 rounded-s-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500 '>
            <p className='text-lg text-white'>HTML5</p>

            <div className='text-5xl'>
            <FaHtml5 />
            </div>
          </div>

          <div className=' text-cyan-500 rounded-e-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500'>
            <p className='text-lg text-white'>React</p>

            <div className='text-5xl'>
              <FaReact />
            </div>
          </div>
          <div className='text-cyan-500 rounded-s-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500 '>
            <p className='text-lg text-white'>CSS3</p>

            <div className='text-5xl'>
            <FaCss3 />
            </div>
          </div>

          <div className=' text-yellow-400 rounded-e-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500'>
            <p className='text-lg text-white'>Javascript</p>

            <div className='text-5xl'>
              <FaJs />
            </div>
          </div>
          <div className='text-cyan-500 rounded-s-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500 '>
            <p className='text-lg text-white'>Tailwind CSS</p>

            <div className='text-5xl'>
              <SiTailwindcss />
            </div>
          </div>

          <div className=' text-blue-600 rounded-e-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500'>
            <p className='text-lg text-white'>Typescript</p>

            <div className='text-5xl'>
              <SiTypescript />
            </div>
          </div>

          <div className='text-pink-400 rounded-s-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500 '>
            <p className='text-lg text-white'>GraphQL</p>

            <div className='text-5xl'>
              <SiGraphql />
            </div>
          </div>

          <div className=' text-white rounded-e-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500'>
            <p className='text-lg text-white'>NextJs</p>

            <div className='text-6xl'>
              <RiNextjsFill />
            </div>
          </div>

          <div className='text-pink-400 rounded-s-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500 '>
            <p className='text-lg text-white'>React Query</p>

            <div className='text-5xl'>
              <SiReactquery />
            </div>
          </div>

          <div className=' text-red-500 rounded-e-xl p-3 gap-3 flex flex-col items-center justify-center w-36 h-32 bg-slate-950 border-b-2 border-b-indigo-500'>
            <p className='text-lg text-white'>Figma</p>

            <div className='text-5xl'>
              <SiFigma />
            </div>
          </div>

        </div>
      </section>

      <section
        ref={aboutRef}
        id='contato'
        className={`flex flex-col gap-3 mt-5`}
      >
        <h2 className={`text-2xl mx-auto ${activeSection === 'contato' ? 'border-b-2 border-b-indigo-500' : ''}`}>Contato</h2>
        <div className='flex gap-8 mx-auto mt-4'>
          <a
            href="https://wa.me/+5571987252586" 
            target="_blank" 
            rel="noopener noreferrer" 
            >        
            <div className='flex flex-col gap-2 text-5xl text-green-600'>
            <FaWhatsapp />
            </div>
          </a>  

          <a
            href="https://github.com/brenoleitep" 
            target="_blank" 
            rel="noopener noreferrer" 
            >        
            <div className='flex flex-col gap-2 text-5xl'>
            <FaGithub />
            </div>
          </a>        

          <a
            href="mailto:brenoleitepereira@gmail.com?subject=Interesse%20em%20seus%20serviços&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            >
            <div className='flex flex-col gap-2 text-5xl text-amber-700'>
              <FiMail />
            </div>
          </a>
        </div>

      </section>
    </div>
  );
}
