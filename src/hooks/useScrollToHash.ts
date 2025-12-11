import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace("#", "")
    const el = document.getElementById(id)

    if (!el) return

    // pequeno delay para garantir que o DOM está pronto
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 0)
  }, [pathname, hash, key])
}