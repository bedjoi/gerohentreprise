import {
    Wrench,
    Leaf,
    Package,
    Truck,
    Users,
    Target,
    Award,
    Globe,
    Building2,
    Hammer,
    HardHat,
    Scissors,
} from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Wrench className="h-12 w-12 text-orange-600" />,
            title: "GERHO SERVICE",
            description:
                "Nous fournissons de la main-d'œuvre professionnelle et qualifiée pour les particuliers, ingénieurs et entreprises de construction.",
            features: [
                "Maçons qualifiés",
                "Ferrailleurs expérimentés",
                "Coffreurs professionnels",
                "Charpentiers spécialisés",
                "Menuisiers experts",
                "Nettoyage après travaux",
            ],
            cta: "Demander nos services",
        },
        {
            icon: <Package className="h-12 w-12 text-green-600" />,
            title: "GERHO PRODUITS",
            description:
                "Nous transformons les produits agricoles bruts en produits finis ou semi-finis sous notre propre marque.",
            features: [
                "Beurre d'arachide premium",
                "Jus naturels de qualité",
                "Transformation agroalimentaire",
                "Produits sous marque propre",
                "Qualité contrôlée",
                "Emballage professionnel",
            ],
            cta: "Découvrir nos produits",
        },
    ];

    const businessOpportunities = [
        {
            icon: <Building2 className="h-8 w-8 text-orange-600" />,
            title: "Partenariats Construction",
            description:
                "Nous recherchons des partenaires pour développer nos services de construction et étendre notre réseau de main-d'œuvre qualifiée.",
            benefits: [
                "Main-d'œuvre qualifiée disponible",
                "Services de construction complets",
                "Partenariats à long terme",
                "Qualité garantie",
            ],
        },
        {
            icon: <Package className="h-8 w-8 text-green-600" />,
            title: "Distribution Produits",
            description:
                "Nous cherchons des distributeurs pour nos produits agroalimentaires transformés, notamment le beurre d'arachide et les jus naturels.",
            requirements: [
                "Réseau de distribution établi",
                "Connaissance du secteur agroalimentaire",
                "Capacité de stockage",
                "Expérience en vente B2B",
            ],
        },
    ];

    return (
        <section
            id="services"
            className="section-padding bg-gradient-to-br from-green-50 to-white"
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-3 bg-orange-100 px-4 py-2 rounded-full border border-orange-200 mb-6">
                        <Building2 className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-medium text-orange-700">
                            Nos Divisions
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black-900 mb-6 text-center">
                        GERHO{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                            SERVICE & PRODUITS
                        </span>
                    </h2>
                    <p className="text-xl text-black-600 max-w-3xl mx-auto text-center leading-relaxed">
                        Découvrez nos deux divisions principales : GERHO SERVICE
                        pour la main-d'œuvre qualifiée en construction et GERHO
                        PRODUITS pour la transformation agroalimentaire.
                    </p>
                </div>

                {/* Main Services */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg border border-green-200 p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-center mb-8">
                                <div
                                    className={`p-4 rounded-2xl mr-6 ${
                                        index === 0
                                            ? "bg-gradient-to-br from-orange-100 to-orange-200"
                                            : "bg-gradient-to-br from-green-100 to-green-200"
                                    }`}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-black-800 font-display">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-black-600 mb-8 leading-relaxed text-lg">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center text-black-700"
                                    >
                                        <div
                                            className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 ${
                                                index === 0
                                                    ? "bg-orange-500"
                                                    : "bg-green-500"
                                            }`}
                                        ></div>
                                        <span className="font-medium">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 ${
                                    index === 0
                                        ? "bg-orange-100 hover:bg-orange-200 text-orange-800 border-orange-200 hover:border-orange-300"
                                        : "bg-green-100 hover:bg-green-200 text-green-800 border-green-200 hover:border-green-300"
                                } shadow-lg`}
                            >
                                {service.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Business Opportunities */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 bg-green-100 px-4 py-2 rounded-full border border-green-200 mb-6">
                        <Globe className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700">
                            Opportunités de Partenariat
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black-900 mb-4 font-display">
                        Développons Ensemble
                    </h3>
                    <p className="text-lg text-black-600 max-w-2xl mx-auto">
                        Nous recherchons activement des partenaires pour
                        développer nos services et produits
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {businessOpportunities.map((opportunity, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg border border-green-200 p-8 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div
                                    className={`p-3 rounded-xl mr-4 ${
                                        index === 0
                                            ? "bg-gradient-to-br from-orange-100 to-orange-200"
                                            : "bg-gradient-to-br from-green-100 to-green-200"
                                    }`}
                                >
                                    {opportunity.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-black-800 font-display">
                                    {opportunity.title}
                                </h4>
                            </div>
                            <p className="text-black-600 mb-6 text-lg leading-relaxed">
                                {opportunity.description}
                            </p>

                            <div className="space-y-3">
                                {opportunity.benefits ? (
                                    <div>
                                        <h5
                                            className={`font-semibold mb-3 flex items-center ${
                                                index === 0
                                                    ? "text-orange-700"
                                                    : "text-green-700"
                                            }`}
                                        >
                                            <Award
                                                className={`h-5 w-5 mr-2 ${
                                                    index === 0
                                                        ? "text-orange-500"
                                                        : "text-green-500"
                                                }`}
                                            />
                                            Avantages :
                                        </h5>
                                        <ul className="space-y-2">
                                            {opportunity.benefits.map(
                                                (benefit, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-black-600 flex items-center"
                                                    >
                                                        <Target
                                                            className={`h-4 w-4 mr-3 flex-shrink-0 ${
                                                                index === 0
                                                                    ? "text-orange-500"
                                                                    : "text-green-500"
                                                            }`}
                                                        />
                                                        {benefit}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                        <h5
                                            className={`font-semibold mb-3 flex items-center ${
                                                index === 0
                                                    ? "text-orange-700"
                                                    : "text-green-700"
                                            }`}
                                        >
                                            <Award
                                                className={`h-5 w-5 mr-2 ${
                                                    index === 0
                                                        ? "text-orange-500"
                                                        : "text-green-500"
                                                }`}
                                            />
                                            Exigences :
                                        </h5>
                                        <ul className="space-y-2">
                                            {opportunity.requirements.map(
                                                (req, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-black-600 flex items-center"
                                                    >
                                                        <Target
                                                            className={`h-4 w-4 mr-3 flex-shrink-0 ${
                                                                index === 0
                                                                    ? "text-orange-500"
                                                                    : "text-green-500"
                                                            }`}
                                                        />
                                                        {req}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8">
                                <button
                                    className={`w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                        index === 0
                                            ? "bg-orange-600 hover:bg-orange-700 text-white"
                                            : "bg-green-600 hover:bg-green-700 text-white"
                                    }`}
                                >
                                    {opportunity.title.includes("Construction")
                                        ? "Devenir Partenaire"
                                        : "Rejoindre la Distribution"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
