import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-blue-600" />
            <span className="font-bold">Solutech</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Solutech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
