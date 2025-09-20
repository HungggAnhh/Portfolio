export type Project = {
    id: string;
    name: string;
    description: string;
    tech: string[];
    image: string; // path under /public or /src/assets
    repo?: string;
    demo?: string;
};


export const PROJECTS: Project[] = [
    {
        id: "askthemall",
        name: "AskThemAll – Multi‑Model Q&A",
        description: "Caculator-app.",
        tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
        image: "/projects/askthemall.png",
        repo: "https://github.com/HungggAnhh/Caculator",
        demo: "https://askthemall.example.com"
    },
    {
        id: "movie-booking",
        name: "Movie Booking",
        description: "Website đặt vé phim: chọn ghế, thanh toán online, quản trị phim/suất chiếu.",
        tech: ["React", "Node.js", "MySQL"],
        image: "/projects/movie.png",
        repo: "https://github.com/yourname/movie-booking",
        demo: "https://movie-booking.example.com"
    },
    {
        id: "smart-parking",
        name: "Smart Parking (IoT)",
        description: "Hệ thống bãi xe thông minh tích hợp cảm biến & dashboard web.",
        tech: ["Arduino", "Express", "React"],
        image: "/projects/parking.png",
        repo: "https://github.com/yourname/smart-parking"
    }
];