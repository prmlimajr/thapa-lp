import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import React from 'react'
import styles from '../styles/Tecnico.module.css'
import Image from 'next/image';

export default function Tecnico() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href='/'>
          <div className={styles.goback}>
              <BsArrowLeftShort size={30} />
              <span>Voltar</span>
          </div>
        </Link>

        <main>
          <h1>Parte Tecnica</h1>

          <p style={{marginTop: '50px'}}>Aqui estao alguns dados tecnicos, o escopo do projeto e o seu Business Model Canvas.</p>
        </main>

        <div />
      </div>

      <div className={styles.right}>
        <h2>O que usamos para fazer o ThapaFit:</h2>

        <p>O ThapaFit foi programado utilizando o JavaScript, tanto no frontend, tanto no backend e tanto no mobile.</p>

        <p>Para o frontend, utilizamos o React que facilita a criação de sites estáticos e dinâmicos.</p>

        <p>Para o backend, utilizamos o NodeJS, que é uma plataforma de desenvolvimento baseada em JavaScript.</p>

        <p>Para o mobile, utilizamos o React Native, que é uma biblioteca JavaScript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p>

        <p>Como banco de dados optamos pelo MySQL.</p>

        <p>Para o deploy do frontend, utilizamos o Vercel, que é uma plataforma de hospedagem de sites estáticos e dinâmicos.</p>

        <p>O backend e o banco de dados estao hospedados no provedor de nuvem Heroku.</p>

        <h2>Escopo do produto:</h2>

        <p>Cadastro de usuários</p>

        <p>Prescrição de treinos</p>
        
        <p>Visualização de treinos</p>

        <p>Visualização de modo de execução de exercício</p>
        
        <p>Registro de performance</p>

        <h2>Business Model Canvas</h2>

        <a href='https://drive.google.com/file/d/1fCa0DjboaA_2hz7NA5jy3dXxM-KaQB1p/view?usp=sharing' target='_blank' rel="noreferrer">
          <Image src="/bmc.jpeg" alt="Business Model Canvas" width={800} height={600} />
        </a>
      </div>
    </div>
  )
}
