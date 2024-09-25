"use client";

import React from "react";
import { Flight } from '../../models/Flight';

const Flights: React.FC<{ filteredFlights: Flight[] }> = ({
  filteredFlights = [],
}) => {
  if (!filteredFlights || filteredFlights.length === 0) {
    return (
      <div className="flex items-center justify-start bg-white p-6 rounded-lg mt-8 shadow-md w-full">
        Uygun uçuş bulunamadı.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-8">
      {filteredFlights.map((flight) => (
        <div key={flight.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{flight.flightNumber}</h3>
            <p className="text-lg font-semibold">{flight.airline}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-bold">{flight.departureAirport.code}</p>
              <p className="text-sm">{flight.departureAirport.name}</p>
              <p className="text-lg">{flight.scheduleTime}</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{flight.estimatedDuration}</p>
              <div className="w-32 h-0.5 bg-gray-300 my-2"></div>
              <p>{flight.isConnecting ? 'Aktarmalı' : 'Direkt'}</p>
            </div>
            <div>
              <p className="font-bold">{flight.arrivalAirport.code}</p>
              <p className="text-sm">{flight.arrivalAirport.name}</p>
              <p className="text-lg">{flight.estimatedArrivalTime}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>Tarih: {flight.scheduleDate}</p>
              <p>{flight.flightDirection === 'A' ? 'Varış' : 'Kalkış'}</p>
            </div>
            <div>
              <p className="font-semibold">Ekonomi: ${flight.price.economy}</p>
              <p className="font-semibold">Business: ${flight.price.business}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flights;
