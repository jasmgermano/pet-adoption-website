import Image from "next/image";
import { Container } from "./Container";
import DogHeader from "@/assets/registerPage-header.png";
import { auth } from "@/app/auth";

export async function AdmHeader() {
  const session = await auth();

  return (
    <div className="w-screen">
      <div
        id="home"
        className="px-10 flex flex-col h-auto items-center justify-center lg:flex-row"
      >
        <Image
          src={DogHeader}
          alt="foto de um cachorro com fundo amarelo"
          className="w-[700px] sm:w-[500px] lg:order-2 lg:w-[400px]"
        />
        <div className="mt-4 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold text-center">
            Olá {session?.user?.name}!
          </h1>
          <h2
            className={`text-xl text-custom-cyan text-center font-semibold uppercase mt-4`}
          >
            Projeto adotar é legal
          </h2>
        </div>
      </div>
    </div>
  );
}
