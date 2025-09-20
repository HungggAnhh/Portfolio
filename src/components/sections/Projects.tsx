import { useState, useRef, useEffect } from 'react';
import { Eye, Github, ExternalLink, Code, Calendar } from 'lucide-react';
import img1 from "@/assets/image1.png";
import img2 from  "@/assets/image2.png"
import img3 from  "@/assets/image3.png"
// Mock data - replace with your actual PROJECTS import
const PROJECTS = [
    {
        id: 1,
        name: "calculator-app",
        description: "Calculator app built with React (frontend) and Tailwind CSS for a clean, intuitive interface. Supports basic math operations like addition, subtraction, multiplication, and division, along with keystroke handling, calculation history, and a minimalist, easy-to-use interface.",
        image: img1,
        tech: ["React", "Node.js","Tailwind CSS"],
        repo: "https://github.com/HungggAnhh/Caculator",
        demo: null,
        status: "Completed",
        year: "2025"
    },
    {
        id: 2,
        name: "Hệ Thống Quản Lý Phòng Trọ",
        description: "Room posting & search portal for renters: view room details, filter by price/area, save favorites, send contacts, support user login (Clerk) and manage room photos.",
        image: img2,
        tech: ["React", "Clerk", "Axios", "Spring Boot", "REST API", "MySQL", "Cloud Storage"],
        repo: "https://github.com/HungggAnhh/QLphongtro",
        demo: null,
        status: "Completed",
        year: "2025"
    },
    {
        id: 3,
        name: "Weather Dashboard",
        description: "The system supports 4 user groups: Guests, Members, Staff and Admin with functions from registration, purchasing, account management to product management, orders and statistics.",
        image: img3,
        tech: ["PHP", "Laravel", "Blade", "Bootstrap", "jQuery", "MySQL", "MySQL Workbench", "MoMo Payment"],
        repo: "https://github.com/HungggAnhh/Flatshop",
        demo: null,
        status: "Completed",
        year: "2024"
    }
];

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16 space-y-4">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <div 
            className="group relative overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-white/40 dark:border-slate-700/40 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                <img 
                    src={project.image} 
                    alt={project.name}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />
                
                {/* Overlay with actions */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    {project.repo && (
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 cursor-pointer">
                        <Eye size={20} />
                    </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                        project.status === 'Completed' 
                            ? 'bg-green-500/90 text-white border-green-400/30' 
                            : 'bg-yellow-500/90 text-white border-yellow-400/30'
                    }`}>
                        {project.status}
                    </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-sm border border-white/20 flex items-center gap-1">
                        <Calendar size={12} />
                        {project.year}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                        <span 
                            key={tech}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-700 dark:text-slate-300 border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200"
                            style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
                        >
                            <Code size={10} />
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    {project.repo && (
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 btn btn-outline text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 btn btn-primary text-sm font-semibold flex items-center justify-center gap-2"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity duration-300 pointer-events-none ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`}></div>
        </div>
    );
};

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const loadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 3, PROJECTS.length));
    };

    return (
        <div className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container-default relative z-10">
                <SectionTitle 
                    title="Projects" 
                    subtitle="Một vài dự án tiêu biểu tôi đã thực hiện" 
                />
                
                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {PROJECTS.slice(0, visibleProjects).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleProjects < PROJECTS.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={loadMore}
                            className="btn btn-outline px-8 py-3 font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                        >
                            Xem thêm dự án
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20 dark:border-slate-700/30">
                    {[
                        { number: PROJECTS.length, label: "Dự án hoàn thành" },
                        { number: "5+", label: "Công nghệ sử dụng" },
                        { number: "2", label: "Năm kinh nghiệm" },
                        { number: "95%", label: "Tỷ lệ thành công" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center space-y-2 group">
                            <div className="text-3xl md:text-4xl font-black gradient-text group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}