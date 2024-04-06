import Head from "next/head";
import CalendarItem from "./calendar";
import { activitiesCalendar } from "../../../data/activitiesCalendar";

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>Calendario para Huertos</title>
        <meta
          name="description"
          content="Calendario de siembra, cosecha y poda para huertos."
        />
        <meta
          name="keywords"
          content="calendario, siembra, cosecha, podas, huertos"
        />
      </Head>
      <h2 className="text-center">Calendario para Huertos</h2>
      <section className="flex justify-between gap-12 p-4">
        <div className="w-1/4 relative">
          <div className="absolute bg-yellow-200 box__shadow-md p-4 border-0 rounded-3xl top-0 -left-20">
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
        </div>
        <div className="w-3/4">
          <CalendarItem activities={activitiesCalendar} />
        </div>
      </section>
    </>
  );
}
