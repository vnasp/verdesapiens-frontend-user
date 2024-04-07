import CalendarItem from "./calendar";
import dataCalendar from "../../../data/dataCalendar";

export const metadata = {
  title: "Calendario para Huertos | VerdeSapiens",
  description: "Calendario de siembra, cosecha y poda para huertos",
  keywords: ["calendario", "siembra", "cosecha", "podas", "huertos"]
};

export default function CalendarPage() {
  return (
    <>
    <main>
    <h2 className="text-center">Calendario para Huertos</h2>
    <section className="flex flex-col-reverse md:flex-row justify-between gap-12 md:p-4">
      <article className="md:w-1/4">
        <div className="bg-yellow-200 box__shadow-md p-4 border-0 rounded-2xl md:ml-[-6rem]">
          <h3>¿De qué trata?</h3> 
          <p className="mb-4">
            Este calendario ofrece una guía sobre las fechas óptimas para
            sembrar semillas, cosechar hortalizas, podar hierbas y realizar
            actividades esenciales de mantenimiento del huerto.
          </p>
          <p className="mb-4">
            Se han tenido en cuenta las particularidades climáticas y
            estacionales del hemisferio sur para determinar las
            recomendaciones.
          </p>
        </div>
      </article>
      <div className="md:w-3/4">
        <CalendarItem activities={dataCalendar} />
      </div>
    </section>
  </main>
    </>
  );
}
