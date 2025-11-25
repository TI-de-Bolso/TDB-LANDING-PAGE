import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o atendimento remoto?",
    answer:
      "Utilizamos ferramentas profissionais de acesso remoto que permitem resolver a maioria dos problemas sem precisar ir até sua empresa. É rápido, seguro e eficiente. Você nos autoriza o acesso e resolvemos o problema enquanto você continua trabalhando.",
  },
  {
    question: "Quanto tempo leva para ter uma resposta do suporte?",
    answer:
      "O tempo de resposta varia conforme o plano contratado. No plano Essencial, respondemos em até 24h. No Operacional, em até 4h. No Empresarial, você tem atendimento prioritário com resposta quase imediata durante horário comercial.",
  },
  {
    question: "Vocês atendem finais de semana e feriados?",
    answer:
      "Nosso atendimento padrão é em horário comercial (segunda a sexta, 8h às 18h). Para empresas com plano Empresarial, podemos criar acordos personalizados incluindo atendimento em horários estendidos ou emergências.",
  },
  {
    question: "E se eu tiver um problema que não conseguem resolver remotamente?",
    answer:
      "Nesse caso, agendamos uma visita presencial conforme as visitas incluídas no seu plano. Se precisar de visitas extras, elas são cobradas à parte com valores previamente acordados.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Basta nos avisar com antecedência e ajustamos conforme a necessidade da sua empresa.",
  },
  {
    question: "Vocês fazem backup dos meus dados?",
    answer:
      "Configuramos e orientamos sobre backup, mas a responsabilidade final pelos dados é sempre da empresa contratante. Recomendamos e implementamos soluções de backup automático para garantir a segurança das informações.",
  },
  {
    question: "Atendem qual região?",
    answer:
      "Nosso suporte remoto atende qualquer lugar do Brasil. Para atendimento presencial, consulte nossa área de cobertura - geralmente atendemos a região local e cidades próximas.",
  },
  {
    question: "O que não está incluso nos planos?",
    answer:
      "Hardware, licenças de software de terceiros, internet, infraestrutura física (cabos, switches novos, etc.) e serviços que exigem especialistas externos (como desenvolvimento de software customizado) não estão inclusos, mas podemos orientar e cotá-los separadamente.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 px-4 bg-[#154766] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Perguntas Frequentes</h2>
          <p className="text-lg text-pretty">
            Tire suas dúvidas sobre nossos serviços de suporte em TI
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#0D2B3E] rounded-lg mb-4">
              <AccordionTrigger className="text-left text-base text-white md:text-lg font-semibold cursor-pointer hover:bg-[#0D2B3E] hover:text-white px-2 ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-2 bg-[#0D2B3E] leading-relaxed rounded-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
