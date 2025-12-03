import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"


export function HeroSection() {
  return (
    <section className="pt-16 bg-[#0D2B3E]">
      <div className="relative w-full h-180 lg:h-150 bg-[url('/src/assets/images/banner_home.png')] bg-no-repeat bg-cover bg-right max-h-[800px]">
              <div className="absolute inset-0 flex flex-col pb-10 justify-end sm:justify-center items-start px-10 ">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B3E]/100 to-black/1"></div>
                 <div className="mb-6 px-4 py-2 rounded-full z-10 border-white border-2 bg-transparent">
                    <span className="text-sm font-semibold text-white ">Tecnologia ao seu alcance</span>
                  </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                  TI profissional <br /><span className="font-semibold"> ao seu alcance</span>
                </h1>
                <p className="text-xl text-gray-300 mt-4 max-w-xl font-semibold z-10 leading-relaxed mb-8">
                  Transforme seu negócio com soluções de TI acessíveis e completas. Suporte dedicado, segurança robusta e
                    inovação constante ao alcance da sua empresa.</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10 z-10">
                  <Button size="lg" variant="outline" className="gap-2 text-base text-[#113851] hover:text-white bg-white hover:bg-[#0D2B3E]" asChild>
                      <a href="#planos" >
                          Ver Serviços
                          <ArrowRight className="h-5 w-5" />
                      </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base bg-transparent text-white" asChild>
                    <a href="#contato">Falar com Especialista</a>
                  </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white z-10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 " />
                      <span className="font-medium">Suporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 " />
                      <span className="font-medium">Sem fidelidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 " />
                      <span className="font-medium">Setup em 48h</span>
                    </div>
                  </div>
              </div>
              
              
      
            </div> 
    </section>
  )
}
