"use client";

import React, { useState, useEffect } from "react";
import { getCars } from "@/app/actions/carActions";
import { Car } from "@prisma/client";
import Image from "next/image";

export default function CarHirePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      setIsLoading(true);
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen pt-[72px]">
      <div className="bg-noise opacity-5 absolute inset-0 pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-10">
        {/* Hero Section */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJCUDllXamFeGSw3rHiME_74UUPsSHsrXgg1ptNXk0cFGU8mOgSOun9eBJvG_lX3jFJ60wWIRYHfNB0pCFT-BB8M12HQZS70b4q0rj7DbjgD1ftUSCtj9I7LgAzGlBB0mrs2Cg3atwPUWDK1WteTz1gl4pN755JR4tWMMC0tauKZ2AjwUbE6G3nOom79BBR091JT8sScAi7FwBSsMDWj6dDWT1U3c7VHz5INU_ga4Cq98659pfw79Sni9kydDL5G6byagSxxCjDg")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
          <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center gap-6 mt-20">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
              Premium Fleet Available
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Drive in Style, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Anywhere.
              </span>
            </h1>
            <p className="text-lg text-slate-200 max-w-xl font-light leading-relaxed">
              Experience the ultimate freedom of the road with our curated
              collection of high-performance and luxury vehicles.
            </p>
            <button className="mt-4 flex items-center gap-2 rounded-full bg-white text-background-dark px-8 py-4 text-base font-bold hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              View All Vehicles
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="relative z-20 -mt-24 mx-4 md:mx-10 bg-surface-dark border border-border-dark p-6 rounded-xl shadow-2xl backdrop-blur-md">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              search
            </span>
            Find Your Perfect Ride
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Pickup Location
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  location_on
                </span>
                <input
                  className="w-full bg-background-dark border border-border-dark rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none"
                  placeholder="City, Airport, or Address"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Drop-off Location
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  flag
                </span>
                <input
                  className="w-full bg-background-dark border border-border-dark rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none"
                  placeholder="Return to same location"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Pickup Date
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  calendar_today
                </span>
                <input
                  className="w-full bg-background-dark border border-border-dark rounded-lg py-3 pl-10 pr-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-colors outline-none [color-scheme:dark]"
                  type="date"
                />
              </div>
            </div>
            <div className="space-y-2 flex items-end">
              <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                Search Fleet
              </button>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-border-dark/50">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-border-dark/50">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <h3 className="font-bold text-white">Full Insurance</h3>
              <p className="text-sm text-text-muted">
                Comprehensive coverage included
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-border-dark/50">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <div>
              <h3 className="font-bold text-white">GPS Navigation</h3>
              <p className="text-sm text-text-muted">
                Never get lost on your journey
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-border-dark/50">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <h3 className="font-bold text-white">24/7 Support</h3>
              <p className="text-sm text-text-muted">
                Concierge assistance anytime
              </p>
            </div>
          </div>
        </div>

        {/* Fleet Grid */}
        <section className="py-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Exclusive Selection
              </h2>
              <p className="text-text-muted">
                Choose from our top-tier luxury vehicles.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              {["ECONOMY", "COMPACT", "SUV", "LUXURY", "VAN", "BUS"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg bg-surface-dark border border-border-dark text-slate-300 hover:text-white hover:border-primary transition-all text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
          ) : cars.length === 0 ? (
            <div className="bg-surface-dark border border-border-dark rounded-xl p-10 text-center">
              <span className="material-symbols-outlined text-4xl text-text-muted mb-3">
                directions_car
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                No vehicles found
              </h4>
              <p className="text-text-muted">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={
                        car.images?.[0] ||
                        "https://via.placeholder.com/400x300?text=No+Image"
                      }
                      alt={`${car.make} ${car.model}`}
                      fill
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                      {car.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-1 flex-col">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{`${car.make} ${car.model} ${car.year}`}</h3>
                    <p className="text-text-muted text-sm mb-4">
                      {car.features?.slice(0, 3).join(" • ") ||
                        "Premium vehicle"}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          airline_seat_recline_extra
                        </span>
                        {car.capacity} Seats
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          settings
                        </span>
                        {car.transmission}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          speed
                        </span>
                        {car.mileage ? `${car.mileage}mi` : "Unlimited"}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          local_gas_station
                        </span>
                        {car.fuelType}
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border-dark/50 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">
                          ${Number(car.dailyRate).toFixed(0)}
                        </span>
                        <span className="text-text-muted text-sm ml-1">
                          / day
                        </span>
                      </div>
                      <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all text-sm transform active:scale-95 shadow-lg shadow-primary/20">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <button className="text-slate-300 hover:text-primary font-medium text-sm flex items-center gap-2 border-b border-transparent hover:border-primary pb-1 transition-all group">
              Show more vehicles
              <span className="material-symbols-outlined text-base group-hover:translate-y-1 transition-transform">
                expand_more
              </span>
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 border-t border-border-dark/50">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            {[
              {
                step: "1",
                title: "Choose Your Dates",
                desc: "Select your pickup and return dates. We offer flexible booking options.",
                icon: "calendar_month",
              },
              {
                step: "2",
                title: "Select Your Vehicle",
                desc: "Browse our premium fleet and choose the car that matches your style.",
                icon: "directions_car",
              },
              {
                step: "3",
                title: "Enjoy the Ride",
                desc: "Pick up your keys or get it delivered. The road is yours to conquer.",
                icon: "key",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center z-10 group"
              >
                <div className="size-16 rounded-2xl bg-surface-dark border border-border-dark text-primary flex items-center justify-center mb-6 shadow-2xl transition-all group-hover:border-primary/50 group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.step}. {item.title}
                </h3>
                <p className="text-text-muted text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
