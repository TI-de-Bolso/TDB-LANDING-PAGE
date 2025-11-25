import * as React from "react"
import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "TDB RH",
    href: "/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll Area",
    href: "/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/tabs",
    description:
      "A set of layered sections of content displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description:
      "A popup that displays information when an element is hovered or focused.",
  },
]

export function NavigationMenuDemo() {
  return (
    <div className="border-b bg-background">
      <div className=" max-w-7xl px-4 py-3">
        <NavigationMenu>
          <NavigationMenuList className="">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="hover:border-b-4 border-[#0D2B3E] rounded-none">Comece Aqui</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild className="bg-[#0D2B3E] hover:bg-[#0A2230] text-white hover:text-gray-200">
                      <Link
                        to="/"
                        className="flex h-full w-full flex-col justify-end rounded-md p-4 no-underline bg-[#0D2B3E] outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                      >
                        <img
                          src="..\src\assets\images\logoTDB_branca.png"
                          alt="Banner do menu"
                          className=" inset-0 object-contain z-0 transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        <p className="text-gray-200 text-sm leading-tight font-medium">
                          Conheça nossas soluções em TI e Design para você e sua empresa.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem to="/docs" title="Suporte Técnico">
                    Formatação, otimização, instalação de sistemas e softwares, manutenção e upgrades.
                  </ListItem>
                  <ListItem to="/installation" title="Desenvolvimento & Sistemas">
                    Desenvolvemos soluções sob medida para empresas e profissionais.
                  </ListItem>
                  <ListItem to="/typography" title="Design & Identidade Visual">
                    Design moderno para marcas que querem se destacar.
                  </ListItem>
                  
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:border-b-4 border-[#0D2B3E] rounded-none">Para Empresas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>



            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/docs">Contato Comercial</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Conheça a gente</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2">
                        <CircleHelpIcon /> Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2">
                        <CircleIcon /> To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2">
                        <CircleCheckIcon /> Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  to,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


export default NavigationMenuDemo