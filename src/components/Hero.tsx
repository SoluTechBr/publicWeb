import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
