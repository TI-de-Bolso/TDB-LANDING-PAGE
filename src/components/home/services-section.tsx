import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Monitor, Globe, Code, Palette, Server, Smartphone, ArrowRight, Check } from "lucide-react"
import itSupport from "@/assets/images/services/it-support-technician-helping-client-with-computer.jpg"
import webDev from "@/assets/images/services/modern-website-development-on-multiple-screens.jpg"
import webSystem from "@/assets/images/services/custom-web-application-dashboard-interface.jpg"
import designer from "@/assets/images/services/graphic-designer-working-on-brand-identity.jpg"
import cloudServer from "@/assets/images/services/cloud-server-infrastructure-data-center.jpg"
import itConsulting from "@/assets/images/services/it-consultant-meeting-with-business-team.jpg"

const services = [
  {
    icon: Monitor,
    title: "Suporte Técnico",
    description: "Suporte completo para sua empresa, remoto e presencial. Deixe a TI com quem entende.",
    image: itSupport,
    features: [
      "Atendimento remoto e presencial",
      "Manutenção preventiva e corretiva",
      "Monitoramento contínuo",
      "Backup e segurança de dados",
      "Suporte a redes e infraestrutura",
    ],
    highlight: true,
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites modernos, rápidos e que convertem. Do institucional ao e-commerce.",
    image: webDev,
    features: [
      "Sites institucionais",
      "Landing pages de alta conversão",
      "E-commerce completo",
      "Otimização SEO",
      "Design responsivo",
    ],
    highlight: false,
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description: "Automatize processos com sistemas sob medida para o seu negócio.",
    image: webSystem,
    features: [
      "Sistemas de gestão personalizados",
      "Automação de processos",
      "Painéis administrativos",
      "Integrações com APIs",
      "Relatórios e dashboards",
    ],
    highlight: false,
  },
  {
    icon: Palette,
    title: "Design & Identidade Visual",
    description: "Marca profissional que transmite credibilidade e conquista clientes.",
    image: designer,
    features: [
      "Criação de logotipos",
      "Identidade visual completa",
      "Design para redes sociais",
      "Materiais gráficos",
      "UI/UX Design",
    ],
    highlight: false,
  },
  {
    icon: Server,
    title: "Infraestrutura & Cloud",
    description: "Migração e gestão de servidores locais e em nuvem com segurança.",
    image: cloudServer,
    features: [
      "Servidores locais e cloud",
      "Google Workspace & Microsoft 365",
      "Gestão de domínios e e-mails",
      "Backup em nuvem",
      "VPN e segurança",
    ],
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Consultoria em TI",
    description: "Orientação estratégica para sua empresa tomar as melhores decisões tecnológicas.",
    image: itConsulting,
    features: [
      "Análise de infraestrutura",
      "Planejamento tecnológico",
      "Redução de custos com TI",
      "Segurança da informação",
      "Treinamento de equipes",
    ],
    highlight: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de tecnologia para impulsionar o seu negócio. Do suporte técnico ao desenvolvimento de
            sistemas personalizados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`overflow-hidden flex flex-col border-2 transition-all hover:shadow-xl group ${
                  service.highlight ? "border-[#113851] shadow-lg" : "hover:border-[#113851]/50"
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#113851]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#113851]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#113851] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                    <a href="https://wa.me/5571999356032?text=Ol%C3%A1!%20Gostaria%20de%20um%20servi%C3%A7o%20da%20TI%20de%20Bolso.">
                       <Button variant='outline' className="w-full group/btn bg-[#0D2B3E] hover:bg-[#113851] text-white hover:text-white cursor-pointer">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  </a>
                 
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Temos soluções personalizadas para você.
          </p>
          <a href="https://wa.me/5571999356032?text=Ol%C3%A1!%20Gostaria%20de%20um%20servi%C3%A7o%20da%20TI%20de%20Bolso."> <Button size="lg" variant="outline" className="cursor-pointer">
            Fale com um especialista
          </Button></a>
         
        </div>
      </div>
    </section>
  )
}
