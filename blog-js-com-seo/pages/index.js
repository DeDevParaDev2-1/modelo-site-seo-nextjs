import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Import SEO
import Seo from './components/seo/head'

//Componentes Layout
import Topo from './components/topo'
import { Wrap } from './components/wrap/style'

export default function Home() {
  return (
    <Wrap>
      <Seo
        titleHead="Teste de site"
        descriptionHead="Site CV André Laurentino Rodrigues"
        authorHead="André Laurentino Rodrigues"
      />
      <Topo
        name="André Laurentino Rodrigues"
        age="28 anos"
        email="andrelaurentinomg@gmail.com"
        city="Bambuí"
      />
      
    </Wrap>
  )
}
