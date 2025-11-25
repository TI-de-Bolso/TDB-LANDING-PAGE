export function StatsSection() {
  const stats = [
    { value: "100+", label: "Usuarios Atendidas" },
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "24/7", label: "Suporte Disponível" },
    { value: "4+", label: "Anos de Experiência" },
  ]

  return (
    <section className="py-12 px-4 bg-[#113851] text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
