import { Cloud, Database, Lock, Code, Network, Smartphone } from "lucide-react"


const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migração e gestão de infraestrutura em nuvem com as principais plataformas do mercado.",
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "Backup automatizado, recuperação de desastres e otimização de banco de dados.",
  },
  {
    icon: Lock,
    title: "Segurança Cibernética",
    description: "Proteção completa contra ameaças digitais com monitoramento contínuo.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Soluções customizadas e integração de sistemas para sua empresa.",
  },
  {
    icon: Network,
    title: "Infraestrutura de Rede",
    description: "Configuração e manutenção de redes corporativas de alta performance.",
  },
  {
    icon: Smartphone,
    title: "Suporte Técnico",
    description: "Assistência remota e presencial para todos os seus dispositivos e sistemas.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20  px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Hero with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-[#0D2B3E]">Soluções completas para o seu negócio</h2>
            <p className="text-lg text-[#113851] leading-relaxed mb-6">
              Do planejamento à execução, oferecemos todos os serviços de TI que sua empresa precisa para crescer no
              mundo digital.
            </p>
            <p className="text-[#113851] leading-relaxed">
              Nossa abordagem integrada garante que todos os aspectos da sua infraestrutura tecnológica funcionem em
              perfeita harmonia.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img src="../src/assets/images/it-professional-working-on-servers-in-data-center-.jpg" alt="Profissional de TI"  className="object-cover" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-[#0D2B3E] transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center mb-5 group-hover:bg-[#0D2B3E] group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl text-[#0D2B3E] font-bold mb-3">{service.title}</h3>
                <p className="text-[#0D2B3E] leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}