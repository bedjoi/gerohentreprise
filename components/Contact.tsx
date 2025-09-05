"use client";

import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Coffee,
    MessageCircle,
    Clock,
    Package,
    Wrench,
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "client",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici vous pouvez ajouter la logique d'envoi du formulaire
        console.log("Form submitted:", formData);
        alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6 text-orange-600" />,
            title: "Email",
            content: "gerhoentreprise@gmail.com",
            link: "mailto:gerhoentreprise@gmail.com",
        },
        {
            icon: <Phone className="w-6 h-6 text-orange-600" />,
            title: "Téléphone",
            content: "+243 990 669 433",
            link: "tel:+243990669433",
        },
        {
            icon: <MapPin className="w-6 h-6 text-orange-600" />,
            title: "Adresse",
            content: "Quartier Keshero, Avenue Topographe, N°27 – Goma, RDC",
            link: "#",
        },
    ];

    return (
        <section
            id="contact"
            className="section-padding bg-gradient-to-br from-orange-50 via-white to-green-50"
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-6 space-x-3 bg-orange-100 border border-orange-200 rounded-full">
                        <MessageCircle className="w-5 h-5 text-orange-600" />
                        <span className="text-sm font-medium text-orange-700">
                            Contact
                        </span>
                    </div>
                    <h2 className="mb-6 text-4xl font-bold text-center md:text-5xl text-black-900">
                        Parlons de{" "}
                        <span className="text-transparent bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text">
                            Votre Projet
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl leading-relaxed text-center text-black-600">
                        Intéressé par nos services de construction ou nos
                        produits agroalimentaires ? N'hésitez pas à nous
                        contacter. Notre équipe est là pour répondre à toutes
                        vos questions.
                    </p>
                </div>

                <div className="grid gap-20 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="mb-8 text-2xl font-bold text-black-800 font-display">
                                Informations de Contact
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="p-3 transition-transform bg-gradient-to-br from-orange-100 to-green-100 rounded-xl group-hover:scale-110">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-black-800 font-display">
                                                {info.title}
                                            </h4>
                                            <a
                                                href={info.link}
                                                className="transition-colors text-black-600 hover:text-orange-600"
                                            >
                                                {info.content}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="p-8 transition-all duration-300 bg-white border border-green-200 shadow-lg rounded-2xl hover:shadow-xl">
                            <div className="flex items-center mb-6 space-x-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-green-100">
                                    <Clock className="w-5 h-5 text-orange-600" />
                                </div>
                                <h4 className="text-lg font-bold text-black-800 font-display">
                                    Horaires d'Ouverture
                                </h4>
                            </div>
                            <div className="space-y-3 text-black-600">
                                <div className="flex items-center justify-between py-2 border-b border-green-200">
                                    <span className="font-medium">
                                        Lundi - Vendredi
                                    </span>
                                    <span>8h00 - 18h00</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-green-200">
                                    <span className="font-medium">Samedi</span>
                                    <span>9h00 - 16h00</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="font-medium">
                                        Dimanche
                                    </span>
                                    <span className="text-black-400">
                                        Fermé
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-black-800 font-display">
                                Actions Rapides
                            </h4>
                            <div className="space-y-4">
                                <button className="flex items-center justify-center w-full px-8 py-4 space-x-3 font-semibold text-white transition-all duration-300 transform bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 hover:scale-105">
                                    <Wrench className="w-5 h-5" />
                                    <span>Demander nos Services</span>
                                </button>
                                <button className="flex items-center justify-center w-full px-8 py-4 space-x-3 font-semibold text-green-700 transition-all duration-300 bg-transparent border-2 border-green-300 rounded-lg hover:bg-green-50 hover:border-green-400">
                                    <Package className="w-5 h-5" />
                                    <span>Découvrir nos Produits</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 transition-all duration-300 bg-white border border-green-200 shadow-lg rounded-2xl hover:shadow-xl">
                        <h3 className="mb-8 text-2xl font-bold text-black-800 font-display">
                            Envoyez-nous un Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-black-800"
                                    >
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Votre nom complet"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-black-800"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block mb-2 text-sm font-medium text-black-800"
                                    >
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Nom de votre entreprise"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-medium text-black-800"
                                    >
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Votre numéro de téléphone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="interest"
                                    className="block mb-2 text-sm font-medium text-black-800"
                                >
                                    Intérêt *
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                >
                                    <option value="service">
                                        Services de Construction
                                    </option>
                                    <option value="produits">
                                        Produits Agroalimentaires
                                    </option>
                                    <option value="partnership">
                                        Partenariat
                                    </option>
                                    <option value="other">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-black-800"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 transition-all bg-white border border-green-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="Décrivez votre projet ou vos besoins..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center w-full px-8 py-4 space-x-3 font-semibold text-white transition-all duration-300 transform bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 hover:scale-105"
                            >
                                <Send className="w-5 h-5" />
                                <span>Envoyer le Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
