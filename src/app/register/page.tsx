import { Header } from "@/components/Header";

import { RegisterMenu } from "@/components/RegisterMenu";

import DogHeader from "@/assets/dogsPage-header.png";
import { RegisterHeader } from "@/components/RegisterHeader";
import RegisterForm from "@/components/RegisterForm";
import { Footer } from "@/components/Footer";

export default function Register() {
    return (
        <div>
            <RegisterMenu />
            <RegisterHeader />
            <RegisterForm />
            <Footer />
        </div>
    )
}