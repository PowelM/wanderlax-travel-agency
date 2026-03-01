"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { getCars } from "@/app/actions/carActions";
import { Car } from "@prisma/client";

export default function CarHirePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-dark pt-[72px]">
        <div className="animate-spin size-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px] bg-background-dark">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <main className="flex-1 px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2">Premium Travel</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Elite Fleet</h1>
            </div>
            <p className="text-slate-400 max-w-md text-sm md:text-base">
              Experience the pinnacle of luxury transportation with our curated selection of high-performance vehicles and chauffeur services.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div
                key={car.id}
                className="group relative bg-surface-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={
                      car.images?.[0] ||
                      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={car.make + " " + car.model}
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background-dark/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary border border-primary/20 uppercase tracking-widest">
                      {car.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {car.make} {car.model}
                      </h3>
                      <p className="text-slate-500 text-sm">{car.year} • {car.transmission}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-white">${car.pricePerDay}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">per day</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm line-clamp-2 mb-6 min-h-[40px]">
                    {car.description || "Experience uncompromising luxury and power with this exceptional vehicle from our elite collection."}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border-dark">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="material-symbols-outlined text-sm">local_gas_station</span>
                        <span className="text-[11px] font-medium uppercase">{car.fuel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="material-symbols-outlined text-sm">speed</span>
                        <span className="text-[11px] font-medium uppercase">{Math.floor(Math.random() * 20000 + 5000).toLocaleString()} mi</span>
                      </div>
                    </div>
                    <Link
                      href={`/app/car-hire/book?carId=${car.id}`}
                      className="inline-flex h-10 px-6 items-center justify-center rounded-full bg-primary hover:bg-red-700 text-white text-xs font-bold transition-all shadow-lg shadow-primary/20"
                    >
                      Reserve Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cars.length === 0 && (
            <div className="py-32 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-700 mb-6">directions_car_grayscale</span>
              <h2 className="text-2xl font-bold text-white mb-2">No Vehicles Available</h2>
              <p className="text-slate-500">Our fleet is currently reaching new destinations. Please check back soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
