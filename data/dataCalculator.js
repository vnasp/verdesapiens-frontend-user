const dataVegetables = [
  {
    id: 1,
    name: "lechuga",
    germinationRate: 96,
    cycle: 6,
    rotation: "evitar seguir con cultivos de la familia de las crucíferas como brócoli, coliflor, kale, el rábano o la rúcula.",
    compatibility: "asociar con zanahorias, rábanos y fresas."
  },
  {
    id: 2,
    name: "rúcula",
    germinationRate: 90,
    cycle: 4,
    rotation: "seguir con hortalizas de raíz como zanahorias o remolachas.",
    compatibility: "asociar con menta y eneldo, pero evitar las coles y brócolis."
  },
  {
    id: 3,
    name: "espinaca",
    germinationRate: 85,
    cycle: 5,
    rotation: "plantar después de leguminosas como frijoles o guisantes.",
    compatibility: "asociar con fresas y habas."
  },
  {
    id: 4,
    name: "kale",
    germinationRate: 75,
    cycle: 7,
    rotation: "seguir con plantas no crucíferas, como tomates o pepinos.",
    compatibility: "evitar plantar junto a otras crucíferas como brócoli o coliflores."
  },
  {
    id: 5,
    name: "cilantro",
    germinationRate: 85,
    cycle: 3,
    rotation: "seguir con cultivos como tomates.",
    compatibility: "asociar con tomates y pimientos, evitando el eneldo."
  },
  {
    id: 6,
    name: "perejil",
    germinationRate: 70,
    cycle: 5,
    rotation: "plantar después de cultivos de bulbos como cebollas.",
    compatibility: "asociar con tomates y maíz."
  },
  {
    id: 7,
    name: "acelga",
    germinationRate: 80,
    cycle: 5,
    rotation: "plantar después de hortalizas de fruto como pepinos o calabacines.",
    compatibility: "asociar con la mayoría de las hortalizas, evitando las papas."
  },
];


const dataConsumptions = [
  { id: 1, perweek: 1 },
  { id: 2, perweek: 2 },
  { id: 3, perweek: 3 },
  { id: 4, perweek: 4 },
  { id: 5, perweek: 5 },
  { id: 6, perweek: 6 },
];

const dataSeasons = [
  { id: 1, season: "primavera", adjustmentFactor: 1.0 },
  { id: 2, season: "verano", adjustmentFactor: 1.2 },
  { id: 3, season: "otoño", adjustmentFactor: 1.0 },
  { id: 4, season: "invierno", adjustmentFactor: 1.5 },
];

export { dataVegetables, dataConsumptions, dataSeasons };
