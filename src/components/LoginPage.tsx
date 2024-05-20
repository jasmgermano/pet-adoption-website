export default function Login() {
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-miterlimit="10" stroke-width="32" d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z" /></svg>
                            <span className="text-xl text-white">Adotar é legAU</span>
                        </div>
                    </div>
                    <div className="md:hidden -mt-5">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-miterlimit="10" stroke-width="32" d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z" /></svg>
                            <span className="text-xl text-white">Adotar é legAU</span>
                        </div>
                    </div>
                    <h1 className="text-white text-4xl font-bold mb-10 mt-10 text-center">Seja bem-vindo(a)!</h1>
                    <h2 className="text-white text-center px-3">Entre na sua conta para cadastrar <span className="block">ou editar pets disponíveis para adoção.</span></h2>
                    <button className="py-2 px-4 rounded-full mt-10 text-white font-semibold border-3 md:hover:bg-custom-light-cyan w-44"><a href="/">Visite o site</a></button>
                </div>
            </div>
            <div className="h-2/3 w-full pb-10 bg-white rounded-t-[40px] md:rounded-tr-none md:rounded-l-[40px] flex flex-col justify-center md:h-screen md:w-1/2">
                <h1 className="text-4xl font-semibold text-center pt-10">Login</h1>
                <p className="text-center text-gray-500">Entre na sua conta</p>
                <form className="flex flex-col items-center mt-10">
                    <input type="email" className="w-3/4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-custom-cyan" placeholder="E-mail" />
                    <button className="bg-custom-cyan text-white w-3/4 py-2 mt-5 rounded-full">Entrar com o email</button>
                    <a href="/" className="text-custom-cyan mt-5">Esqueceu sua senha?</a>
                    <p className="text-center mt-5">ou</p>
                    <button className="border-custom-red border-2 text-custom-red w-3/4 py-2 mt-5 rounded-full flex justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg>
                        Entrar com o Google
                    </button>
                    <button className="border-custom-red border-2 text-custom-red w-3/4 py-2 mt-5 rounded-full flex justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z" /></svg>
                        Entrar com o Facebook
                    </button>
                </form>
            </div>
        </div>
    )
}