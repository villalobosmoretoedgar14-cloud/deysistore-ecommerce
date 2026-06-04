import { Suspense } from "react"
import { User, ShoppingBag, MagnifyingGlass, Heart } from "@medusajs/icons"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SearchBar from "@modules/layout/components/search-bar"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      <header className="border-b border-ui-border-base">
        <nav className="content-container h-20 flex items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold tracking-[0.12em] text-black"
            >
              DEYSISTORE
            </LocalizedClientLink>

            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-gray-800">
              <LocalizedClientLink href="/store" className="hover:text-pink-600">
                Ofertas
              </LocalizedClientLink>

              <LocalizedClientLink href="/store" className="hover:text-pink-600">
                Novedades
              </LocalizedClientLink>

              <LocalizedClientLink href="/store" className="hover:text-pink-600">
                Accesorios
              </LocalizedClientLink>

              <LocalizedClientLink href="/store" className="hover:text-pink-600">
                Snacks
              </LocalizedClientLink>

              <LocalizedClientLink href="/store" className="hover:text-pink-600">
                Regalos
              </LocalizedClientLink>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <SearchBar />

            <LocalizedClientLink
              href="/store"
              className="xl:hidden hover:text-black"
            >
              <MagnifyingGlass className="w-7 h-7" />
            </LocalizedClientLink>

            <LocalizedClientLink href="/account" className="hover:text-black">
              <User className="w-7 h-7" />
            </LocalizedClientLink>

            <button className="hidden sm:block hover:text-black">
              <Heart className="w-7 h-7" />
            </button>

            <Suspense
              fallback={
                <LocalizedClientLink href="/cart" className="hover:text-black">
                  <ShoppingBag className="w-7 h-7" />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}