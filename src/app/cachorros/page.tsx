import { Menu } from "@/components/Menu"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Header } from "@/components/Header"
import { DogList } from "@/components/DogList"
import { Footer } from "@/components/Footer"
import DogHeader from "@/assets/dogsPage-header.png"

export default function Dogs() {
    return (
        <div>
            <Menu />
            <ScrollToTop />
            <Header 
                titleLine1='Conheça nossos'
                titleLine2='AUmigos!'
                subtitleColor='text-custom-red'
                buttonColor='bg-custom-cyan'
                buttonTitle='Quero doar!'
                image={DogHeader}
            />
            <DogList />
            <Footer />
        </div>
    )
}