import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export function Container ({children}: ContainerProps) {
    return (
        <div className="w-full flex items-center justify-between px-[150px]">
            {children}                    
        </div>
    )
}