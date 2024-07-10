"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./Container";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type PetData = {
  name: string;
  age: string;
  description: string;
  breed: string;
  type: string;
  weight: number;
  image: File;
  unit: string;
};

export default function AdmForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PetData>();

  async function onSubmit(data: PetData) {
    const ageWithUnit = `${data.age} ${data.unit}`;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", ageWithUnit);
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
                className="h-12 w-1/2 border-2 border-gray-300 rounded-md p-2"
                {...register("age", { required: true })}
              />
              <select
                {...register("unit", { required: true })}
                className="h-12 w-1/2 border-2 border-gray-300 rounded-md p-2"
              >
                <option value="ano(s)">ano(s)</option>
                <option value="mes(es)">mes(es)</option>
              </select>
            </div>
            <textarea
              rows={4}
              placeholder="Descrição"
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
              {...register("description", { required: true, maxLength: 255 })}
            />
            <select
              {...register("breed", { required: true })}
              className="h-12 border-2 border-gray-300 rounded-md p-2 mt-4"
            >
              <option value="">Selecione uma raça</option>
              <option value="S/ raça definida">Sem raça definida</option>
              <option value="Labrador">Labrador Retriever</option>
              <option value="Pastor Alemão">Pastor Alemão</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Beagle">Beagle</option>
              <option value="Poodle">Poodle</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Yorkshire">Yorkshire Terrier</option>
              <option value="Boxer">Boxer</option>
              <option value="Dachshund">Dachshund</option>
              <option value="ShihTzu">Shih Tzu</option>
              <option value="Doberman">Doberman</option>
              <option value="Dogue Alemão">Dogue Alemão</option>
              <option value="Husky Siberiano">Husky Siberiano</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Pug">Pug</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Akita">Akita</option>
              <option value="Maltes">Maltês</option>
              <option value="BassetHound">Basset Hound</option>
              <option value="Outra">Outra</option>
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
