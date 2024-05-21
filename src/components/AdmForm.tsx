'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./Container"


type BreedsAPIResponse = {
    message: {
        [key: string]: string[];
    };
    status: string;
};

type BreedOption = {
    id: string;
    name: string;
};

export default function AdmForm() {
    const [breeds, setBreeds] = useState<BreedOption[]>([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    useEffect(() => {
        async function fetchBreeds() {
            try {
                const response = await axios.get<BreedsAPIResponse>("https://dog.ceo/api/breeds/list/all");
                const breedList = parseBreeds(response.data);
                setBreeds(breedList);
            } catch (error) {
                console.error(error);
            }
        }

        fetchBreeds();
    }, []);

    function parseBreeds(data: BreedsAPIResponse): BreedOption[] {
        let breedList: BreedOption[] = [];
        for (const breed in data.message) {
            if (data.message[breed].length === 0) {
                breedList.push({ id: breed, name: breed });
            } else {
                data.message[breed].forEach((subBreed) => {
                    breedList.push({ id: `${breed}/${subBreed}`, name: `${subBreed} ${breed}` });
                });
            }
        }
        return breedList;
    }

    return (
        <div className="pt-24 mb-24">
            <Container> 
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-center">Cadastro de Animais</h1>
                    <form className="flex flex-col mt-4">
                        <div className="flex gap-4">
                            <input type="text" placeholder="Nome" className="h-12 w-2/3 border-2 border-gray-300 rounded-md p-2" />
                            <input type="number" placeholder="Idade" className="h-12 w-1/3 border-2 border-gray-300 rounded-md p-2" />
                        </div>
                        <input type="text" placeholder="Descrição" className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4" />
                        <select
                            value={selectedBreed}
                            onChange={(e) => setSelectedBreed(e.target.value)}
                            className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
                        >
                            <option value="">Selecione uma raça</option>
                            {breeds.map(breed => (
                                <option key={breed.id} value={breed.id}>{breed.name}</option>
                            ))}
                        </select>
                        <input type="file" className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4" />
                        <select className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4">
                            <option value="">Selecione o sexo</option>
                            <option value="Fêmea">Fêmea</option>
                            <option value="Macho">Macho</option>
                        </select>
                        <select className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4">
                            <option value="">Selecione o porte</option>
                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                            <option value="Grande">Grande</option>
                        </select>
                        <button
                            type="submit"
                            className="h-12 bg-custom-red text-white rounded-md mt-4"
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
