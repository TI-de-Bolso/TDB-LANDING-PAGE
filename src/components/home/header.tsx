import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import logoBranca from "@/assets/images/logoTDB_vertical_branca.png"


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2B3E]/90 text-white backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoBranca}
              alt="TI de Bolso"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 ">
            <a
              href="#servicos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              Serviços
            </a>
            <a
              href="#por-que-nos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              Por que nós
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="hover:border-white border-b-2 border-r-2 border-transparent hover:bg-transparent hover:text-white">
              <a href="#contato">Entrar em Contato</a>
            </Button>
            <Button size="sm" variant="outline" className="bg-white text-[#0D2B3E] hover:bg-[#113851] hover:text-white" asChild>
              <a href="#servicos">Começar Agora</a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <a
              href="#servicos"
              className="text-sm font-medium text-white hover:border-white border-b-2 border-transparent transition-colors"
            >
              Serviços
            </a>
            <a
              href="#por-que-nos"
              className="text-sm font-medium text-white hover:border-white border-b-2 border-transparent transition-colors"
            >
              Por que nós
            </a>
           
            <div className="flex flex-col gap-2 pt-1">
              <Button variant="ghost" size="sm" asChild className="hover:border-white border-b-2 border-r-2 border-transparent hover:bg-transparent hover:text-white">
                <a href="#contato">Entrar em Contato</a>
              </Button>
              <Button size="sm" variant="outline" className="bg-white text-[#0D2B3E] hover:bg-[#113851] hover:text-white" asChild>
                <a href="#planos">Começar Agora</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
