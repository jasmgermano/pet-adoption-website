"use client";

import { Container } from "./Container";
import Image from "next/image";

import { useEffect, useState } from "react";

type Pet = {
  id: string;
  name: string;
  age: number;
  description: string;
  breed: string;
  type: string;
  weight: string;
  image: string;
};

export default function AdmList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petsFiltered, setPetsFiltered] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    limit: 5, // Limite de itens por página
  });

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch("/api/pet");
        const data = await response.json();

        // Atualiza a paginação
        setPagination((prev) => ({
          ...prev,
          total: data.body.length,
        }));

        setPets(data.body);
        setPetsFiltered(data.body.slice(0, pagination.limit));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchPets();
  }, [pagination.limit]);

  useEffect(() => {
    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;
    setPetsFiltered(pets.slice(start, end));
  }, [pagination.page, pets]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!value) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      setPetsFiltered(pets.slice(start, end));
      return;
    }

    const filtered = pets.filter((pet) => {
      return pet.name.toLowerCase().includes(value.toLowerCase());
    });

    setPetsFiltered(filtered.slice(0, pagination.limit));
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/pet/${id}`, {
        method: "DELETE",
      });

      const newPets = pets.filter((pet) => pet.id !== id);
      setPets(newPets);

      // Atualiza a paginação e o filtro
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      setPetsFiltered(newPets.slice(start, end));
      setPagination((prev) => ({
        ...prev,
        total: newPets.length,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <div>
      <Container>
        <div className="bg-white p-8 rounded-md w-full">
          <div className="flex items-center justify-between pb-6">
            <div>
              <button className="text-sm text-white transition duration-150 hover:bg-red-300 bg-custom-red font-semibold py-2 px-4 rounded">
                <a href="/admin/cadastrar">Cadastrar</a>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="buscar..."
                  onChange={handleFilter}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Nome
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Idade
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Sexo
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Porte
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Raça
                      </th>

                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Deletar
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Editar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {petsFiltered?.map((pet) => (
                      <tr key={pet.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <Image
                                src={pet.image}
                                alt="dog"
                                className="w-full h-full rounded-full"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {pet.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {pet.age} anos
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {pet.type}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {pet.weight}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {pet.breed}
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            onClick={() => handleDelete(pet.id)}
                            className="cursor-pointer fill-red-600"
                          >
                            <path d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
                          </svg>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#787878"
                              d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                            />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Mostrando {pagination.page} de {totalPages} páginas
                  </span>
                  <div className="flex gap-3 mt-2 xs:mt-0">
                    <button
                      onClick={() =>
                        handlePageChange(Math.max(1, pagination.page - 1))
                      }
                      className="text-sm text-white transition duration-150 hover:bg-custom-light-cyan bg-custom-cyan font-semibold py-2 px-4 rounded-l"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() =>
                        handlePageChange(
                          Math.min(totalPages, pagination.page + 1)
                        )
                      }
                      className="text-sm text-indigo-50 transition duration-150 hover:bg-custom-light-cyan bg-custom-cyan font-semibold py-2 px-4 rounded-r"
                    >
                      Próximo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
