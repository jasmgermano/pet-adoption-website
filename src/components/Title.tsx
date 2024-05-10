type TitleProps = {
    text: string;
    color?: string;
}

export function Title ({text, color}: TitleProps) {
    return (
        <div>
            <h1 className={`${color} font-semibold text-4xl text-center lg:text-5xl`}>{text}</h1>
        </div>
    )
}