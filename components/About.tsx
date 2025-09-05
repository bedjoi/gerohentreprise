import {
    Award,
    Globe,
    Leaf,
    Users,
    Target,
    Building2,
    Star,
    Heart,
    Wrench,
    Package,
} from "lucide-react";

export default function About() {
    const values = [
        {
            icon: <Wrench className="h-8 w-8 text-orange-600" />,
            title: "Expertise Technique",
            description:
                "Notre équipe d'ouvriers qualifiés maîtrise toutes les techniques de construction modernes.",
        },
        {
            icon: <Award className="h-8 w-8 text-green-600" />,
            title: "Qualité Garantie",
            description:
                "Excellence dans chaque projet de construction et chaque produit transformé.",
        },
        {
            icon: <Users className="h-8 w-8 text-orange-600" />,
            title: "Service Client",
            description:
                "Développement de relations durables avec nos clients et partenaires commerciaux.",
        },
        {
            icon: <Package className="h-8 w-8 text-green-600" />,
            title: "Innovation Produits",
            description:
                "Transformation créative des produits agricoles en produits finis de qualité supérieure.",
        },
    ];

    const achievements = [
        {
            number: "5+",
            label: "Années d'expérience",
        },
        {
            number: "50+",
            label: "Ouvriers qualifiés",
        },
        {
            number: "2",
            label: "Divisions actives",
        },
        {
            number: "100+",
            label: "Clients satisfaits",
        },
    ];

    return (
        <section
            id="apropos"
            className="section-padding bg-gradient-to-br from-black-50 to-white"
        >
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-3 bg-orange-100 px-4 py-2 rounded-full border border-orange-200">
                                <Star className="h-5 w-5 text-orange-600" />
                                <span className="text-sm font-medium text-orange-700">
                                    Notre Histoire
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-black-900 font-display">
                                À Propos de{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                                    GERHO ENTREPRISE
                                </span>
                            </h2>
                            <p className="text-lg text-black-600 leading-relaxed">
                                GERHO ENTREPRISE est une société basée à Goma,
                                active dans deux grands domaines :
                                <strong> GERHO SERVICE</strong> - Main-d'œuvre
                                qualifiée dans le secteur de la construction, et{" "}
                                <strong>GERHO PRODUITS</strong> - Transformation
                                agroalimentaire.
                            </p>
                            <p className="text-lg text-black-600 leading-relaxed">
                                Nous nous distinguons par notre engagement
                                envers la qualité, l'expertise technique et
                                l'innovation. Notre équipe d'ouvriers qualifiés
                                et nos processus de transformation garantissent
                                des résultats exceptionnels qui répondent aux
                                plus hauts standards.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-black-800 font-display">
                                Nos Valeurs
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div
                                                className={`p-2 rounded-xl group-hover:scale-110 transition-transform ${
                                                    index % 2 === 0
                                                        ? "bg-gradient-to-br from-orange-100 to-orange-200"
                                                        : "bg-gradient-to-br from-green-100 to-green-200"
                                                }`}
                                            >
                                                {value.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-black-800 mb-2 font-display">
                                                {value.title}
                                            </h4>
                                            <p className="text-black-600 text-sm leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual & Stats */}
                    <div className="space-y-10">
                        {/* Main Visual */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-10 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-60"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-green-500 rounded-full mb-6 shadow-lg">
                                        <Building2 className="h-12 w-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black-800 mb-4 font-display">
                                        Notre Mission
                                    </h3>
                                    <p className="text-black-600 leading-relaxed mb-6">
                                        Devenir le partenaire de référence pour
                                        la fourniture de main-d'œuvre qualifiée
                                        en construction et la transformation de
                                        produits agroalimentaires de qualité
                                        supérieure à Goma et dans toute la RDC.
                                    </p>

                                    <div className="flex items-center justify-center space-x-4 text-sm text-black-500">
                                        <div className="flex items-center space-x-2">
                                            <Heart className="h-4 w-4 text-orange-500" />
                                            <span>Passion</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Star className="h-4 w-4 text-green-500" />
                                            <span>Excellence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="grid grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 text-center hover:scale-105 transition-transform hover:shadow-xl"
                                >
                                    <div
                                        className={`text-4xl font-bold mb-2 font-display ${
                                            index % 2 === 0
                                                ? "text-orange-600"
                                                : "text-green-600"
                                        }`}
                                    >
                                        {achievement.number}
                                    </div>
                                    <div className="text-sm text-black-600 font-medium">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-12 max-w-5xl mx-auto relative overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-green-100 rounded-full -translate-y-20 translate-x-20 opacity-40"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-100 to-orange-100 rounded-full translate-y-16 -translate-x-16 opacity-40"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-black-900 mb-6 font-display">
                                Prêt à Participer à Notre{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                                    Succès
                                </span>{" "}
                                ?
                            </h3>
                            <p className="text-xl text-black-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Que vous soyez un client intéressé par nos
                                services de construction ou nos produits
                                agroalimentaires, nous sommes là pour vous
                                accompagner dans la réalisation de vos projets.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Nos Services
                                </button>
                                <button className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-green-300 hover:border-green-400">
                                    Nos Produits
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
