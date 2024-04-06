import Head from 'next/head';
import { Slider } from './Slider';

export default function InfoPage() {

  return (
    <>
      <Head>
        <title>Datos Útiles para Huertos</title>
        <meta name="description" content="Datos útiles para suplementar huertos." />
        <meta name="keywords" content="abono huerto, humus lombriz, cáscara de huevo, borra de cafe, ideas reciclaje" />
      </Head>
      <h2 className="text-center">Datos Útiles para Huertos</h2>
      <section>
        <Slider />
      </section>
    </>
  )
}