import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export function Container ({children}: ContainerProps) {
    return (
        <div className="h-full flex items-center justify-between px-5">
            {children}                    
        </div>
    )
}