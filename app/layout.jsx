import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

//Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "VerdeSapiens | Herramienta digital para huertos",
  description: "Herramientas digitales como calculadora de siembre, calendario de actividades y tips sustentables para huertas",
  keywords: ["huerto", "invernadero", "sustentabilidad"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} md:h-screen flex flex-col px-4`}>
        <Navbar />
        <div className="flex justify-center md:h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
