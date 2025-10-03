"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";

const presentationDetails = [
    {
        title: "Cybersecurity Awareness in Schools",
        date: "Jan 2025",
        audience: "200 students",
        description: "Introduced basic cyber safety tips and secure online habits.",
    },
    {
        title: "Safe Digital Practices Workshop",
        date: "Feb 2025",
        audience: "150 participants",
        description: "Hands-on exercises on phishing, passwords, and secure browsing.",
    },
    {
        title: "Community Digital Safety Seminar",
        date: "Mar 2025",
        audience: "300 participants",
        description: "Promoted awareness about social media security and scams.",
    },
];

const presentationImages = [
    "/images/pic.jpg",
    "/images/pic.jpg",
    "/images/pic.jpg",
];

const mediaImages = [
    "/images/pic.jpg",
    "/images/pic.jpg",
    "/images/pic.jpg",
    "/images/pic.jpg",
];

const letterImages = [
    "/images/pic.jpg",
    "/images/pic.jpg",
];

export default function CyberWarriorPage() {
    return (
        <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950">
            <Navbar />
            <section className="text-center py-16 px-4 bg-neutral-50 dark:bg-neutral-900 mt-[6dvh]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
                    🛡️ Cyber Warrior – Quick Heal Foundation
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto dark:text-neutral-300">
                    Promoting cybersecurity awareness and digital safety across communities. Reached
                    2,400+ people through presentations and impact activities.
                </p>
            </section>

            {/* Presentation Details Section */}
            <section className="py-12 px-4 max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 text-center">
                    Presentation Details
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
                    {presentationDetails.map((p, idx) => (
                        <div key={idx} className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-1 dark:text-neutral-50">{p.title}</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                {p.date} | Audience: {p.audience}
                            </p>
                            <p className="dark:text-neutral-300">{p.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Presentation Images Section */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 text-center">
                    Presentations Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {presentationImages.map((src, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <Image
                                onContextMenu={() => {
                                    return false;
                                }}
                                src={src}
                                alt={`Presentation ${idx + 1}`}
                                width={500}
                                height={350}
                                className="object-cover w-full h-64"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Media / Newspaper Section */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 text-center">Media Coverage</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {mediaImages.map((src, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <Image
                                src={src}
                                alt={`Media ${idx + 1}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-64"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Letter of Appreciation / Invitation Section */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 text-center">
                    Letters & Invitations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {letterImages.map((src, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <Image
                                src={src}
                                alt={`Letter ${idx + 1}`}
                                width={500}
                                height={350}
                                className="object-cover w-full h-64"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
