import { Shield, Zap, Users, Clock, Award, HeadphonesIcon, CheckCircle2 } from "lucide-react"
import teamPhoto from "@/assets/images/professional-team-collaborating-in-modern-office-w.jpg"

const benefits = [
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Protegemos seus dados com as melhores práticas de segurança e criptografia avançada.",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Infraestrutura de ponta para garantir velocidade e disponibilidade máximas.",
  },
  {
    icon: Users,
    title: "Time Especializado",
    description: "Profissionais certificados e experientes prontos para atender suas necessidades.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Atendimento sempre disponível para resolver qualquer questão rapidamente.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Processos validados e certificações internacionais de excelência.",
  },
  {
    icon: HeadphonesIcon,
    title: "Consultoria Personalizada",
    description: "Análise detalhada do seu negócio para soluções sob medida.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="por-que-nos" className="py-20 px-4 bg-[#0D2B3E]">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={teamPhoto} alt="Equipe colaborando" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#113851] border-b-2 border-r-2 text-primary-foreground p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-1">99.9%</p>
              <p className="text-sm opacity-90">Uptime garantido</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Por que contratar nossos serviços?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Mais do que tecnologia, oferecemos tranquilidade. Nossa equipe especializada trabalha para que você possa
              focar no que realmente importa: fazer seu negócio crescer.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Equipe especializada e certificada</p>
                  <p className="text-sm text-gray-300">
                    Profissionais experientes com certificações internacionais
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">Atendimento personalizado</p>
                  <p className="text-sm text-gray-300">
                    Soluções customizadas para as necessidades do seu negócio
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">Tecnologia de ponta</p>
                  <p className="text-sm text-gray-300">
                    Ferramentas e infraestrutura das principais plataformas do mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-[#113851] outline-1 hover:outline-2 outline-white  text-white rounded-2xl p-6  hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D2B3E] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white " />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
