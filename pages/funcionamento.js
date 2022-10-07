import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import React from 'react'
import styles from '../styles/Funcionamento.module.css'
import Image from 'next/image';

export default function Funcionamento() {
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
          <h1>Como funciona o ThapaFit?</h1>

          <p style={{marginTop: '50px'}}>Este sistema possui duas plataformas distintas, uma direcionada aos instrutores e outra direcionada aos alunos.</p>
        </main>

        <div />
      </div>

      <div className={styles.right}>
        <h2>A Plataforma do Instrutor</h2>

        <h3>A plataforma do instrutor é uma aplicação Web hospedada na nuvem.</h3>

        <p>Nela o profissional consegue cadastrar um atleta, observando o seu objetivo com os treinos, historico de lesoes e performance nos treinos.</p>
        
        <Image src="/tela1.png" alt='tela1' width={500} height={300} />

        <p>Ao escolher um atleta, o profissional consegue cadastrar um treino especifico para as necessidades dele. E mais, consegue visualizar se o atleta esta correspondendo a sua rotina de treinos em tempo real.</p>

        <Image src="/tela2.png" alt='tela2' width={500} height={300} />

        <h2>A plataforma do Atleta</h2>

        <p>A plataforma do atleta trata-se de uma aplicativo mobile híbrido que pode ser executada tanto em sistemas iOS quanto em Android.</p>
      </div>
    </div>
  )
}
