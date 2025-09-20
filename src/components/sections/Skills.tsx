import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { SKILLS } from "@/data/skills";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Tools: "🛠️",
};

const skillLevels: Record<string, "expert" | "advanced" | "intermediate"> = {
  // Frontend
  HTML5: "expert",
  CSS3: "expert",
  "JavaScript (ES6+)": "advanced",
  TypeScript: "advanced",
  "React.js": "advanced",
  "Next.js": "intermediate",
  "Tailwind CSS": "advanced",

  // Backend
  "Node.js": "intermediate",
  MySQL: "intermediate",

  // Tools
  Git: "advanced",
  GitHub: "advanced",
};

const getLevelColor = (skill: string) => {
  const level = skillLevels[skill] ?? "intermediate";
  switch (level) {
    case "expert":
      return "from-green-400 to-emerald-500";
    case "advanced":
      return "from-blue-400 to-cyan-500";
    case "intermediate":
      return "from-purple-400 to-pink-500";
    default:
      return "from-gray-400 to-gray-500";
  }
};

const getLevelDots = (skill: string) => {
  const level = skillLevels[skill] ?? "intermediate";
  switch (level) {
    case "expert":
      return 5;
    case "advanced":
      return 4;
    case "intermediate":
      return 3;
    default:
      return 2;
  }
};

export default function Skills() {
  return (
    <section className="relative">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="container-default relative z-10">
        <div data-reveal>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Các công nghệ và kỹ năng mình sử dụng để xây dựng sản phẩm"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((category, index) => (
            <Card
              key={category.title}
              className="p-8 glass-effect interactive-hover"
              data-reveal
              style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    category.title === "Frontend"
                      ? "from-pink-500 to-purple-600"
                      : category.title === "Backend"
                      ? "from-blue-500 to-cyan-600"
                      : "from-orange-500 to-red-600"
                  } flex items-center justify-center mr-4 shadow-lg`}
                >
                  <span className="text-2xl">
                    {categoryIcons[category.title] ?? "💻"}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {category.items.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group"
                    data-reveal
                    style={{
                      "--delay": `${index * 100 + skillIndex * 50}ms`,
                    } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-purple-400 transition-colors">
                        {skill}
                      </span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < getLevelDots(skill)
                                ? `bg-gradient-to-r ${getLevelColor(
                                    skill
                                  )} shadow-sm`
                                : "bg-slate-300 dark:bg-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getLevelColor(
                          skill
                        )} rounded-full transition-all duration-700 origin-left group-hover:scale-x-105`}
                        style={{
                          width: `${(getLevelDots(skill) / 5) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-16 text-center"
          data-reveal
          style={{ "--delay": "150ms" } as React.CSSProperties}
        >
          <Card className="inline-block p-8 glass-effect">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Expert
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Advanced
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Intermediate
                </span>
              </div>
            </div>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
              Continuously learning and improving every day 🚀
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
