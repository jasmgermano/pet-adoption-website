import { Container } from "./Container"

export function Footer() {
    return (
        <footer className="w-screen flex justify-center mb-4">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center font-semibold text-sm">Desenvolvido com amor por <span className="block"><a href="https://www.linkedin.com/in/jasmgermano/" target="_blank" rel="noreferrer" className="text-custom-red">Jasmine Germano</a></span></p>
                </div>
            </Container>
        </footer>
    )
}