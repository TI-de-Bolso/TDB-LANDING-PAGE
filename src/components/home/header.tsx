import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logoBranca from "@/assets/images/logoTDB_vertical_branca.png"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2B3E]/90 text-white backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/#home" className="flex items-center gap-3">
            <img
              src={logoBranca}
              alt="TI de Bolso"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/#home"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/#servicos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              Serviços
            </Link>
            <Link
              to="/#planos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              Planos
            </Link>
            <Link
              to="/business#start"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors flex items-center gap-1"
            >
              TDB Business
              <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-full">Empresas</span>
            </Link>
           
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:border-white border-b-2 border-r-2 border-transparent hover:bg-transparent hover:text-white"
            >
              <Link to="/#contato">Entrar em Contato</Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white text-[#0D2B3E] hover:bg-[#113851] hover:text-white border-white"
              asChild
            >
              <Link to="/#servicos">Começar Agora</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <Link
              to="/#servicos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors py-2"
            >
              Serviços
            </Link>
            <Link
              to="/#planos"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors py-2"
            >
              Planos
            </Link>
            <Link
              to="/business#start"
              className="text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-colors py-2 flex items-center gap-2"
            >
              TDB Business
              <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-full">Empresas</span>
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white hover:border-white border-b-2 border-r-2 border-transparent hover:bg-transparent hover:text-white "
              >
                <Link to="/#contato">Entrar em Contato</Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white text-[#0D2B3E] hover:bg-[#113851] hover:text-white border-white"
                asChild
              >
                <Link to="/#planos">Começar Agora</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
