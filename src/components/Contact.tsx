'use client'
import Image from "next/image"
import IgIcon from "@/assets/ig.svg"
import TiktokIcon from "@/assets/tiktok.svg"
import WppIcon from "@/assets/whatsapp.svg"
import Prosan from "@/assets/prosan-logo.svg"
import { Container } from "./Container"
import { FC } from "react"
import { sendEmail } from "@/utils/send-email"
import { useForm } from "react-hook-form"

export type FormProps = {
    name: string,
    email: string,
    message: string
}

export const Contact: FC = () => {
    const { register, handleSubmit } = useForm<FormProps>();

    function onSubmit(data: FormProps) {
        sendEmail(data)
    }

    return (
        <div className="flex justify-center my-20 lg:my-0 lg:mb-10">
            <Container>
                <div className="lg:flex lg:items-center lg:gap-10">
                    <div>
                        <h1 className="font-semibold text-4xl text-center text-custom-blue uppercase leading-8 mb-2">Fale com <span className="block">a gente!</span></h1>
                        <div className="flex justify-center gap-2">
                            <a href="https://www.instagram.com/adotarelegau?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <Image src={IgIcon} alt="Instagram" height={25} />
                            </a>
                            <a href="https://www.tiktok.com/@adotarelegau?is_from_webapp=1&sender_device=pc">
                                <Image src={TiktokIcon} alt="Tiktok" height={25} />
                            </a>
                            <a href="https://wa.me/553584137314/?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+projeto%21">
                                <Image src={WppIcon} alt="Whatsapp" height={25} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Image src={Prosan} alt="Prosan" height={50} />
                        </div>
                    </div>
                    <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-col items-center mt-5">
                            <div className="flex gap-3">
                                <input type="text" placeholder="Nome" className="w-full h-10 bg-gray-200 rounded-full mt-5 pl-4 placeholder-custom-blue" {...register('name', { required: true })} />
                                <input type="text" placeholder="Email" className="w-full h-10 bg-gray-200 rounded-full mt-5 pl-4 placeholder-custom-blue" {...register('email', { required: true })} />
                            </div>
                            <textarea id="" cols={30} rows={10} placeholder="Mensagem" className="w-full h-28 bg-gray-200 rounded-3xl mt-5 pl-4 pt-2 placeholder-custom-blue" {...register('message', { required: true })}></textarea>
                            <button className="w-28 h-10 bg-custom-blue text-white rounded-full mt-5 cursor-pointer hover:bg-custom-red transition-colors duration-300 ease-in-out">Enviar!</ button>
                    </form>
                </div>
            </Container>
        </div>
    )
};



