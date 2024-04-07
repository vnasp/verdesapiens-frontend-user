import Head from 'next/head';
import { Slider } from './Slider';

export default function InfoPage() {

  return (
    <>
      <Head>
        <title>Datos Sustentables para Huertos</title>
        <meta name="description" content="Datos útiles para suplementar huertos." />
        <meta name="keywords" content="abono huerto, humus lombriz, cáscara de huevo, borra de cafe, ideas reciclaje" />
      </Head>
      <main>
      <h2 className="text-center">Datos Sustentables para Huertos</h2>
      <article>
        <Slider />
      </article>
      </main>
    </>
  )
}