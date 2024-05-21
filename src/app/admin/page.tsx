import { Header } from "@/components/Header";


import { Footer } from "@/components/Footer";
import { AdmMenu } from "@/components/AdmMenu";
import { AdmHeader } from "@/components/AdmHeader";
import AdmList from "@/components/AdmList";

export default function Admin() {
    return (
        <div>
            <AdmMenu />
            <AdmHeader />
            <AdmList />
            <Footer />
        </div>
    )
}