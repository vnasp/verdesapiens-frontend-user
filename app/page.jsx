import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export default function HomePage() {
  return (
    <main className="bg-warmGray-200 box__shadow-lg rounded-2xl p-4 w-2/3">
      <h2 className="text-4xl font-bold text-center mb-6">
        Bienvenidos a VerdeSapiens
      </h2>
      <section class="px-4 py-8 text-xl text-justify">
        <p class=" mb-4">
          Cada semilla plantada es un paso hacia un futuro más verde y
          sostenible. Nuestra plataforma está diseñada para apoyarte en cada
          etapa del ciclo de cultivo.
        </p>
        <div class="mb-8">
          <h3 class="font-semibold">Explora, aprende y crece con nosotros</h3>
          <ul class="list-none pl-5">
            <li>
            <FontAwesomeIcon icon={faCalendarDays} className="text-lime-500" /> Calendario de Jardinería: Sigue nuestro calendario personalizado
              para saber qué y cuándo plantar, podar, y cosechar a lo largo del
              año.
            </li>
            <li>
            <FontAwesomeIcon icon={faRecycle} className="text-lime-500" /> Consejos de Cultivo: Descubre prácticas de cultivo que promueven
              un crecimiento saludable y sostenible.
            </li>
            <li>
            <FontAwesomeIcon icon={faCalculator} className="text-lime-500" /> Herramientas Interactivas: Utiliza nuestras herramientas, como la
              calculadora de siembra, para planificar de manera eficiente.
            </li>
          </ul>
        </div>
        <p>
          En VerdeSapiens nos comprometemos a ofrecerte los recursos y el
          conocimiento necesarios para que tu jardín o huerto prospere. Creemos
          en el poder de la tierra para proporcionar y en la capacidad de cada
          individuo para contribuir a un mundo más verde.
        </p>
      </section>
    </main>
  );
}
