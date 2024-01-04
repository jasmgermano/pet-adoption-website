import { Container } from "./Container"

type MenuItemProps = {
    title: string,
    url: string
    isSelected: boolean
}

function MenuItem ({title, url, isSelected}: MenuItemProps) {
    return (
        <li>
            <a className={`text-2xl font-bold ${isSelected ? "text-custom-light-red" : ""} `} href={url}>{title}</a>
        </li>
    )
}

export function Menu () {
    return (
        <Container>
            <nav className="w-full h-24 flex justify-between items-center">
                <span><a className="text-2xl font-bold text-custom-cyan" href="#home">Adotar é legAU</a></span>
                <ul className="flex gap-12">
                    <MenuItem title={"Quem somos"} url={"#quemsomos"} isSelected={true} />
                    <MenuItem title={"Como adotar"} url={"#comoadotar"} isSelected={false} />
                    <MenuItem title={"Cães"} url={"#caes"} isSelected={false} />
                    <MenuItem title={"Contato"} url={"#contato"} isSelected={false} />
                </ul>
            </nav>
        </Container>
    )
}