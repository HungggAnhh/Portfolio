import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            
            setScrolled(scrollTop > 10);
            setScrollProgress(progress);
        };
        
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
                scrolled 
                    ? "bg-white/85 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-900/10" 
                    : "bg-transparent"
            }`}>
                {/* Scroll Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300" 
                     style={{ width: `${scrollProgress}%` }}>
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/30"></div>
                </div>
                
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
                        scrolled ? "h-16" : "h-20"
                    }`}>
                        {/* Logo */}
                        <a 
                            href="#home" 
                            onClick={() => handleLinkClick("#home")}
                            className="relative group"
                        >
                            <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${
                                scrolled ? "text-xl" : "text-2xl"
                            }`}>
                                HùngAnh
                            </span>
                            <span className={`font-bold text-slate-700 dark:text-slate-300 transition-all duration-500 ${
                                scrolled ? "text-xl" : "text-2xl"
                            }`}>.dev</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2">
                            {LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`relative rounded-lg font-medium transition-all duration-300 ${
                                        scrolled ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
                                    } ${
                                        activeLink === link.href
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                                >
                                    {link.label}
                                    {activeLink === link.href && (
                                        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg -z-10"></div>
                                    )}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:w-3/4"></div>
                                </a>
                            ))}
                        </div>

                        {/* CTA Button & Mobile Menu Button */}
                        <div className="flex items-center space-x-4">
                            <a 
                                href="#contact"
                                onClick={() => handleLinkClick("#contact")}
                                className={`relative font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group ${
                                    scrolled ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
                                }`}
                            >
                                <span className="relative z-10">Hire me</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-x-0 z-40 transform transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`} 
            style={{ top: scrolled ? '64px' : '80px' }}>
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-2">
                            {LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        activeLink === link.href
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    } ${scrolled ? "text-sm" : "text-base"}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
}