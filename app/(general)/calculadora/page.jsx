import Head from 'next/head';
import Formulario from './formulario';

export default function CalculatorPage() {
  return (
    <>
    <Head>
      <title>Calculadora para Huertos</title>
      <meta name="description" content="Calculadora para siembre de cultivo continuo." />
      <meta name="keywords" content="calculador, conversor, cultivo continuo" />
    </Head>
    <main>
    <h2 className="text-center">Calculadora para Ciclo Continuo</h2>
      <section className="flex justify-between gap-12 p-4">
      <article className="w-1/2">
        <div className="bg-yellow-200 box__shadow-md p-4 border-0 rounded-2xl md:ml-[-6rem]">
          <h3>Información sobre el ciclo continuo</h3>
          <section>
            <h3>¿Qué es un ciclo continuo?</h3>
            <p>Un ciclo de cosecha continuo es cuando tienes una verdura disponible para cosechar cada semana.</p>
          </section>
          <section>
            <h3>¿Cuánto tarda en ser un ciclo continuo?</h3>
            <p>Este ciclo se logra en un número de semanas que depende de cuánto demora en crecer la verdura y cuánto consumes semanalmente.</p>
          </section>
          <section>
            <h3>¿En cuánto cosecharé mi primera verdura?</h3>
            <p>Durante estas semanas iniciales, estarás sembrando nuevas semillas cada semana sin cosechar ninguna verdura, porque cada planta necesita completar su ciclo de crecimiento. Pero al final del periodo, la primera semilla que sembraste debería estar lista para cosechar.</p>
          </section>
        </div>
      </article>
        <div className="w-1/2 relative h-1/2 pt-4">
          <Formulario/>
        </div>
      </section>
    </main>
    </>
  )
}