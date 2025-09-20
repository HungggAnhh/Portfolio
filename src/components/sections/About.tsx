import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function About() {
    return (
        <section className="section-spacing relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 mesh-gradient opacity-30"></div>
            
            <div className="container-default relative z-10">
                <div className="text-center mb-16 fade-in-up">
                    <SectionTitle 
                        title="About Me" 
                        subtitle="Discover my journey in technology and passion for creating amazing digital experiences" 
                    />
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Main intro card */}
                    <Card className="p-8 md:p-12 glass-effect floating">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Avatar placeholder with gradient border */}
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-30 blur-lg animate-pulse"></div>
                            </div>

                            {/* Main content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    <span className="gradient-text">Hello! I'm Hung Anh</span> 
                                    <span className="ml-2 animate-bounce inline-block">👋</span>
                                </h3>
                                
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                                    I'm an Information Technology student passionate about building 
                                    <span className="font-semibold text-purple-600 dark:text-purple-400"> modern</span>, 
                                    <span className="font-semibold text-pink-600 dark:text-pink-400"> user-friendly</span>, and 
                                    <span className="font-semibold text-blue-600 dark:text-blue-400"> efficient</span> web applications.
                                </p>

                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                                        Student
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                                        Developer
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm rounded-full">
                                        UI/UX Enthusiast
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Skills grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Technical Focus */}
                        <Card className="p-6 interactive-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="text-xl font-bold gradient-text">Technical Focus</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                My main focus is <strong className="text-blue-600 dark:text-blue-400">React/TypeScript</strong> for 
                                the frontend and <strong className="text-green-600 dark:text-green-400">Node.js</strong> for 
                                the backend, creating seamless full-stack experiences.
                            </p>
                        </Card>

                        {/* Design Philosophy */}
                        <Card className="p-6 interactive-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="text-xl font-bold gradient-text">Design Philosophy</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                I care deeply about <strong className="text-purple-600 dark:text-purple-400">UI/UX</strong> and 
                                <strong className="text-pink-600 dark:text-pink-400"> performance optimization</strong> to 
                                deliver the best user experience possible.
                            </p>
                        </Card>
                    </div>

                    {/* Goals card */}
                    <Card className="p-8 text-center glass-effect">
                        <div className="max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mb-6">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 gradient-text">My Goal</h4>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                My goal is to grow into a <strong className="gradient-text">fullstack developer</strong> capable 
                                of creating impactful digital products that solve real-world problems and make people's lives better.
                            </p>
                        </div>
                    </Card>

                    {/* Fun fact or call-to-action */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                            <span className="text-lg">💡</span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">
                                Always learning, always building, always improving
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}