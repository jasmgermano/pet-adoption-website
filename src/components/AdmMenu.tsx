import { Container } from "./Container";
import { signOut } from "@/app/auth";

export function AdmMenu() {
  return (
    <div className="w-screen">
      <Container>
        <nav className="h-24 w-full flex justify-between items-center">
          <a
            className="inline-block cursor-pointer text-xl font-bold text-custom-red whitespace-nowrap"
            href="/"
          >
            Adotar é legAU
          </a>
          <form
            action={async (formData) => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sair</button>
          </form>
        </nav>
      </Container>
    </div>
  );
}
