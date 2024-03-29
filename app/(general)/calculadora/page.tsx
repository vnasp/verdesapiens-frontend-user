import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const vegetables = [
  { id: 1, name: 'lechuga', icon: 'lechuga' },
  { id: 2, name: 'espinaca', icon: 'espinaca' },
  { id: 3, name: 'rúcula', icon: 'rucula' },
]

const consumptions = [
  { id: 1, perweek: 1 },
  { id: 2, perweek: 2 },
  { id: 3, perweek: 3 },
  { id: 4, perweek: 4 },
  { id: 5, perweek: 5 },
  { id: 6, perweek: 6 },
]

const seasons = [
  { id: 1, season: 'primavera' },
  { id: 2, season: 'verano' },
  { id: 3, season: 'otoño' },
  { id: 4, season: 'invierno' }
]

export default function CalculatorPage() {

  return (
    <>
    <Head>
      <title>Calculadora para Huertos</title>
      <meta name="description" content="Calculadora para siembre de cultivo continuo." />
      <meta name="keywords" content="calculador, conversor, cultivo continuo" />
    </Head>
    <h2 className="text-center">Calculadora para Ciclo Continuo</h2>
      <section className="flex justify-between gap-12 p-4">
        <div className="w-1/2 relative">
          <div className="absolute bg-yellow-200 border border-yellow-300 p-4 rounded-lg top-0 -left-20">
            <h3>¿Qué es un ciclo continuo?</h3>
            <p className="mb-4">Un ciclo de cosecha continuo es cuando tienes una verdura disponible para cosechar cada semana.</p>
            <h3>¿Cuánto tarda en ser un ciclo continuo?</h3>
            <p className="mb-4">Este ciclo se logra en un número de semanas que depende de cuánto demora en crecer la verdura y cuánto consumes semanalmente.
            </p>
            <h3>¿En cuánto cosecharé mi primera verdura?</h3>
            <p className="mb-4">Durante estas semanas iniciales, estarás sembrando nuevas semillas cada semana sin cosechar ninguna verdura, porque cada planta necesita completar su ciclo de crecimiento.
            Pero al final del periodo, la primera semilla que cosechaste debería estar lista para cosechar.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative h-1/2 pt-4">
          <form>
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="vegetables">Selecciona una verdura</label>
              <select id="vegetables" className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 capitalize">
                {vegetables.map(vegetable => (
                  <option key={vegetable.id} value={vegetable.icon}>{vegetable.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="consumptions">Selecciona tu consumo semanal</label>
              <select id="consumptions" className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                {consumptions.map(consumption => (
                  <option key={consumption.id} value={consumption.perweek}>{consumption.perweek} por semana</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="season">Selecciona la estación del año</label>
              <select id="season" className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 capitalize">

                {seasons.map(season => (
                  <option key={season.id} value={season.season}>{season.season}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col items-center relative">
              <button className="absolute -bottom-20 right-24"><FontAwesomeIcon icon={faSeedling} className="h-4 me-2" />Calcular</button>
            </div>
          </form>
        </div>
      </section >
    </>
  )
}