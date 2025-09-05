import {
    Building2,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Heart,
    Wrench,
    Package,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Accueil", href: "#accueil" },
        { name: "Services", href: "#services" },
        { name: "À Propos", href: "#apropos" },
        { name: "Contact", href: "#contact" },
    ];

    const services = [
        { name: "GERHO SERVICE", href: "#services" },
        { name: "Main-d'œuvre Qualifiée", href: "#services" },
        { name: "Services Construction", href: "#services" },
        { name: "Nettoyage Post-Travaux", href: "#services" },
    ];

    const business = [
        { name: "GERHO PRODUITS", href: "#services" },
        { name: "Beurre d'Arachide", href: "#services" },
        { name: "Jus Naturels", href: "#services" },
        { name: "Partenariats", href: "#contact" },
    ];

    const socialLinks = [
        { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
        { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            href: "#",
        },
    ];

    return (
        <footer className="relative overflow-hidden text-white bg-gradient-to-br from-black-900 via-orange-800 to-green-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/10 to-green-100/10"></div>

            <div className="relative z-10 py-20 container-custom">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-8 space-x-3">
                            <div className="relative">
                                <Building2 className="w-10 h-10 text-orange-400" />
                                <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-green-400"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white font-display">
                                    GERHO ENTREPRISE
                                </span>
                                <span className="-mt-1 text-sm text-orange-200">
                                    Service & Produits
                                </span>
                            </div>
                        </div>
                        <p className="mb-8 text-lg leading-relaxed text-orange-200">
                            Leader dans la fourniture de main-d'œuvre qualifiée
                            en construction et la transformation de produits
                            agroalimentaires de qualité premium. Nous servons
                            Goma et toute la RDC avec excellence et
                            professionnalisme.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-orange-800/50">
                                    <Mail className="w-5 h-5 text-orange-400" />
                                </div>
                                <span className="text-orange-200">
                                    gerhoentreprise@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-orange-800/50">
                                    <Phone className="w-5 h-5 text-orange-400" />
                                </div>
                                <span className="text-orange-200">
                                    +243 990 669 433
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-orange-800/50">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                </div>
                                <span className="text-orange-200">
                                    Quartier Keshero, Avenue Topographe, N°27 –
                                    Goma, RDC
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-8 text-lg font-semibold text-white font-display">
                            Liens Rapides
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="inline-block transition-colors text-orange-200 hover:text-white hover:translate-x-1"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-8 text-lg font-semibold text-white font-display">
                            GERHO SERVICE
                        </h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        className="inline-block transition-colors text-orange-200 hover:text-white hover:translate-x-1"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business */}
                    <div>
                        <h3 className="mb-8 text-lg font-semibold text-white font-display">
                            GERHO PRODUITS
                        </h3>
                        <ul className="space-y-4">
                            {business.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="inline-block transition-colors text-orange-200 hover:text-white hover:translate-x-1"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="relative z-10 py-12 border-t border-orange-800/50">
                <div className="container-custom">
                    <div className="text-center">
                        <h3 className="mb-6 text-2xl font-semibold text-white font-display">
                            Restez Informé de Nos Services
                        </h3>
                        <p className="max-w-2xl mx-auto mb-8 text-lg text-orange-200">
                            Recevez nos dernières offres de services et
                            informations sur nos produits
                        </p>
                        <div className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-6 py-4 rounded-lg text-black-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/95 backdrop-blur-sm"
                            />
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="relative z-10 py-8 border-t border-orange-800/50">
                <div className="container-custom">
                    <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-sm text-orange-200">
                            <span>
                                © {currentYear} GERHO ENTREPRISE. Tous droits
                                réservés.
                            </span>
                            <span className="text-orange-400">|</span>
                            <span className="flex items-center space-x-1">
                                <span>Développé par</span>Obedi Ndevu Michael
                                <span>pour GERHO ENTREPRISE</span>
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="p-3 transition-colors transform rounded-lg text-orange-200 hover:text-white hover:bg-orange-800/50 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
