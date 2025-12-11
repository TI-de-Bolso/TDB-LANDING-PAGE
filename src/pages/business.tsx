import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Building2, Shield, Cloud, BarChart3, Users, Zap } from "lucide-react"
import { Header } from "@/components/home/header"
import { Helmet } from "react-helmet"
import { Footer } from "@/components/home/footer"
import businessTeam from '@/assets/images/business/business-team-analyzing-data-charts-modern-office.jpg'
import businessConsulting from '@/assets/images/business/executive-business-meeting-modern-office-technolog.jpg'
import { Link } from "react-router-dom"

type AppMetadata = {
  title?: string
  description?: string
  keywords?: string[]
}

export const metadata: AppMetadata = {
  title: "TDB Business | Consultoria e Soluções Empresariais de TI",
  description:
    "Consultoria estratégica de TI para empresas. Diagnósticos, projetos sob medida, migração para nuvem e transformação digital com a TDB Business.",
  keywords: [
    "consultoria TI",
    "TI empresarial",
    "transformação digital",
    "migração cloud",
    "diagnóstico TI",
    "projetos TI",
  ],
}


const services = [
  {
    icon: BarChart3,
    title: "Diagnóstico de TI",
    description:
      "Análise completa da sua infraestrutura atual, identificando pontos de melhoria, riscos e oportunidades de otimização.",
    features: ["Auditoria de infraestrutura", "Análise de segurança", "Relatório executivo", "Roadmap de melhorias"],
  },
  {
    icon: Cloud,
    title: "Migração para Nuvem",
    description:
      "Leve sua empresa para a nuvem com segurança. Planejamento, execução e suporte pós-migração completos.",
    features: ["Assessment de workloads", "Planejamento de migração", "Execução assistida", "Otimização de custos"],
  },
  {
    icon: Shield,
    title: "Segurança Corporativa",
    description: "Proteja seus dados e operações com soluções avançadas de segurança cibernética.",
    features: [
      "Pentest e análise de vulnerabilidades",
      "Implementação de firewall",
      "Políticas de segurança",
      "Treinamento de equipe",
    ],
  },
  {
    icon: Zap,
    title: "Projetos Sob Medida",
    description: "Desenvolvimento de soluções personalizadas para desafios específicos do seu negócio.",
    features: [
      "Automação de processos",
      "Integrações de sistemas",
      "Desenvolvimento de ferramentas",
      "Implementação de ERPs",
    ],
  },
]

const differentials = [
  {
    title: "Abordagem Consultiva",
    description: "Entendemos seu negócio antes de propor soluções. Cada projeto é único.",
  },
  {
    title: "Equipe Sênior",
    description: "Profissionais com mais de 10 anos de experiência em projetos complexos.",
  },
  {
    title: "Metodologia Ágil",
    description: "Entregas incrementais com visibilidade total do progresso.",
  },
  {
    title: "Suporte Pós-Projeto",
    description: "Não abandonamos você após a entrega. Suporte contínuo garantido.",
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{metadata.title}</title>
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
        {metadata.keywords && (
          <meta name="keywords" content={metadata.keywords.join(", ")} />
        )}
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section id='start' className="pt-32 pb-20 px-4 bg-[#0B1215] text-white ">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                  TDB Business
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-balance">
                  Sua empresa com a TI que grandes organizações usam{" "}
                  <span className="text-[#257cb2] text-pretty font-bold ">sem o custo de uma</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                  Soluções estratégicas de tecnologia para empresas que buscam transformação digital, eficiência
                  operacional e vantagem competitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
                  <Button size="lg" asChild className="bg-[#257cb2] hover:bg-white hover:text-[#257cb2]">
                    <Link to="/business#servicos">
                      Descubra o que atrapalha a sua operação
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent">
                    <Link to="/business#servicos">Conhecer Soluções</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={businessConsulting}
                  alt="Consultoria TDB Business"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-[#257cb2]">Parceria de longo prazo</p>
                      <p className="text-sm text-muted-foreground">Mais do que suporte, orientação estratégica contínua</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 px-4 bg-[#081a26]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Soluções Empresariais</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
                Serviços especializados para empresas que precisam de mais do que suporte técnico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-24 px-4 bg-[#081a26] text-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a <span className="text-[#257cb2]">TDB Business?</span></h2>
                <p className=" mb-8">
                  Não somos apenas mais uma empresa de TI. Somos parceiros estratégicos comprometidos com o sucesso do
                  seu negócio.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {differentials.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm ">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={businessTeam}
                  alt="Equipe TDB Business"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 bg-[#091f2d] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Trabalhamos</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Um processo estruturado para garantir resultados consistentes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Descoberta", desc: "Entendemos seu negócio, desafios e objetivos" },
                { step: "02", title: "Diagnóstico", desc: "Análise técnica completa da situação atual" },
                { step: "03", title: "Proposta", desc: "Solução personalizada com cronograma e investimento" },
                { step: "04", title: "Execução", desc: "Implementação com acompanhamento contínuo" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="h-16 w-16 bg-[#257cb2] text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-24 px-4 bg-[#0B1215] text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar sua TI?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a alcançar novos patamares de
              eficiência e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico de TI para minha empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Agendar Diagnóstico Gratuito
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:text-white"
                asChild
              >
                <a href="mailto:business@tidebolso.com.br">Enviar E-mail</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
