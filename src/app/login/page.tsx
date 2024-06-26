"use client";

import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.log("result.error", result.error);
      setError("email", {
        type: "manual",
        message: "E-mail ou senha incorretos",
      });
    } else if (result?.ok) {
      router.push("/admin");
    } else {
      setError("email", {
        type: "manual",
        message: "Erro desconhecido. Tente novamente.",
      });
    }
  };

  return (
    <div className="flex flex-col w-screen h-auto bg-gradient-to-br from-custom-cyan to-custom-light-cyan md:flex-row md:h-screen">
      <div className="relative w-screen h-1/3 md:h-screen md:w-1/2">
        <div className="flex flex-col justify-center items-center h-full overflow-hidden w-full py-10">
          <div className="hidden md:block absolute w-0 h-0 border-l-[100px] border-l-transparent border-b-[125px] border-b-white border-r-[100px] border-r-transparent top-10 left-10 opacity-38 mix-blend-soft-light z-0 rotate-12"></div>
          <div className="hidden md:block absolute w-0 h-0 border-l-[200px] border-l-transparent border-t-[225px] border-t-white border-r-[100px] border-r-transparent bottom-10 -right-20 opacity-38 mix-blend-soft-light z-0 rotate-90"></div>
          <div className="hidden md:block absolute w-0 h-0 border-l-[70px] border-l-transparent border-t-[95px] border-t-white border-r-[100px] border-r-transparent top-20 right-20 opacity-38 mix-blend-soft-light z-0"></div>
          <div className="hidden md:block absolute w-0 h-0 border-l-[150px] border-l-transparent border-b-[125px] border-b-white border-r-[170px] border-r-transparent bottom-24 left-20 opacity-38 mix-blend-soft-light z-0 rotate-6"></div>
          <div className="hidden md:block absolute w-0 h-0 border-l-[130px] border-l-transparent border-t-[150px] border-t-white border-r-[130px] border-r-transparent top-1/3 left-1/4 opacity-30 mix-blend-soft-light z-0 rotate-45"></div>
          <div className="hidden md:block absolute w-0 h-0 border-l-[80px] border-l-transparent border-b-[100px] border-b-white border-r-[80px] border-r-transparent bottom-1/4 right-1/4 opacity-30 mix-blend-soft-light z-0 rotate-[135deg]"></div>

          <div className="hidden md:block absolute top-5 left-5">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z"
                />
              </svg>
              <span className="text-xl text-white">Adotar é legAU</span>
            </div>
          </div>
          <div className="md:hidden -mt-5">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z"
                />
              </svg>
              <span className="text-xl text-white">Adotar é legAU</span>
            </div>
          </div>
          <h1 className="text-white text-4xl font-bold mb-10 mt-10 text-center">
            Seja bem-vindo(a)!
          </h1>
          <h2 className="text-white text-center px-3">
            Entre na sua conta para cadastrar{" "}
            <span className="block">
              ou editar pets disponíveis para adoção.
            </span>
          </h2>
          <button className="py-2 px-4 rounded-full mt-10 text-white font-semibold border-3 md:hover:bg-custom-light-cyan w-44">
            <a href="/">Visite o site</a>
          </button>
        </div>
      </div>
      <div className="h-2/3 w-full pb-10 bg-white rounded-t-[40px] md:rounded-tr-none md:rounded-l-[40px] flex flex-col justify-center md:h-screen md:w-1/2">
        <h1 className="text-4xl font-semibold text-center pt-10">Login</h1>
        <p className="text-center text-gray-500">Entre na sua conta</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center mt-10"
        >
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-3/4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-custom-cyan"
            placeholder="E-mail"
          />
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-3/4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-custom-cyan"
            placeholder="Senha"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-3">
              {errors.email.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-custom-cyan text-white w-3/4 py-2 mt-5 rounded-full"
          >
            Entrar
          </button>
          <a href="/" className="text-custom-cyan mt-5">
            Esqueceu sua senha?
          </a>
        </form>
      </div>
    </div>
  );
}
