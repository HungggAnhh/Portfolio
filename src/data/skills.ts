export type SkillCategory = {
    title: string;
    items: string[];
};


export const SKILLS: SkillCategory[] = [
    { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express", "MySQL"] },
    { title: "Tools", items: ["Git", "Docker", "Figma"] },
];