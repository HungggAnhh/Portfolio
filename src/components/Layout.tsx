import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
return (
<div className="min-h-dvh flex flex-col">
<Navbar />
<div className="flex-1">{children}</div>
<Footer />
</div>
);
}