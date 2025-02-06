import { Code } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Solutech</span>
          </div>
          <div className="flex items-center justify-between md:space-x-6">
            <nav className="flex space-x-4 md:space-x-6">
              <a
                href="#services"
                className="text-sm md:text-base hover:text-blue-600 transition-colors"
              >
                {t("header.services")}
              </a>
              <a
                href="#projects"
                className="text-sm md:text-base hover:text-blue-600 transition-colors"
              >
                {t("header.projects")}
              </a>
              <a
                href="#clients"
                className="text-sm md:text-base hover:text-blue-600 transition-colors"
              >
                {t("header.clients")}
              </a>
              <a
                href="#contact"
                className="text-sm md:text-base hover:text-blue-600 transition-colors"
              >
                {t("header.contact")}
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
