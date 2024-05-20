'use client';
import { useState } from "react";
import { Container } from "./Container";

export function RegisterMenu() {
     return (
        <div className="w-screen">
            <Container>
                <nav className="h-24 w-full flex justify-between items-center">
                    <a className="inline-block cursor-pointer text-xl font-bold text-custom-red whitespace-nowrap" href="/">Adotar é legAU</a>
                    <a className="text-center">
                        Sair
                    </a>

                </nav>
            </Container>
        </div>
    );
}
