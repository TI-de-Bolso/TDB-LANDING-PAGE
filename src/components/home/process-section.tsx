import { Search, Settings, HeartHandshake, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico Inicial",
    description:
      "Analisamos sua infraestrutura atual, identificamos problemas e entendemos suas necessidades específicas.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Implementação",
    description: "Configuramos sistemas, estabelecemos monitoramento e implementamos as soluções necessárias.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Suporte Contínuo",
    description: "Mantemos tudo funcionando perfeitamente com monitoramento proativo e suporte sempre disponível.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Evolução",
    description: "Propomos melhorias constantes para sua TI acompanhar o crescimento do seu negócio.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-[#113851] text-white ">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Como Funciona</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto text-pretty">
            Nossa metodologia comprovada para transformar a TI da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Icon className="h-8 w-8 text-[#113851]" />
                  </div>
                  <span className="text-5xl font-bold text-white mb-2">{step.number}</span>
                  <h2 className="text-xl font-bold mb-3">{step.title}</h2>
                  <p className="text-gray-100 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
