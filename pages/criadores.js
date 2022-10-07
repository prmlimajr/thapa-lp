import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from '../styles/Criadores.module.css'

export default function Criadores() {
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
          <h1>Quem faz o ThapaFit?</h1>

          <h2>Paulo Lima</h2>

          <p>Paulo Lima é um estudante de Ciência da Computação na Uninassau. Atualmente, ele é um desenvolvedor fullstack na Pitang Agile IT.</p>

          <p style={{ margin: '30px 0'}}>Matricula: 01146437</p>

          <p>Email: prmlimajr@hotmail.com</p>

          <a href='https://github.com/prmlimajr'>https://github.com/prmlimajr</a>

          <Image src="/paulo.png" alt="Foto do Paulo" width={150} height={800} />
        </main>

        <div />
      </div>

      <div className={styles.left}>
        <div />

        <main className={styles.main}>
          <h2>Thalys Rossi</h2>

          <p>Thalys Rossi é um estudante de Ciência da Computação na Uninassau. Atualmente, ele é um desenvolvedor fullstack na ZBRA.</p>

          <p style={{ margin: '30px 0'}}>Matricula: 01187827</p>

          <p>Email: thalys.g.rossi@gmail.com</p>

          <a href='https://github.com/ThalysRossi'>https://github.com/ThalysRossi</a>
          
          <Image src="/thalys.png" alt="Foto do Thalys" width={150} height={800} />

        </main>

        <div />
      </div>
    </div>
  )
}
