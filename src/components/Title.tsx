type TitleProps = {
    text: string;
}

export function Title ({text}: TitleProps) {
    return (
        <div>
            <h1 className="text-white font-semibold text-5xl text-center">{text}</h1>
        </div>
    )
}