import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2B3E]/90 text-white backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="..\src\assets\images\logoTDB_vertical_branca.png"
              alt="TI de Bolso"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 ">
            <a
              href="#servicos"
              className="text-sm font-medium text-white hover:border-b-2 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#por-que-nos"
              className="text-sm font-medium text-white hover:border-b-2 transition-colors"
            >
              Por que nós
            </a>
            <a
              href="#planos"
              className="text-sm font-medium text-white hover:border-b-2 transition-colors"
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-white hover:border-b-2 transition-colors"
            >
              Depoimentos
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="#contato">Entrar em Contato</a>
            </Button>
            <Button size="sm" className="bg-slate-200 text-[#0D2B3E] hover:bg-white" asChild>
              <a href="#planos">Começar Agora</a>
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
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Serviços
            </a>
            <a
              href="#por-que-nos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Por que nós
            </a>
            <a
              href="#planos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Depoimentos
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="#contato">Entrar em Contato</a>
              </Button>
              <Button size="sm" asChild>
                <a href="#planos">Começar Agora</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
