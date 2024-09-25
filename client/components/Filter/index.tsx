"use client";
import { useState } from 'react';

const FilterMenu = () => {
  // States to handle selected filters
  const [sort, setSort] = useState('Lowest Price');
  const [arrivalTime, setArrivalTime] = useState('');
  const [stops, setStops] = useState('');
  const [airlines, setAirlines] = useState<string[]>([]);

  const toggleAirline = (airline: string) => {
    if (airlines.includes(airline)) {
      setAirlines(airlines.filter(a => a !== airline));
    } else {
      setAirlines([...airlines, airline]);
    }
  };

  return (
    <div className="p-6 mt-6  w-full max-w-xs  h-[600px] overflow-y-scroll">
      {/* Sort by section */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Sort by:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Earliest Arrival</option>
          <option>Latest Arrival</option>
        </select>
      </div>

      {/* Arrival Time Section */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Arrival Time</p>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="5:00 AM - 11:59 AM"
              checked={arrivalTime === '5:00 AM - 11:59 AM'}
              onChange={() => setArrivalTime('5:00 AM - 11:59 AM')}
              className="mr-2"
            />
            5:00 AM - 11:59 AM
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="12:00 PM - 5:59 PM"
              checked={arrivalTime === '12:00 PM - 5:59 PM'}
              onChange={() => setArrivalTime('12:00 PM - 5:59 PM')}
              className="mr-2"
            />
            12:00 PM - 5:59 PM
          </label>
        </div>
      </div>

      {/* Stops Section */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Stops</p>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Nonstop"
              checked={stops === 'Nonstop'}
              onChange={() => setStops('Nonstop')}
              className="mr-2"
            />
            Nonstop
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="1 Stop"
              checked={stops === '1 Stop'}
              onChange={() => setStops('1 Stop')}
              className="mr-2"
            />
            1 Stop
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="2+ Stops"
              checked={stops === '2+ Stops'}
              onChange={() => setStops('2+ Stops')}
              className="mr-2"
            />
            2+ Stops
          </label>
        </div>
      </div>

      {/* Airlines Included Section */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Airlines Included</p>
        <div>
          {['Alitalia', 'Lufthansa', 'Air France', 'Brussels Airlines', 'Air Italy', 'Siberia'].map(airline => (
            <label key={airline} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={airline}
                checked={airlines.includes(airline)}
                onChange={() => toggleAirline(airline)}
                className="mr-2"
              />
              {airline}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
