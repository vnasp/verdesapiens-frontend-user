import Formulario from './formulario';

export const metadata = {
  title: "Calculadora para Huertos | VerdeSapiens",
  description: "Calculadora para siembre de cultivo continuo.s",
  keywords: ["calculadora", "conversor", "cultivo continuo"]
};

export default function CalculatorPage() {
  return (
    <>
    <main>
    <h2 className="text-center">Calculadora para Ciclo Continuo</h2>
      <section className="flex flex-col-reverse justify-between gap-12 md:flex-row  md:p-4">
      <article className="md:w-1/2">
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
        <div className="md:w-1/2 pt-4">
          <Formulario/>
        </div>
      </section>
    </main>
    </>
  )
}