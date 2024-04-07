"use client";
import { useState } from "react";
import {
  faLeaf,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calendar = ({activities}) => {
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
      date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      
    // Filtra las actividades que coincidan con esta fecha
    return activities.filter(
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
  const weekDayNames = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

  // Dentro de tu componente Calendar
  const monthName = monthNames[currentMonth.getMonth()];

  return (
    <div className="bg-warmGray-200 box__shadow-lg rounded-2xl p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="ms-6 uppercase">
          <h2 className="text-2xl">{monthName}</h2>
        </div>
        <div className="flex gap-4">
          <button className="w-8" onClick={goToPreviousMonth}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="w-8" onClick={goToNextMonth}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 bg-gray-100 text-center rounded-2xl">
        {weekDayNames.map((dayName, index) => (
          <div key={index} className=" border font-bold p-2">
            {dayName}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 border cursor-pointer ${
              new Date().toDateString() === day.toDateString()
                ? "bg-lime-200"
                : ""
            }`}
            onClick={() => handleDayClick(day)}
          >
            <div>
              {day.getDate()}{" "}
              {findActivitiesForDate(day).length > 0 && (
                <FontAwesomeIcon icon={faLeaf} className="text-lime-500" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="m-4">
        {selectedDayActivities.length > 0 ? (
          <ul>
            {selectedDayActivities.map((activity, index) => (
              <li key={index}>
                <b>{activity.activity}:</b> {activity.note}
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Los días con{" "}
            <FontAwesomeIcon icon={faLeaf} className="text-lime-500 me-2" />
            tienen actividades.
          </p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
