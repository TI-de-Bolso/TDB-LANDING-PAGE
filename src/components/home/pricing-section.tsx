import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, ChevronUp, Monitor, ArrowRight, Clock } from "lucide-react"
import { Link } from "react-router-dom"


const plans = [
  {
    name: "Essencial",
    description: "Para empresas que querem estabilidade e alguém responsável pela TI.",
    machines: "Até 5",
    price: "R$ 299",
    daily: "Menos de R$ 10 por dia",
    sla: "Atendimento ágil em horário comercial",
    popular: false,
    isEnterprise: false,
    shortFeatures: [
      "Suporte remoto sempre que precisar",
      "Atendimento ágil em horário comercial",
      "Até 5 computadores",
      "Manutenção preventiva mensal",
      "Proteção contra vírus e ameaças",
      "Gestão e acompanhamento de backup dos dados da empresa (configuração inicial pode exigir visita técnica)",
    ],
    fullFeatures: [
      "Suporte remoto sempre que precisar",
      "Atendimento ágil em horário comercial",
      "Até 5 computadores",
      "Manutenção preventiva mensal",
      "Proteção contra vírus e ameaças",
      "Gestão e acompanhamento de backup dos dados da empresa (configuração inicial pode exigir visita técnica)",
      "Monitoramento básico dos computadores",
      "Relatório mensal simples",
      "Atendimento direto por WhatsApp",
      "Diagnóstico inicial do ambiente de TI",
      "Atendimento presencial quando necessário, cobrado à parte",
    ],
  },
  {
    name: "Profissional",
    description: "Para empresas que precisam de agilidade, segurança e prioridade.",
    machines: "Até 10",
    price: "R$ 499",
    daily: "Cerca de R$ 16 por dia",
    sla: "Atendimento prioritário",
    popular: true,
    isEnterprise: false,
    shortFeatures: [
      "Tudo do Plano Essencial",
      "Atendimento prioritário; atendimento estendido (8h–20h)",
      "Até 10 computadores",
      "Backup avançado dos dados (configuração inicial mediante diagnóstico)",
      "Gestão da rede e da internet",
      "Firewall e controle de segurança",
    ],
    fullFeatures: [
      "Tudo do Plano Essencial",
      "Atendimento prioritário; atendimento estendido (8h–20h)",
      "Até 10 computadores",
      "Backup avançado dos dados (configuração inicial mediante diagnóstico)",
      "Gestão da rede e da internet",
      "Firewall e controle de segurança",
      "Acesso remoto seguro (VPN)",
      "Suporte a 1 servidor local",
      "Inventário dos equipamentos",
      "Atendimento estendido (8h–20h)",
      "Prioridade nos chamados",
    ],
  },
  {
    name: "Avançado",
    description: "Para operações que buscam alta disponibilidade ou escalabilidade. Indicado para ambientes maiores.",
    machines: "+10",
    price: "Sob consulta",
    sla: "Sob consulta",
    popular: false,
    isEnterprise: false,
    shortFeatures: [
      "Tudo do Plano Profissional",
      "Projetos e consultoria avançada",
      "Monitoramento e segurança reforçados",
      "Backup corporativo e retenção estendida",
      "Suporte e planejamento proativo",
    ],
    fullFeatures: [
      "Tudo do Plano Profissional",
      "Projetos e consultoria avançada",
      "SOC e monitoramento contínuo",
      "Backup corporativo e Disaster Recovery",
      "Planejamento de capacidade e hardening",
      "Treinamentos e relatórios executivos",
      "Atendimento presencial e SLA personalizados (sob consulta)",
    ],
  },
  {
    name: "Enterprise",
    description: "Para empresas maiores ou com necessidades específicas (+10 computadores, projetos, segurança avançada, nuvem, etc.)",
    machines: "+10",
    price: "Sob consulta",
    sla: "Sob consulta",
    popular: false,
    isEnterprise: true,
    shortFeatures: [
      "Análise e projeto sob medida",
      "Segurança e conformidade avançadas",
      "Soluções de nuvem e migração",
      "Atendimento e SLA personalizados",
      "Gerente de conta dedicado",
    ],
    fullFeatures: [
      "Análise completa da operação",
      "Projeto de infraestrutura sob medida",
      "SOC e monitoramento 24/7",
      "Backup corporativo e Disaster Recovery",
      "Governança, compliance e hardening",
      "Migração e projetos de nuvem",
      "Consultoria estratégica contínua",
      "Gerente de conta dedicado",
      "Relatórios executivos personalizados",
    ],
  },
]

export function PlansSection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section id="planos" className="py-24 px-4 bg-[#0D2B3E]">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-white text-primary text-sm font-medium rounded-full mb-4">
            TI de Bolso - Suporte Remoto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Planos Mensais de Suporte</h2>
          <p className="text-white text-lg max-w-2xl mx-auto text-pretty">
            Tecnologia de qualidade ao alcance do seu bolso. Suporte 100% remoto com visitas presenciais sob demanda.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Button variant="outline" onClick={() => setShowDetails(!showDetails)} className="gap-2 cursor-pointer">
            {showDetails ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Ver resumo dos planos
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Ver detalhes completos
              </>
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border ${
                plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
              } ${plan.isEnterprise ? "bg-gradient-to-b from-primary/5 to-primary/10" : ""} p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#257cb2] text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {plan.isEnterprise && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#154766] text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Personalizado
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-center gap-2 mb-3 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-semibold text-primary">{plan.sla}</span>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                <Monitor className="h-5 w-5 text-primary" />
                <span className="font-medium">{plan.machines} computadores</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {!plan.isEnterprise && <span className="text-muted-foreground text-sm">/mês</span>}
                {plan.daily && <div className="text-sm text-muted-foreground mt-1">{plan.daily}</div>}
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {(showDetails ? plan.fullFeatures : plan.shortFeatures).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.isEnterprise ? (
                <Button className="w-full gap-2 bg-[#154766]" variant="default" asChild>
                  <Link to="/business">
                    Conhecer TDB Business
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button className={`w-full ${plan.popular ? "bg-[#257cb2]" : "outline"}`} variant={plan.popular ? "default" : "outline"} asChild>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=5571999356032&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Plano+${plan.name}+da+TI+de+Bolso.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com consultor
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white mt-8">
          Todos os planos incluem visita técnica inicial de diagnóstico em regiões atendidas, consulte. Atendimento presencial adicional cobrado à
          parte.
        </p>
      </div>
    </section>
  )
}
