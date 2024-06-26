"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/logo.webp"
        height={100}
        width={100}
        alt="Cargando..."
        className="w-20 h-20 animate-spin-slow"
      />
    </div>
  );
};

const ResultadoPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ResultadoContent />
    </Suspense>
  );
};

const ResultadoContent = () => {
  const searchParams = useSearchParams();

  const resultados = {
    verdura: searchParams.get("verdura"),
    ciclos: searchParams.get("ciclos"),
    germinacion: searchParams.get("germinacion"),
    cantidad: searchParams.get("cantidad"),
    semillas: searchParams.get("semillas"),
    estacion: searchParams.get("estacion"),
    rotacion: searchParams.get("rotacion"),
    compatibilidad: searchParams.get("compatibilidad"),
  };

  const toggleConsejosVisibility = () => {
    const consejosSection = document.getElementById('consejosSection');
    if (consejosSection.classList.contains('hidden')) {
      consejosSection.classList.remove('hidden');
      consejosSection.classList.add('flex');
    } else {
      consejosSection.classList.remove('flex');
      consejosSection.classList.add('hidden');
    }
  };

  return (
    <main>
      <h2 className="text-center">Calculadora para Ciclo Continuo</h2>
      <section className="p-4 md:p-10 text-lg text-justify relative">
        {resultados && (
          <>
            <article>
              <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-8 mb-10">
                <Image
                  src={`/icons/${resultados.verdura}.webp`}
                  height={60}
                  width={60}
                  alt={resultados.verdura}
                  priority
                />
                <div>
                  <p>
                    En {resultados.estacion}, la {resultados.verdura} tiene un
                    tiempo de crecimiento promedio de {resultados.ciclos}{" "}
                    semanas. Este periodo de tiempo es desde la siembra hasta la
                    cosecha.
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className="flex justify-between items-start gap-8 relative">
                <p>
                  Para esta verdura, la tasa de germinación promedio es de{" "}
                  {resultados.germinacion}%. Si quieres comer semanalmente{" "}
                  {resultados.cantidad} {resultados.verdura}, entonces debes
                  sembrar{" "}
                  <strong>
                    {resultados.semillas} semillas de {resultados.verdura}
                  </strong>{" "}
                  cada semana para lograr eventualmente un ciclo de cultivo
                  continuo.
                </p>
              </div>
            </article>
            <div className="flex flex-col items-center mt-4">
              <Image
                src={`/icons/seeding.webp`}
                height={100}
                width={382}
                alt="Germinación semillas"
                loading="lazy"
              />
              <button
                type="submit"
                className="bg-yellow-200 mt-10 w-full md:w-1/2"
                onClick={toggleConsejosVisibility}
              >
                Ver Consejos
              </button>
            </div>
          </>
        )}
          <article id="consejosSection"  className="hidden absolute bg-warmGray-200 top-0 left-0 z-10 flex-col items-center p-4 md:p-10">
            <div className="flex flex-col justify-center items-center md:flex-row gap-10 mb-8">
              <Image
                src={`/icons/rotacion.webp`}
                height={150}
                width={150}
                alt="Rotación de Cultivos"
                loading="lazy"
              />
              <p>
                La <b>rotación de cultivos</b> es plantar diferentes cultivos
                secuencialmente en la misma área de tierra para mejorar la salud
                del suelo, optimizar los nutrientes en el suelo y combatir la
                presión de las plagas y las malezas. Luego de plantar{" "}
                {resultados.verdura} es recomendable {resultados.rotacion}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row gap-10 mb-8">
              <p>
                La <b>compatibilidad de cultivos</b> consiste en la plantación
                conjunta de distintos cultivos, con la intención de promover y
                optimizar la captación de nutrientes, el control de plagas y la
                polinización. Si plantas {resultados.verdura} es recomendable{" "}
                {resultados.compatibilidad}
              </p>
              <Image
                src={`/icons/compatibilidad.webp`}
                height={150}
                width={150}
                alt="Asociación de Cultivos"
                loading="lazy"
                className="hidden md:block"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-200 mt-10 w-full md:w-1/2"
              onClick={toggleConsejosVisibility}
            >
              Volver
            </button>
          </article>
      
      </section>
    </main>
  );
};

export default ResultadoPage;
