import { Container } from "./Container";
import Image from 'next/image';

import Dog from "@/assets/dog2.png";

export default function AdmList() {
    return (
        <div>
            <Container>
                <div className="bg-white p-8 rounded-md w-full">
                    <div className=" flex items-center justify-between pb-6">
                        <div>
                            <button className="text-sm text-white transition duration-150 hover:bg-red-300 bg-custom-red font-semibold py-2 px-4 rounded">
                                <a href="/admin/cadastrar">Cadastrar</a>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="buscar..." />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Nome
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Idade
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Sexo
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Porte
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Raça
                                            </th>        
                                            <th className="bg-gray-100"></th>   
                                            <th className=" bg-gray-100"></th>                                       
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <Image src={Dog} alt="dog" className="w-full h-full rounded-full" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            Mimi
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">2 anos</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Fêmea
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Pequeno
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Vira-lata
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#787878" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>                                            
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#787878" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>                                            
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Mostrando 1 de 1 Dado
                                    </span>
                                    <div className="flex gap-3 mt-2 xs:mt-0">
                                        <button
                                            className="text-sm text-white transition duration-150 hover:bg-custom-light-cyan bg-custom-cyan font-semibold py-2 px-4 rounded-l">
                                            Anterior
                                        </button>
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-custom-light-cyan bg-custom-cyan font-semibold py-2 px-4 rounded-r">
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
    )
}