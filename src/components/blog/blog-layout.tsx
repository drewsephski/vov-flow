import { ReactNode } from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

interface BlogLayoutProps {
    children: ReactNode;
    className?: string;
}

export default function BlogLayout({ children, className = "" }: BlogLayoutProps) {
    return (
        <div className={`min-h-screen bg-background ${className}`}>
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}