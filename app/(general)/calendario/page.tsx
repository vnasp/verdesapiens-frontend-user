import Head from 'next/head';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  
  return (
    <>
      <Head>
        <title>Calendario para Huertos</title>
        <meta name="description" content="Calendario de siembra, cosecha y poda para huertos." />
        <meta name="keywords" content="calendario, siembra, cosecha, podas, huertos" />
      </Head>
      <h2 className="text-center">Calendario para Huertos</h2>
      <section className="flex justify-between gap-12 p-4">
      <div className="w-1/4 relative">
          <div className="absolute bg-yellow-200 border border-yellow-300 p-4 rounded-lg top-0 -left-20">
            <h3>¿Qué es un ciclo continuo?</h3>
            <p className="mb-4">Un ciclo de cosecha continuo es cuando tienes una verdura disponible para cosechar cada semana.</p>
            <h3>¿Cuánto tarda en ser un ciclo continuo?</h3>
            <p className="mb-4">Este ciclo se logra en un número de semanas que depende de cuánto demora en crecer la verdura y cuánto consumes semanalmente.
            </p>
          </div>
        </div>
        <div className="w-3/4">
      <Calendar />
      </div>
      </section>
    </>
  )
}