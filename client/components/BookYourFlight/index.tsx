"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";
import axios from 'axios';
import { Flight } from '@/models/Flight';

interface BookYourFlightProps {
  setFilteredFlights: (flights: Flight[]) => void;
}

// Flight tipini burada tekrar tanımlamaya gerek yok, import edilen tipi kullanacağız.

const BookYourFlight = ({ setFilteredFlights }: BookYourFlightProps) => {
  const [selectedTrip, setSelectedTrip] = useState("roundTrip");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [airports, setAirports] = useState<string[]>([]);
  const [selectedDeparture, setSelectedDeparture] = useState<string>("");
  const [selectedArrival, setSelectedArrival] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [isArrival, setIsArrival] = useState<boolean>(false);

  // Refs for date inputs
  const departureDateRef = useRef<HTMLInputElement>(null);
  const returnDateRef = useRef<HTMLInputElement>(null);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:3001/flights');
      const { flights, airports } = response.data;
      console.log("Fetched Flights:", flights.length);
      console.log(flights);
      
      setFlights(flights);
      setAirports(airports);
    } catch (error) {
      console.error('Uçuş verileri alınamadı:', error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeparture(e.target.value);
    setSelectedArrival('Schiphol Airport');
  };

  const handleArrivalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArrival(e.target.value);
    setSelectedDeparture('Schiphol Airport');
  };

  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };

  const filterFlights = () => {
    return flights.filter((flight: Flight) => {
      const flightDate = new Date(flight.scheduleDate).toISOString().split('T')[0];

      if (isArrival) {
        // Arrival seçiliyse
        return (
          flight.flightDirection === 'A' &&
          flight.departureAirport.code === selectedArrival &&
          flightDate === departureDate
        );
      } else {
        // Departure seçiliyse
        return (
          flight.flightDirection === 'D' &&
          flight.arrivalAirport.code === selectedDeparture &&
          flightDate === departureDate
        );
      }
    });
  };

  const handleShowFlights = () => {
    const filtered = filterFlights();
    console.log("Filtered Flights:", filtered);
    setFilteredFlights(filtered);
  };

  return (
    <div className="flight-search bg-white p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-black opacity-80 text-lg font-black mb-4">
          BOOK YOUR FLIGHT
        </h2>
        <div className="flex mb-4 text-sm font-bold">
          <button
            className={`px-4 py-2 rounded-l-full ${isArrival === false ? "bg-purple-800 text-white" : "bg-gray-200 text-purple-800"}`}
            onClick={() => {
              setIsArrival(false);
              setSelectedDeparture("");
              setSelectedArrival("Schiphol Airport");
            }}
          >
            Departure
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${isArrival === true ? "bg-purple-800 text-white" : "bg-gray-200 text-purple-800"}`}
            onClick={() => {
              setIsArrival(true);
              setSelectedDeparture("Schiphol Airport");
              setSelectedArrival("");
            }}
          >
            Arrival
          </button>
        </div>
        <div className="flex mb-4 text-sm font-bold">
          <button
            className={`px-4 py-2 rounded-l-full ${selectedTrip === "roundTrip" ? "bg-purple-800 text-white" : "bg-gray-200 text-purple-800"}`}
            onClick={() => setSelectedTrip("roundTrip")}
          >
            Round Trip
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${selectedTrip === "oneWay" ? "bg-purple-800 text-white" : "bg-gray-200 text-purple-800"}`}
            onClick={() => setSelectedTrip("oneWay")}
          >
            One Way
          </button>
        </div>
      </div>
      <div className="flex mb-4 gap-4 justify-between">
        <div className="flex flex-row gap-1">
          <div className="relative">
            <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-800" />
            <select 
              className="w-64 p-2 pl-8 border border-gray-300 rounded-l-full text-sm h-10"
              onChange={handleDepartureChange}
              value={selectedDeparture}
              disabled={isArrival}
            >
              <option value="" className="opacity-50">Departure</option>
              {!isArrival && airports.map((airport, index) => (
                <option key={index} value={airport}>{airport}</option>
              ))}
              {isArrival && <option value="Schiphol Airport">Schiphol Airport</option>}
            </select>
          </div>
          <div className="relative">
            <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-800" />
            <select 
              className="w-64 p-2 pl-8 border border-gray-300 rounded-r-full text-sm h-10"
              onChange={handleArrivalChange}
              value={selectedArrival}
              disabled={!isArrival}
            >
              <option value="" className="opacity-50">Arrival</option>
              {isArrival && airports.map((airport, index) => (
                <option key={index} value={airport}>{airport}</option>
              ))}
              {!isArrival && <option value="Schiphol Airport">Schiphol Airport</option>}
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <FaCalendarAlt 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-800 cursor-pointer"
              onClick={() => {
                if (departureDateRef.current) {
                  departureDateRef.current.showPicker();
                }
              }}
            />
            <input
              type="date"
              ref={departureDateRef}
              className="w-64 p-2 pl-8 border border-gray-300 rounded-l-full text-sm h-10"
              placeholder="Departure Date"
              value={departureDate}
              onChange={handleDepartureDateChange}
              onClick={() => {
                if (departureDateRef.current) {
                  departureDateRef.current.showPicker();
                }
              }}
            />
          </div>
          <div className="relative">
            <FaCalendarAlt 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-800 cursor-pointer"
              onClick={() => {
                if (returnDateRef.current) {
                  returnDateRef.current.showPicker();
                }
              }}
            />
            <input
              type="date"
              ref={returnDateRef}
              className={`w-64 p-2 pl-8 border border-gray-300 rounded-r-full text-sm h-10 ${selectedTrip === "oneWay" ? "opacity-50 cursor-not-allowed" : ""}`}
              placeholder="Return Date"
              value={returnDate}
              onChange={handleReturnDateChange}
              disabled={selectedTrip === "oneWay"}
              onClick={() => {
                if (returnDateRef.current) {
                  returnDateRef.current.showPicker();
                }
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="bg-purple-800 text-white py-2 px-4 rounded-lg text-sm font-bold"
        onClick={handleShowFlights}
      >
        Show Flights
      </button>
    </div>
  );
};

export default BookYourFlight;
