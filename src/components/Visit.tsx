import { Container } from "./Container";
import { Title } from "./Title";

export function Visit () {
    return (
        <div id="visite" className="mt-20">
            <Title text="Visite o hospital" />
            <Container>
                <div className="h-[580px] w-screen flex items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.725895205449!2d-45.99064642466207!3d-21.400694885786812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5f72d1fa56145%3A0xcf69c7db80615384!2sHospital%20de%20C%C3%A3es%20e%20Gatos%20-%20CISAMA!5e0!3m2!1spt-BR!2sbr!4v1704634847583!5m2!1spt-BR!2sbr" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[500px]"></iframe>
                </div>
            </Container>
        </div>
    )
}