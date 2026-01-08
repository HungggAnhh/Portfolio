import img1 from "@/assets/image1.webp";
import img2 from "@/assets/image2.webp";
import img3 from "@/assets/image3.webp";

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  demo?: string;
  status: "Completed" | "In Progress";
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: "calculator-app",
    name: "Calculator App",
    description:
      "Calculator app built with React (frontend) and Tailwind CSS for a clean, intuitive interface.",
    image: img1,
    tech: ["React", "Node.js", "Tailwind CSS"],
    repo: "https://github.com/HungggAnhh/Caculator",
    status: "Completed",
    year: "2025",
  },
  {
    id: "room-management",
    name: "Hệ Thống Quản Lý Phòng Trọ",
    description:
      "Room posting & search portal for renters: view room details, filter by price/area, save favorites.",
    image: img2,
    tech: ["React", "Clerk", "Axios", "Spring Boot", "MySQL"],
    repo: "https://github.com/HungggAnhh/QLphongtro",
    status: "Completed",
    year: "2025",
  },
  {
    id: "flatshop",
    name: "Weather Dashboard",
    description:
      "E-commerce system with user roles, product management, orders, statistics and MoMo payment.",
    image: img3,
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    repo: "https://github.com/HungggAnhh/Flatshop",
    status: "Completed",
    year: "2024",
  },
];
