import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Studio Capital — Investissement locatif à Casablanca",description:"Conciergerie premium, gestion locative et investissement clé en main à Casablanca.",openGraph:{title:"Studio Capital",description:"L’investissement locatif clé en main à Casablanca.",type:"website"},twitter:{card:"summary_large_image"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
