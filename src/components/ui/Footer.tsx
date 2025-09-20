export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200/60 dark:border-slate-800">
            <div className="container-default py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <p className="text-sm opacity-80">© {new Date().getFullYear()} HùngAnh. All rights reserved.</p>
                <div className="flex items-center gap-4 text-sm">
                    <a className="hover:text-primary-600" href="https://github.com/yourname" target="_blank">GitHub</a>
                    <a className="hover:text-primary-600" href="https://www.linkedin.com/in/yourname" target="_blank">LinkedIn</a>
                    <a className="hover:text-primary-600" href="mailto:you@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
}