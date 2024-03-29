export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center text-sm">
      {currentYear} - VerdeSapiens - Todos los derechos reservados
    </div>
  )
}
