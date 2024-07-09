"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Filter from "@/assets/filter.svg";
import { Container } from "./Container";

type PetData = {
  id: string;
  name: string;
  age: number;
  description: string;
  breed: string;
  type: string;
  weight: number;
  image: string;
};

export function DogList() {
  const [isOpen, setIsOpen] = useState(false);
  const [pets, setPets] = useState<PetData[]>([]);

  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchPets() {
      try {
        let gen = "";
        let size = "";

        if (type.length > 0) {
          gen = type === "F" ? "Fêmea" : "Macho";
        }

        if (weight.length > 0) {
          size =
            weight === "P" ? "Pequeno" : weight === "M" ? "Médio" : "Grande";
        }

        const response = await fetch(
          `/api/pet?type=${gen}&age=${age}&weight=${size}`
        );
        const data = await response.json();

        setPets(data.body);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPets();
  }, [type, age, weight]);

  return (
    <div className="relative h-auto bg-custom-blue py-[200px]">
      <div className="absolute top-0 left-0 w-full z-20 lg:hidden">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="hidden absolute top-0 left-0 w-full z-20 lg:block">
        <svg viewBox="0 0 1440 160">
          <path
            fill="#ffffff"
            d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20 lg:hidden">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="hidden absolute bottom-0 left-0 w-full z-20 lg:block">
        <svg viewBox="0 0 1440 160">
          <path
            fill="#ffffff"
            d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container>
        <div className="flex flex-col justify-center w-full">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg mb-3 lg:hidden"
          >
            <Image src={Filter} alt="Filtro" width={20} height={20} />
            <span>Filtros</span>
          </button>
          <div
            className={`flex flex-col justify-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="dog" className="text-white">
                  Gênero
                </label>
                <select
                  name="dog"
                  id="dog"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="F">Fêmea</option>
                  <option value="M">Macho</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="dog" className="text-white">
                  Idade
                </label>
                <input
                  type="number"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  placeholder="idade"
                  min={1}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="dog" className="text-white">
                  Tamanho
                </label>
                <select
                  name="dog"
                  id="dog"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  onChange={(e) => setWeight(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="P">Pequeno</option>
                  <option value="M">Médio</option>
                  <option value="G">Grande</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center mb-5">
            <div className="flex items-end gap-2">
              <div className="flex flex-col w-56">
                <label htmlFor="dog" className="text-white">
                  Gênero
                </label>
                <select
                  name="dog"
                  id="dog"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="F">Fêmea</option>
                  <option value="M">Macho</option>
                </select>
              </div>
              <div className="flex flex-col w-56">
                <label htmlFor="dog" className="text-white">
                  Idade
                </label>
                <input
                  type="number"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  placeholder="idade"
                  min={1}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-56">
                <label htmlFor="dog" className="text-white">
                  Tamanho
                </label>
                <select
                  name="dog"
                  id="dog"
                  className="bg-gray-200 rounded-full h-10 mt-2 pl-2"
                  onChange={(e) => setWeight(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="P">Pequeno</option>
                  <option value="M">Médio</option>
                  <option value="G">Grande</option>
                </select>
              </div>
            </div>
          </div>
          {/* grid com os cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {pets.map((pet) => (
              <div
                className="bg-white rounded-3xl overflow-hidden pb-5"
                key={pet.id}
              >
                <div className="w-full h-60 relative">
                  <Image
                    src={pet.image}
                    alt="Dog 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center mt-3">
                  {pet.name}
                </h2>
                <p className="text-center">
                  {pet.breed}, {pet.type}
                </p>
                <p className="text-center">
                  {pet.age} anos, {pet.weight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
