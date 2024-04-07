import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export default function HomePage() {
  return (
    <main className="bg-warmGray-200 box__shadow-lg rounded-2xl p-4 w-2/3 text-center">
      <h2 className="text-4xl font-bold text-center mb-2">
        Bienvenidos a VerdeSapiens
      </h2>
      <section className="px-4 py-8 text-xl">
        <p className="mb-2">
          Cada semilla plantada es un paso hacia un futuro más verde y
          sostenible.
        </p>
        <div className="flex gap-10 my-10">
          <article className="w-1/3 text-center">
            <FontAwesomeIcon
              icon={faCalendarDays}
              aria-hidden="true"
              className="text-lime-500 text-5xl bg-warmGray-200 box__shadow-lg py-2 px-4 rounded-2xl"
            />
            <h3>Calendario de Jardinería</h3>
            <p>
              Para saber qué y cuándo plantar, podar, y cosechar a lo largo del año.
            </p>
          </article>
          <article className="w-1/3 text-center">
            <FontAwesomeIcon
              icon={faRecycle}
              aria-hidden="true"
              className="text-lime-500 text-5xl bg-warmGray-200 box__shadow-lg py-2 px-4 rounded-2xl"
            />
            <h3>Consejos de Cultivo</h3>
            <p>
              Descubre prácticas para un cultivo
              saludable y sostenible.
            </p>
          </article>
          <article className="w-1/3 text-center">
            <FontAwesomeIcon
              icon={faCalculator}
              aria-hidden="true"
              className="text-lime-500 text-5xl bg-warmGray-200 box__shadow-lg py-2 px-4 rounded-2xl"
            />
            <h3>Calculadora de siembra</h3>
            <p>
              Herramientas interactivas para planificar de manera eficiente.
            </p>
          </article>
        </div>
        <p>
          Creemos en el poder de la tierra para proporcionar y en la capacidad
          de cada individuo para contribuir a un mundo más verde.
        </p>
      </section>
    </main>
  );
}
