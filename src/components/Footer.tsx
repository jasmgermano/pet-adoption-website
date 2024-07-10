import { Container } from "./Container"

export function Footer() {
    return (
        <footer className="flex justify-center mb-4">
            <Container>
                <div className="flex items-center flex-col">
                    <span>
                        <a className="inline-block mr-4 cursor-pointer text-lg font-bold text-custom-cyan whitespace-nowrap" href="/">Adotar é legAU</a>
                    </span>
                    <div className="">
                        <p className="text-center font-semibold text-sm">Desenvolvido com 💜 por <a href="https://www.linkedin.com/in/jasmgermano/" target="_blank" rel="noreferrer" className="text-custom-red">Jasmine Germano</a></p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}