"use client";

import { useState } from "react";
import { Menu, X, Building2, Wrench, Leaf } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md shadow-lg border-green-200">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Building2 className="w-10 h-10 text-orange-600" />
                            <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-green-500"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-black-800 font-display">
                                GERHO ENTREPRISE
                            </span>
                            <span className="-mt-1 text-xs text-black-500">
                                Service & Produits
                            </span>
                        </div>
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="items-center hidden space-x-8 md:flex">
                        <a
                            href="#accueil"
                            className="font-medium transition-colors text-black-700 hover:text-orange-600"
                        >
                            Accueil
                        </a>
                        <a
                            href="#services"
                            className="font-medium transition-colors text-black-700 hover:text-orange-600"
                        >
                            Services
                        </a>
                        <a
                            href="#apropos"
                            className="font-medium transition-colors text-black-700 hover:text-orange-600"
                        >
                            À Propos
                        </a>
                        <a
                            href="#contact"
                            className="font-medium transition-colors text-black-700 hover:text-orange-600"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden md:block">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Nous Contacter
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 transition-colors rounded-lg md:hidden text-black-700 hover:text-orange-600 hover:bg-green-50"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t sm:px-3 bg-white/95 backdrop-blur-md border-green-200">
                            <a
                                href="#accueil"
                                className="block px-3 py-3 transition-colors rounded-lg text-black-700 hover:text-orange-600 hover:bg-green-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </a>
                            <a
                                href="#services"
                                className="block px-3 py-3 transition-colors rounded-lg text-black-700 hover:text-orange-600 hover:bg-green-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="#apropos"
                                className="block px-3 py-3 transition-colors rounded-lg text-black-700 hover:text-orange-600 hover:bg-green-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À Propos
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-3 transition-colors rounded-lg text-black-700 hover:text-orange-600 hover:bg-green-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <div className="pt-4">
                                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                    Nous Contacter
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
