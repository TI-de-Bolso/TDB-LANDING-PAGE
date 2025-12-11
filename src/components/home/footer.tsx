
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import logoBranca from "@/assets/images/logoTDB_vertical_branca.png"

export function Footer() {
  return (
    <footer className="bg-[#0D2B3E] py-12 px-4 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <img
              src={logoBranca}
              alt="TI de Bolso"
              width={160}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-white/80">
              Tecnologia de qualidade ao alcance do seu negócio. Soluções completas de TI para empresas de todos os
              tamanhos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/#servicos" className="hover:border-b hover:border-white transition-colors">
                  Suporte Técnico
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className="hover:border-b hover:border-white transition-colors">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className="hover:border-b hover:border-white transition-colors">
                  Sistemas Web
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className="hover:border-b hover:border-white transition-colors">
                  Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa / Planos */}
          <div>
            <h3 className="font-semibold mb-4">Planos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/#planos" className="hover:border-b hover:border-white transition-colors">
                  Plano Essencial
                </Link>
              </li>
              <li>
                <Link to="/#planos" className="hover:border-b hover:border-white transition-colors">
                  Plano Profissional
                </Link>
              </li>
              <li>
                <Link to="/#planos" className="hover:border-b hover:border-white transition-colors">
                  Plano Avançado
                </Link>
              </li>
              <li>
                <Link to="/business" className="hover:border-b hover:border-white transition-colors">
                  TDB Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Segmentos 
          <div>
            <h3 className="font-semibold mb-4">TI para Segmentos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/clinicas" className="hover:border-b hover:border-white transition-colors">
                  TI para Clínicas
                </Link>
              </li>
              <li>
                <Link to="/contabilidade" className="hover:border-b hover:border-white transition-colors">
                  TI para Contabilidade
                </Link>
              </li>
              <li>
                <Link to="/logistica" className="hover:border-b hover:border-white transition-colors">
                  TI para Logística
                </Link>
              </li>
              <li>
                <Link to="/advocacia" className="hover:border-b hover:border-white transition-colors">
                  TI para Advocacia
                </Link>
              </li>
            </ul>
          </div>*/}

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@tidebolso.com.br"
                  className="hover:border-b hover:border-white transition-colors"
                >
                  contato@tidebolso.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:71999356032" className="hover:border-b hover:border-white transition-colors">
                  (71) 9 9935-6032
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lauro de Freitas, BA - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} TI de Bolso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
