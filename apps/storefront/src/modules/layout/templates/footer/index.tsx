import { Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full bg-white">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-base hover:text-ui-fg-subtle uppercase font-semibold"
            >
              DEYSISTORE
            </LocalizedClientLink>

            <p className="mt-4 text-small-regular text-ui-fg-subtle max-w-xs">
              Productos variados, novedades y detalles seleccionados para tu día a día.
            </p>
          </div>

          <div>
            <h3 className="txt-small-plus text-ui-fg-base mb-4">Tienda</h3>
            <ul className="space-y-3 text-small-regular text-ui-fg-subtle">
              <li>
                <LocalizedClientLink href="/store" className="hover:text-ui-fg-base">
                  Catálogo
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-ui-fg-base">
                  Novedades
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/cart" className="hover:text-ui-fg-base">
                  Carrito
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="txt-small-plus text-ui-fg-base mb-4">Ayuda</h3>
            <ul className="space-y-3 text-small-regular text-ui-fg-subtle">
              <li>Atención por WhatsApp</li>
              <li>Consultas sobre productos</li>
              <li>Cambios y entregas</li>
            </ul>
          </div>

          <div>
            <h3 className="txt-small-plus text-ui-fg-base mb-4">Contacto</h3>
            <ul className="space-y-3 text-small-regular text-ui-fg-subtle">
              <li>WhatsApp: próximamente</li>
              <li>Instagram: próximamente</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ui-border-base flex flex-col md:flex-row gap-4 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} DEYSISTORE. Todos los derechos reservados.
          </Text>

          <Text className="txt-compact-small">
            Compra segura · Atención personalizada
          </Text>
        </div>
      </div>
    </footer>
  )
}