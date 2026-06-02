import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Mi Cuenta",
  description: "Inicia sesión en tu cuenta DEYSISTORE.",
}

export default function Login() {
  return <LoginTemplate />
}
