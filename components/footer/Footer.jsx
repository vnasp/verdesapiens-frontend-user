export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center text-sm pb-4">
      {currentYear} - VerdeSapiens - Todos los derechos reservados
    </div>
  )
}
