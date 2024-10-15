// import Image from "next/image";
import Link from "next/link";
import Animation from "./components/Animation";
import { Button } from "@mui/material";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />

      {/* Hero Section */}
      <main className="flex flex-col sm:flex-row items-center justify-around p-8 sm:p-16 flex-grow">
        <div className="text-center sm:text-left max-w-lg">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Soluções tecnológicas inovadoras
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-zinc-400">
            Na TFAR, criamos experiências digitais que aceleram o crescimento e
            transformam o futuro.
          </p>
          <Button variant="contained">
            <span className="font-bold">Saber mais</span>
          </Button>
        </div>
        <div className="mt-8 sm:mt-0 sm:ml-16 w-full max-w-96">
          <Animation />
        </div>
      </main>

      {/* Footer */}
      <footer className=" text-white p-4 text-center">
        © {new Date().getFullYear()} TFAR
      </footer>
    </div>
  );
}
