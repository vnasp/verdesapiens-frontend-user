import { Slider } from './Slider';

export const metadata = {
  title: "Datos Sustentables para Huertos | VerdeSapiens",
  description: "Datos útiles para suplementar huertos",
  keywords: ["abono huerto", "humus lombriz", "cáscara de huevo", "borra de cafe", "ideas reciclaje"]
};

export default function InfoPage() {

  return (
    <>
      <main>
      <h2 className="text-center">Datos Sustentables para Huertos</h2>
      <article className="custom__width md:w-auto">
        <Slider />
      </article>
      </main>
    </>
  )
}