import {
    Building2,
    Users,
    TrendingUp,
    Globe,
    Leaf,
    Award,
    Wrench,
    Package,
} from "lucide-react";

export default function Hero() {
    return (
        <section
            id="accueil"
            className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 section-padding overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-orange-100/20"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-3 bg-green-100 px-4 py-2 rounded-full border border-green-200">
                                <Building2 className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-green-700">
                                    GERHO ENTREPRISE
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black-900 leading-tight">
                                Excellence en{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                                    Service & Produits
                                </span>
                            </h1>

                            <p className="text-xl text-black-600 leading-relaxed max-w-2xl">
                                GERHO ENTREPRISE est une société basée à Goma,
                                active dans deux grands domaines :
                                <strong> GERHO SERVICE</strong> - Main-d'œuvre
                                qualifiée dans le secteur de la construction, et{" "}
                                <strong>GERHO PRODUITS</strong> - Transformation
                                agroalimentaire.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center group">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                                        <Wrench className="h-8 w-8 text-orange-600" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-black-800 font-display">
                                    50+
                                </div>
                                <div className="text-sm text-black-600 font-medium">
                                    Ouvriers Qualifiés
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                                        <Package className="h-8 w-8 text-green-600" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-black-800 font-display">
                                    2
                                </div>
                                <div className="text-sm text-black-600 font-medium">
                                    Divisions
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                                        <Users className="h-8 w-8 text-green-600" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-black-800 font-display">
                                    100+
                                </div>
                                <div className="text-sm text-black-600 font-medium">
                                    Clients Satisfaits
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                                        <TrendingUp className="h-8 w-8 text-orange-600" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-black-800 font-display">
                                    5+
                                </div>
                                <div className="text-sm text-black-600 font-medium">
                                    Années d'Expérience
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Nos Services
                            </button>
                            <button className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-green-300 hover:border-green-400">
                                Nos Produits
                            </button>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-10 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-60"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-green-500 rounded-full mb-6 shadow-lg">
                                        <Building2 className="h-12 w-12 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-black-800 mb-4 font-display">
                                        Excellence & Qualité
                                    </h3>
                                    <p className="text-black-600 leading-relaxed mb-6">
                                        GERHO ENTREPRISE s'engage à fournir des
                                        services de construction de qualité et
                                        des produits agroalimentaires
                                        transformés selon les plus hauts
                                        standards pour garantir votre
                                        satisfaction.
                                    </p>

                                    <div className="flex items-center justify-center space-x-4 text-sm text-black-500">
                                        <div className="flex items-center space-x-2">
                                            <Award className="h-4 w-4 text-orange-500" />
                                            <span>Qualifié</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Leaf className="h-4 w-4 text-green-500" />
                                            <span>Durable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-orange-200 to-green-200 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-200 to-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
