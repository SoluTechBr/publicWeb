import { useTranslation } from "react-i18next";

export function Clients() {
  const { t } = useTranslation();

  return (
    <section id="clients" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          {t("clients.title")}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t("clients.description")}
          </p>
          <div className="p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              {t("clients.cta.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("clients.cta.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
