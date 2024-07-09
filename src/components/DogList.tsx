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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<PetData | null>(null);

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
            className={`flex flex-col justify-center ${isOpen ? "block" : "hidden"
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
                onClick={() => {
                  setSelectedPet(pet);
                  setModalIsOpen(true);
                }}
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

      {modalIsOpen && selectedPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="w-3/4 bg-white rounded-3xl p-3 lg:w-3/5">
            <div className="flex justify-end p-2">
              <button onClick={() => setModalIsOpen(false)} className="text-white bg-[#F8D432] p-2 rounded-full w-7 h-7 flex items-center justify-center">
                <p>X</p>
              </button>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-5">
              <div className="w-[200px] h-[200px] relative lg:w-[500px] lg:h-[500px]">
                <Image
                  src={selectedPet?.image}
                  alt="Dog 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full lg:rounded-3xl lg:-mt-6"
                />
              </div>
              <div className="flex-1 flex-col p-3 text-center lg:text-left">
                <h2 className="text-2xl font-semibold mt-3 lg:text-4xl">
                  Olá, eu sou {selectedPet?.name}!
                </h2>
                <div className="flex justify-center gap-2 mt-3 lg:justify-start">
                  <div className="bg-custom-cyan w-auto h-7 rounded-lg text-white flex items-center justify-center px-3">
                    <p>{selectedPet?.age} anos</p>
                  </div>
                  <div className="bg-custom-cyan w-auto h-7 rounded-lg text-white flex items-center justify-center px-3">
                    <p>{selectedPet?.weight}</p>
                  </div>
                  <div className="hidden bg-custom-cyan w-auto h-7 rounded-lg text-white items-center justify-center px-3 lg:flex">
                    <p>{selectedPet?.breed}</p>
                  </div>
                  <div className="hidden bg-custom-cyan w-auto h-7 rounded-lg text-white items-center justify-center px-3 lg:flex">
                    <p>{selectedPet?.type}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-3 lg:hidden">
                  <div className="bg-custom-cyan w-auto h-7 rounded-lg text-white flex items-center justify-center px-3">
                    <p>{selectedPet?.breed}</p>
                  </div>
                  <div className="bg-custom-cyan w-auto h-7 rounded-lg text-white flex items-center justify-center px-3">
                    <p>{selectedPet?.type}</p>
                  </div>
                </div>
                <p className="mt-3">{selectedPet?.description}</p>
                <a
                  href={`https://wa.me/553584137314?text=Tenho%20interesse%20em%20adotar%20a(o)%20${selectedPet?.name}`.replace(
                    " ",
                    "%20"
                  )}
                  className="flex gap-2 items-center bg-custom-light-cyan text-custom-blue p-3 rounded-full mt-3 font-semibold justify-center lg:w-60"
                >
                  <svg
                    fill="#0A63B6"
                    height="16px"
                    width="16px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 308 308"
                  >
                    <g id="XMLID_468_">
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                      />
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                      />
                    </g>
                  </svg>
                  Quero adotar {selectedPet?.name}!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
