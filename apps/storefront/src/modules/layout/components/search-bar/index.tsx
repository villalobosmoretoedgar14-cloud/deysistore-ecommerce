"use client"

import { MagnifyingGlass } from "@medusajs/icons"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const cleanQuery = query.trim()

    if (!cleanQuery) {
      router.push("/store")
      return
    }

    router.push(`/store?q=${encodeURIComponent(cleanQuery)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden xl:flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 w-[280px] bg-white"
    >
      <MagnifyingGlass className="w-5 h-5 text-gray-500" />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
        className="w-full outline-none text-sm bg-transparent"
      />
    </form>
  )
}