"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function PricingSection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section id="planos" className="py-20 px-4 md:px-8 bg-[#113851]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Planos de Suporte</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Os valores completos são enviados após diagnóstico personalizado.
          </p>
        </div>

        <div className="flex justify-center mb-15">
          <Button onClick={() => setShowDetails(!showDetails)} variant="outline" size="lg" className="gap-2 cursor-pointer">
            {showDetails ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Ver versão resumida
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Ver todos os detalhes
              </>
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plano Essencial */}
          <Card className="p-8 relative flex flex-col border-none hover:outline-white hover:outline-2 transition-colors bg-[#1a587f] text-white">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Essencial</h3>
              <p className="text-gray-100">
                Para empresas que precisam do básico funcionando sem dor de cabeça.
              </p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <div className="text-sm text-gray-100 mb-1">Suporte para</div>
              <div className="text-3xl font-bold">Até 3 máquinas</div>
              <div className="text-sm text-gray-100 mt-2">1 visita presencial/mês*</div>
            </div>

            {!showDetails ? (
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Atendimento remoto para problemas simples</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Backup e monitoramento básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Manutenção preventiva mensal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Suporte a softwares comuns</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    Atendimento remoto limitado para problemas simples (e-mail, impressoras, lentidão, configurações
                    gerais)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Backup configurado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Monitoramento básico de estabilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Suporte a softwares comuns do dia a dia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5  shrink-0 mt-0.5" />
                  <span>Verificação periódica dos computadores para prevenir travamentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Resolução de falhas leves em rede (Wi-Fi, conexões instáveis, pequenos ajustes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Atualizações básicas do Windows e aplicativos essenciais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Limpezas e otimizações simples de desempenho</span>
                </li>
              </ul>
            )}
            <a href="https://api.whatsapp.com/send/?phone=5571999356032&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Plano+Essencial+da+TI+de+Bolso.&type=phone_number&app_absent=0" target="_blank"><Button size="lg" variant="outline" className="w-full cursor-pointer text-[#0D2B3E] bg-white hover:bg-[#0D2B3E] hover:text-white hover:scale-105 transition-all">
              Quero esse plano
            </Button></a>
            
          </Card>

          {/* Plano Operacional - Mais Popular */}
          <Card className="p-8 relative flex flex-col border-none outline-2 outline-[#2a8ecc] shadow-xl scale-105 bg-[#154766] text-white hover:outline-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2a8ecc] text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
              <Star className="h-4 w-4 fill-current" />
              Mais escolhido
            </div>

            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-bold mb-2">Profissional</h3>
              <p className="text-gray-100">
                Você deixa de "apagar incêndio" e passa a ter uma TI que evita problemas.
              </p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <div className="text-sm text-gray-100 mb-1">Suporte para</div>
              <div className="text-3xl font-bold">Até 10 máquinas</div>
              <div className="text-sm text-gray-100 mt-2">4 visitas presencial/mês*</div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold ">Tudo do plano Essencial +</p>
            </div>

            {!showDetails ? (
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Atendimento remoto ilimitado</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Monitoramento contínuo e correções proativas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Remoção de vírus e gerenciamento de backups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5  shrink-0 mt-0.5" />
                  <span>Suporte à rede interna estruturada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Relatório mensal de saúde das máquinas</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    Atendimento remoto <strong>ilimitado</strong> para problemas simples
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Monitoramento contínuo dos computadores e serviços críticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Correções proativas antes que o sistema caia ou trave</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Manutenções preventivas mensais mais completas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Remoção de vírus, spyware e ameaças digitais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Gerenciamento de backups (orientação, configuração e checagem periódica)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Otimização mais profunda de máquinas para melhorar velocidade e vida útil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Suporte à rede interna com análise estruturada (switch, modem, IP, impressoras em rede)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Auxílio com ferramentas do negócio (sistemas contábeis, transporte, ERPs, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Acompanhamento de erros e logs para reduzir paradas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Relatório mensal de saúde das máquinas</span>
                </li>
              </ul>
            )}

            <a href="https://api.whatsapp.com/send/?phone=5571999356032&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Plano+Profissional+da+TI+de+Bolso.&type=phone_number&app_absent=0" target="_blank"><Button size="lg" variant="outline" className="w-full cursor-pointer text-[#0D2B3E] bg-white hover:bg-[#0D2B3E] hover:text-white hover:scale-105 transition-all">
              Quero esse plano
            </Button></a>
          </Card>

          {/* Plano Empresarial */}
          <Card className="p-8 relative flex flex-col border-none hover:outline-white hover:outline-2 transition-colors bg-[#0D2B3E] text-white">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-100">
                Aqui você tem um setor de TI completo sem precisar contratar funcionários.
              </p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <div className="text-sm text-gray-100 mb-1">Suporte para</div>
              <div className="text-3xl font-bold">20+ máquinas</div>
              <div className="text-sm text-gray-100 mt-2">12 visitas presencial/mês*</div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold ">Tudo do plano Operacional +</p>
            </div>

            {!showDetails ? (
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Gestão completa do ambiente de TI</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Consultoria mensal estratégica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Implementação de políticas de segurança</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Acompanhamento de servidores e nuvem</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Atendimento prioritário sem fila</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-3 mb-8 flex-grow text-sm">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Gestão completa do ambiente (PCs, rede, usuários, permissões, senhas, rotinas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Planejamento de melhorias tecnológicas para aumento de produtividade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Consultoria mensal com análise de gargalos, riscos e estratégias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Implementação de políticas de segurança (senhas, acessos, backups)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    Acompanhamento de servidores locais ou serviços em nuvem (Google Workspace, Microsoft 365, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Inventário completo de máquinas, softwares e riscos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Mapeamento da infraestrutura e proposta contínua de melhorias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Gestão preventiva: redução de falhas, tempo de parada e imprevistos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Auxílio em integrações, migrações, configurações avançadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Relatórios técnicos e executivos para tomada de decisão</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Atendimento prioritário e direto, sem fila</span>
                </li>
              </ul>
            )}

            <a href="https://api.whatsapp.com/send/?phone=5571999356032&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Plano+Empresarial+da+TI+de+Bolso.&type=phone_number&app_absent=0" target="_blank"><Button size="lg" variant="outline" className="w-full cursor-pointer text-[#0D2B3E] bg-white hover:bg-[#0D2B3E] hover:text-white hover:scale-105 transition-all">
              Quero esse plano
            </Button></a>
          </Card>
        </div>

        <p className="text-sm text-gray-100 text-center mt-15">
          *Apenas nas regiões atendidas presencialmente, consulte conosco.
        </p>
      </div>
    </section>
  )
}
