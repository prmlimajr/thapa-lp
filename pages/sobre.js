import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from '../styles/Sobre.module.css'
import ImageGallery from 'react-image-gallery';

export default function Sobre() {
  const images = [
    {
      original: '/tela1.png',
      thumbnail: '/tela1.png',
    },
    {
      original: '/tela2.png',
      thumbnail: '/tela2.png',
    },
    {
      original: '/tela3.png',
      thumbnail: '/tela3.png',
    },
    {
      original: '/tela4.png',
      thumbnail: '/tela4.png',
    },
    {
      original: '/tela5.png',
      thumbnail: '/tela5.png',
    },
    {
      original: '/tela6.png',
      thumbnail: '/tela6.png',
    },
  ];

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
          <h1>O que e ThapaFit?</h1>

          <p>ThapaFit e um aplicativo que tem como objetivo auxiliar instrutores e atletas a melhorar sua performance durante o treino.</p>
        </main>

        <div />
      </div>

      <div className={styles.right}>
        <h2>Por que criamos o ThapaFit:</h2>
        <p>O ThapaFit surge da necessidade de atletas que praticam exercícios em academias e precisam de referências visuais para execução de seus treinos.</p>
        
        <p>Nem sempre o seu instrutor esta disponível e ter um auxílio visual para a execução dos treinos é fundamental.</p>

        <p>É um produto que serve tanto a atletas quanto a instrutores, visto que é possível fazer acompanhamento da evolução física e dos treinos através do sistema.</p>

        <ImageGallery items={images} />

        <h2>O que queremos com o ThapaFit?</h2>

        <p>Ao fim deste projeto objetivamos ter um sistema de acompanhamento de treinos que seja utilizado tanto por alunos quanto por instrutores de academias de ginástica.</p>
      </div>
    </div>
  )
}