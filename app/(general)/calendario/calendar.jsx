"use client";
import { useState } from "react";
import activitiesCalendar from "../../../data/activitiesCalendar";
import {
  faLeaf,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calendar = () => {
  // Estado para manejar el mes actual. Inicialmente, es el mes actual.
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDayActivities, setSelectedDayActivities] = useState([]);

  const handleDayClick = (day) => {
    const activities = findActivitiesForDate(day);
    setSelectedDayActivities(activities);
  };

  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  // Generar los días del mes
  const days = [];
  for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // Funciones para navegar entre meses
  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Función para encontrar actividades por fecha
  const findActivitiesForDate = (date) => {
    const dateString = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    // Filtra las actividades que coincidan con esta fecha
    return activitiesCalendar.filter(
      (activity) => activity.date === dateString
    );
  };

  // Nombres de meses y días de la semana
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const weekDayNames = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  // Dentro de tu componente Calendar
  const monthName = monthNames[currentMonth.getMonth()];

  return (
    <div className="bg-white p-2">
      <div className="flex mb-4 items-center bg-gray-200 font-bold">
        <div className="w-1/3">
          <button className="w-full" onClick={goToPreviousMonth}>
            <FontAwesomeIcon icon={faArrowLeft} className="me-4" />
            Anterior
          </button>
        </div>
        <div className="w-1/3">
          <h2 className="text-xl text-center">{monthName}</h2>
        </div>
        <div className="w-1/3">
          <button className="w-full" onClick={goToNextMonth}>
            Siguiente
            <FontAwesomeIcon icon={faArrowRight} className="ms-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {weekDayNames.map((dayName, index) => (
          <div
            key={index}
            className="bg-gray-200 text-center border font-medium"
          >
            {dayName}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 border text-center ${
              new Date().toDateString() === day.toDateString()
                ? "bg-lime-200"
                : ""
            }`}
            onClick={() => handleDayClick(day)}
          >
            <div>
              {day.getDate()}{" "}
              {findActivitiesForDate(day).length > 0 && (
                <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {selectedDayActivities.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold">
              Actividades para el día seleccionado:
            </h3>
            <ul>
              {selectedDayActivities.map((activity, index) => (
                <li key={index}>
                  {activity.activity}: {activity.note}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No hay actividades en el día seleccionado.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
