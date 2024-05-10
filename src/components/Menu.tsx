'use client';
import { useState } from "react";
import { Container } from "./Container"

type MenuItemProps = {
    title: string,
    url: string
};

function MenuItem({ title, url }: MenuItemProps) {
    return (
        <li className="block cursor-pointer py-1.5 px-4 hover:text-custom-cyan lg:flex lg:items-center">
            <a className="block text-xl font-medium text-nowrap lg:font-semibold w-full" href={url}>{title}</a>
        </li>
    );
}

export function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }    
    
    return (
        <div className="w-full">
            <Container>
                <nav className="w-full h-24 mt-5">
                    <div className="flex justify-between items-center">
                        <span><a className="inline-block mr-4 cursor-pointer text-2xl font-bold text-custom-cyan whitespace-nowrap" href="#home">Adotar é legAU</a></span>
                        <button onClick={toggleMenu} className="block lg:hidden">
                            <svg className="w-6 h-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                        <ul className="hidden lg:flex">
                            <MenuItem title={"Sobre"} url={"#quemsomos"} />
                            <MenuItem title={"Objetivos"} url={"#objetivos"} />
                            <MenuItem title={"Como adotar"} url={"#comoadotar"} />
                            <MenuItem title={"Cães"} url={"#caes"} />
                            <MenuItem title={"Visite"} url={"#visite"} />
                            <MenuItem title={"Contato"} url={"#contato"} />
                        </ul>
                    </div>
                    <ul className={`flex flex-col items-center w-full  ${isOpen ? "block" : "hidden"}`}>
                        <MenuItem title={"Sobre"} url={"#quemsomos"} />
                        <MenuItem title={"Objetivos"} url={"#objetivos"} />
                        <MenuItem title={"Como adotar"} url={"#comoadotar"} />
                        <MenuItem title={"Cães"} url={"#caes"} />
                        <MenuItem title={"Visite"} url={"#visite"} />
                        <MenuItem title={"Contato"} url={"#contato"} />
                    </ul>
                </nav>
            </Container>
        </div>
        
    )
}
