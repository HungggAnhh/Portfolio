import { useState, useEffect } from 'react';
import avatar from "@/assets/avatar1.jpg";
import CV from "@/assets/CV1.pdf";
export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 mesh-gradient opacity-50"></div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
            
            <div className="container-default relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-white/40 dark:border-slate-700/40">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse mr-3 shadow-lg"></div>
                            <span className="text-sm font-bold tracking-wider uppercase text-slate-800 dark:text-slate-100">
                                IT Student
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                                <span className="block text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] dark:text-white">
                                    Võ Mai 
                                </span>
                                <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] dark:text-white">
                                    Hùng Anh
                                </span>
                            </h1>
                            
                            {/* Subtitle with high contrast */}
                            <div className="space-y-3">
                                <div className="inline-block bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-2xl border border-white/30 dark:border-slate-700/30">
                                    <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                                        Aspiring Fullstack Developer
                                    </p>
                                </div>
                                
                                <div className="inline-block bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/30 dark:border-slate-700/30">
                                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200">
                                        Building digital solutions with 
                                        <span className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg">
                                            React & Node.js
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                className="btn btn-primary group relative overflow-hidden" 
                                href={CV} 
                                download
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download CV
                                </span>
                            </a>
                            <a 
                                className="btn btn-outline group" 
                                href="#contact"
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Contact Me
                                </span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: '💼', label: 'LinkedIn', href: '#' },
                                { icon: '🐙', label: 'GitHub', href: '#' },
                                { icon: '📧', label: 'Email', href: '#' }
                            ].map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-14 h-14 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/40 dark:border-slate-700/40 flex items-center justify-center text-2xl hover:scale-110 transform transition-all duration-300 group hover:shadow-2xl"
                                    title={social.label}
                                >
                                    <span className="group-hover:scale-125 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Avatar Section */}
                    <div className={`justify-self-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                        <div className="relative">
                            {/* Animated rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-20 scale-110"></div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-spin-reverse opacity-15 scale-125"></div>
                            
                            {/* Avatar container */}
                            <div className="relative z-10 p-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                <div className="p-1 rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm">
                                    <img 
                                        src={avatar} 
                                        alt="Võ Mai Hùng Anh - Fullstack Developer" 
                                        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover transition-all duration-500 hover:scale-105 floating"
                                    />
                                </div>
                            </div>
                            
                            {/* Floating skill badges */}
                            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/40 dark:border-slate-700/40 text-sm font-bold text-slate-800 dark:text-slate-100 animate-bounce">
                                React
                            </div>
                            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/40 dark:border-slate-700/40 text-sm font-bold text-slate-800 dark:text-slate-100 animate-bounce delay-1000">
                                Node.js
                            </div>
                            <div className="absolute top-2 -left-8 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/40 dark:border-slate-700/40 text-sm font-bold text-slate-800 dark:text-slate-100 animate-bounce delay-500">
                                TypeScript
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/40 dark:border-slate-700/40">
                        <span className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Scroll to explore</span>
                    </div>
                    <div className="w-6 h-10 rounded-full border-2 border-white/80 dark:border-slate-300/80 flex justify-center bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm">
                        <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 12s linear infinite;
                }
            `}</style>
        </div>
    );
}