import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "GERHO ENTREPRISE",
    description:
        "Spécialiste en culture de café et premier traitement. Nous recherchons des clients potentiels pour l'achat de tonnes de café et des managers qualifiés.GERHO ENTREPRISE est une société basée à Goma, active dans deux grands domaines : GERHO SERVICE - Main-d'œuvre qualifiée dans le secteur de la construction, et GERHO PRODUITS - Transformation agroalimentaire.",
    keywords:
        "café, culture, traitement, export, business, clients, managersdes produits agroalimentaires transformés selon les plus hauts standards pour garantir votre satisfaction.",
    authors: [{ name: "GERHO ENTREPRISE" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className="text-gray-900 bg-white ">{children}</body>
        </html>
    );
}
