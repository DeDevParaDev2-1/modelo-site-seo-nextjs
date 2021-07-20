import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Import SEO
import Seo from './seo/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo
        titleHead="Teste de site"
        descriptionHead="Este é meu CV online"
      />

    </div>
  )
}
