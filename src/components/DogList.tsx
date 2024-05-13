'use client';
import { useState } from "react";
import Image from "next/image";

import Filter from "@/assets/filter.svg";
import dog1 from "@/assets/dog1.jpg";
import dog2 from "@/assets/dog2.png";
import dog3 from "@/assets/dog3.jpeg";

import { Container } from "./Container";

export function DogList() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative h-auto bg-custom-blue py-[200px]">
            <div className="absolute top-0 left-0 w-full z-20 lg:hidden">
                <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="hidden absolute top-0 left-0 w-full z-20 lg:block">
                <svg viewBox="0 0 1440 160"><path fill="#ffffff" d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 lg:hidden">
                <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="hidden absolute bottom-0 left-0 w-full z-20 lg:block">
                <svg viewBox="0 0 1440 160"><path fill="#ffffff" d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <Container>
                <div className="flex flex-col justify-center w-full">
                    <button onClick={toggleMenu} className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg mb-3 lg:hidden">
                        <Image src={Filter} alt="Filtro" width={20} height={20} />
                        <span>Filtros</span>
                    </button>
                    <div className={`flex flex-col justify-center ${isOpen ? "block" : "hidden"}`}>
                        <form action="" className="flex flex-col items-center gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="dog" className="text-white">Gênero</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value="">Selecione</option>
                                    <option value="F">Fêmea</option>
                                    <option value="M">Macho</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="dog" className="text-white">Idade</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value=" ">Selecione</option>
                                    <option value="1">1-3 anos</option>
                                    <option value="2">4-6 anos</option>
                                    <option value="3">7-10 anos</option>
                                    <option value="4">10+ anos</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="dog" className="text-white">Tamanho</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value="">Selecione</option>
                                    <option value="P">Pequeno</option>
                                    <option value="M">Médio</option>
                                    <option value="G">Grande</option>
                                </select>
                            </div>
                            <button className="bg-custom-red text-white rounded-full h-10 w-full mt-3 mb-7">Buscar</button>
                        </form>
                    </div>
                    <div className="hidden lg:flex flex-col items-center mb-5">
                        <form action="" className="flex items-end gap-2">
                            <div className="flex flex-col w-56">
                                <label htmlFor="dog" className="text-white">Gênero</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value="">Selecione</option>
                                    <option value="F">Fêmea</option>
                                    <option value="M">Macho</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-56">
                                <label htmlFor="dog" className="text-white">Idade</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value=" ">Selecione</option>
                                    <option value="1">1-3 anos</option>
                                    <option value="2">4-6 anos</option>
                                    <option value="3">7-10 anos</option>
                                    <option value="4">10+ anos</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-56">
                                <label htmlFor="dog" className="text-white">Tamanho</label>
                                <select name="dog" id="dog" className="bg-gray-200 rounded-full h-10 mt-2 pl-2">
                                    <option value="">Selecione</option>
                                    <option value="P">Pequeno</option>
                                    <option value="M">Médio</option>
                                    <option value="G">Grande</option>
                                </select>
                            </div>
                            <button className="bg-custom-red text-white rounded-full h-10 w-56">Buscar</button>
                        </form>
                    </div>
                    {/* grid com os cards */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog1} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog2} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog3} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog1} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog2} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog3} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog1} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog2} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog3} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog1} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog2} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden pb-5">
                            <div className="w-full h-60 relative">
                                <Image src={dog3} alt="Dog 1" layout="fill" objectFit="cover" className="rounded-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mt-3">Dog 1</h2>
                            <p className="text-center">Vira-lata, Macho</p>
                            <p className="text-center">2 anos, porte médio</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}