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
        <div className="w-full flex items-center justify-between px-[130px]">
            <nav className="w-full h-[110px] flex justify-between items-center">
                <span><a className="text-2xl font-bold text-custom-cyan">Adotar é legAU</a></span>
                <ul className="flex gap-12">
                    <MenuItem title={"Quem somos"} url={"/quemsomos"} isSelected={true} />
                    <MenuItem title={"Como adotar"} url={"/comoadotar"} isSelected={false} />
                    <MenuItem title={"Cães"} url={"/caes"} isSelected={false} />
                    <MenuItem title={"Contato"} url={"/contato"} isSelected={false} />
                </ul>
            </nav>
        </div>
    )
}