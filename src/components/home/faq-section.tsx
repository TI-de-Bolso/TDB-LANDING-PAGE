import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quais serviços a TI de Bolso oferece?",
    answer:
      "Oferecemos uma gama completa de soluções tecnológicas: Suporte Técnico em TI, Desenvolvimento de Websites, Desenvolvimento de Sistemas Web, Design Gráfico e UI/UX, Infraestrutura e Cloud, além de Consultoria em TI. Somos seu parceiro tecnológico completo.",
  },
  {
    question: "Como funciona o processo de desenvolvimento de sites e sistemas?",
    answer:
      "Nosso processo segue 4 etapas: Descoberta (entendemos suas necessidades), Planejamento (definimos escopo, prazos e orçamento), Desenvolvimento (criamos com atualizações constantes) e Entrega (lançamos e oferecemos suporte contínuo). Você acompanha cada fase.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer:
      "Depende da complexidade. Um site institucional simples leva de 2 a 4 semanas. Landing pages podem ficar prontas em 1 semana. Sistemas web customizados variam de 1 a 6 meses, dependendo das funcionalidades. Sempre definimos prazos claros no início.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer:
      "Sim! Todos os nossos projetos incluem um período de suporte pós-entrega para ajustes e correções. Também oferecemos planos de manutenção contínua para manter seu site ou sistema sempre atualizado e seguro.",
  },
  {
    question: "Como funciona o atendimento de suporte técnico?",
    answer:
      "Utilizamos ferramentas profissionais de acesso remoto que permitem resolver a maioria dos problemas sem precisar ir até sua empresa. É rápido, seguro e eficiente. Para casos que exigem presença física, agendamos visitas técnicas.",
  },
  {
    question: "Vocês criam identidade visual completa ou só o site?",
    answer:
      "Oferecemos ambos! Podemos criar apenas o site usando sua identidade existente, ou desenvolver toda sua identidade visual do zero: logo, paleta de cores, tipografia, materiais de marketing e depois aplicar tudo no site e sistemas.",
  },
  {
    question: "Qual a diferença entre site e sistema web?",
    answer:
      "Um site é focado em apresentar informações e atrair clientes (institucional, landing page, portfólio). Um sistema web é uma aplicação com funcionalidades interativas como painéis administrativos, gestão de dados, automações e integrações com outros sistemas.",
  },
  {
    question: "Vocês trabalham com hospedagem e domínio?",
    answer:
      "Sim! Cuidamos de toda a infraestrutura: registro de domínio, configuração de hospedagem, certificados SSL, e-mails profissionais e manutenção de servidores. Oferecemos soluções em nuvem escaláveis conforme sua necessidade.",
  },
  {
    question: "Atendem empresas de qual porte e região?",
    answer:
      "Atendemos desde profissionais autônomos até médias empresas. Nossos serviços digitais (desenvolvimento, design, consultoria) atendem todo o Brasil. Para suporte presencial, consulte nossa área de cobertura regional.",
  },
  {
    question: "Como é feito o orçamento?",
    answer:
      "Após entender seu projeto em uma conversa inicial (sem compromisso), enviamos uma proposta detalhada com escopo, cronograma e valores. Trabalhamos com preços justos e transparentes, sem surpresas. Entre em contato pelo WhatsApp para começar!",
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
