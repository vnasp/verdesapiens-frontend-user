"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import {
  dataVegetables,
  dataConsumptions,
  dataSeasons,
} from "../../../data/dataCalculator";
import Alert from "./alert";

const Formulario = () => {
  const [vegetable, setVegetable] = useState("");
  const [consumptionPerWeek, setConsumptionPerWeek] = useState("");
  const [season, setSeason] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  // Router Navigation
  const router = useRouter();

  const calculateSeedsToPlant = (
    consumptionPerWeek,
    germinationRate,
    seasonAdjustmentFactor
  ) => {
    const baseSeedsNeeded = Math.ceil(
      consumptionPerWeek / (germinationRate / 100)
    );
    const adjustedSeedsNeeded = Math.ceil(
      baseSeedsNeeded * seasonAdjustmentFactor
    );
    return adjustedSeedsNeeded;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vegetable || !consumptionPerWeek || !season) {
      setAlertMessage("Debes elegir una opción en todos los campos.");
      return;
    }
    const selectedVegetable = dataVegetables.find((v) => v.name === vegetable);
    const selectedSeason = dataSeasons.find((s) => s.season === season);
    const adjustedCycle = Math.round(selectedVegetable.cycle * selectedSeason.adjustmentFactor);
    const seedsToPlant = calculateSeedsToPlant(
      Number(consumptionPerWeek),
      selectedVegetable.germinationRate,
      selectedSeason.adjustmentFactor
    );
    // Construye la cadena de parámetros de consulta
  const queryParams = new URLSearchParams({
    verdura: vegetable,
    ciclos: adjustedCycle,
    germinacion: selectedVegetable.germinationRate,
    cantidad: consumptionPerWeek,
    semillas: seedsToPlant,
    estacion: season,
    rotacion: selectedVegetable.rotation,
    compatibilidad: selectedVegetable.compatibility,
  })
  router.push(`/calculadora/resultado?${queryParams}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="vegetables">Verdura</label>
        <select
          id="vegetables"
          value={vegetable}
          onChange={(e) => setVegetable(e.target.value)}
          className="form__input"
        >
          <option value="">Selecciona una verdura</option>
          {dataVegetables.map((vegetable) => (
            <option key={vegetable.id} value={vegetable.name}>
              {vegetable.name}
            </option>
          ))}
        </select>
    
        <label htmlFor="consumptions">Consumo semanal</label>
        <select
          id="consumptions"
          type="number"
          value={consumptionPerWeek}
          onChange={(e) => setConsumptionPerWeek(e.target.value)}
          className="form__input"
        >
          <option value="">Selecciona una cantidad</option>
          {dataConsumptions.map((consumption) => (
            <option key={consumption.id} value={consumption.perweek}>
              {consumption.perweek} por semana
            </option>
          ))}
        </select>
    
        <label htmlFor="season">Estación del año</label>
        <select
          id="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="form__input"
        >
          <option value="">Selecciona una estación</option>
          {dataSeasons.map((season) => (
            <option key={season.id} value={season.season}>
              {season.season}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-yellow-200 mt-10">
          <FontAwesomeIcon icon={faSeedling} className="h-4 me-2" />
          Calcular
        </button>
        <Alert message={alertMessage} />
      </div>
    </form>
  );
};

export default Formulario;
