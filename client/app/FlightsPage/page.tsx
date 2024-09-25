"use client";

import React from "react"; // Add this import
import BookYourFlight from "@/components/BookYourFlight";
import FlightsList from "@/components/FlightList";
import Image from "next/image";
import Filter from "@/components/Filter";

export default function FlightsPage() {
  const [filteredFlights, setFilteredFlights] = React.useState<any[]>([]);

  return (
    <div className="flex items-start justify-center w-full px-12 gap-6">
      <div className="flex flex-col w-4/5">
        <BookYourFlight setFilteredFlights={setFilteredFlights} /> {/* setFilteredFlights prop'u eklendi */}
        <div className="flex w-full">
          <div className="w-3/4">
            <FlightsList filteredFlights={filteredFlights} />
          </div>
          <div className="w-1/4">
            <Filter />
          </div>
        </div>
      </div>
      <div className="w-1/5">
        <div className="gap-4 rounded-2xl w-full">
          <div className="flex flex-col gap-8">
            <div className="h-[250px] relative">
              <Image
                src="/images/hotels.png"
                alt="Oteller"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="h-[250px] relative">
              <Image
                src="/images/car.png"
                alt="Araba Kiralama"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="h-[250px] relative">
              <Image
                src="/images/travel.png"
                alt="Seyahat"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
