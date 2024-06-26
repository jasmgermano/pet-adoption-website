"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./Container";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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

type PetData = {
  name: string;
  age: number;
  description: string;
  breed: string;
  type: string;
  weight: number;
  image: File;
};

export default function AdmForm() {
  const router = useRouter();

  const [breeds, setBreeds] = useState<BreedOption[]>([]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PetData>();

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get<BreedsAPIResponse>(
          "https://dog.ceo/api/breeds/list/all"
        );
        const breedList = parseBreeds(response.data);
        setBreeds(breedList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreeds();
  }, []);

  async function onSubmit(data: PetData) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age.toString());
    formData.append("description", data.description);
    formData.append("breed", data.breed);
    formData.append("type", data.type);
    formData.append("weight", data.weight.toString());

    if (data.image instanceof FileList && data.image.length > 0) {
      formData.append("image", data.image[0]);
    } else if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    try {
      const response = await axios.post("/api/pet", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        router.push("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function parseBreeds(data: BreedsAPIResponse): BreedOption[] {
    let breedList: BreedOption[] = [];
    for (const breed in data.message) {
      if (data.message[breed].length === 0) {
        breedList.push({ id: breed, name: breed });
      } else {
        data.message[breed].forEach((subBreed) => {
          breedList.push({
            id: `${breed}/${subBreed}`,
            name: `${subBreed} ${breed}`,
          });
        });
      }
    }
    return breedList;
  }

  return (
    <div className="pt-24 mb-24">
      <Container>
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center">
            Cadastro de Animais
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-4"
          >
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="h-12 w-2/3 border-2 border-gray-300 rounded-md p-2"
                {...register("name", { required: true })}
              />
              <input
                type="number"
                placeholder="Idade"
                className="h-12 w-1/3 border-2 border-gray-300 rounded-md p-2"
                {...register("age", { required: true })}
              />
            </div>
            <input
              type="text"
              placeholder="Descrição"
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
              {...register("description", { required: true })}
            />
            <select
              {...register("breed", { required: true })}
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
            >
              <option value="">Selecione uma raça</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
            <input
              {...register("image", { required: true })}
              type="file"
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
            />
            <select
              {...register("type", { required: true })}
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
            >
              <option value="">Selecione o sexo</option>
              <option value="Fêmea">Fêmea</option>
              <option value="Macho">Macho</option>
            </select>
            <select
              {...register("weight", { required: true })}
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
            >
              <option value="">Selecione o porte</option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
            <button
              type="submit"
              className="h-12 bg-custom-red text-white rounded-md mt-4 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="0.75s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
              )}
              Cadastrar
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
