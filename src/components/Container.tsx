import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export function Container ({children}: ContainerProps) {
    return (
        <div className="h-full flex items-center justify-between px-5 md:px-10 lg:px-24">
            {children}                    
        </div>
    )
}