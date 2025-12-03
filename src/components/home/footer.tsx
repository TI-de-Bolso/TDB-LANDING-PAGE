import { Mail, Phone, MapPin } from "lucide-react"
import logoBranca from "@/assets/images/logoTDB_vertical_branca.png"

export function Footer() {
  return (
    <footer className="bg-[#0D2B3E] py-12 px-4 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logoBranca}
              alt="TI de Bolso"
              width={160}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Tecnologia de qualidade ao alcance do seu negócio. Soluções completas de TI para empresas de todos os
              tamanhos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm ">
              <li>
                <a href="#servicos" className="hover:border-b ">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:border-b ">
                  Segurança Cibernética
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:border-b ">
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:border-b ">
                  Gestão de Dados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm ">
              <li>
                <a href="#por-que-nos" className="hover:border-b transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:border-b transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:border-b transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm ">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@tidebolso.com.br" className="hover:border-b transition-colors">
                  contato@tidebolso.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:71999356032" className="hover:border-b transition-colors">
                  (71) 9 99935-6032
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lauro de Freitas, BA - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TI de Bolso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
