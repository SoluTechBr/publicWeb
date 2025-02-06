import {
  Code,
  Zap,
  Package,
  Globe,
  Cloud,
  Shield,
  Smartphone,
  Gauge,
  Database,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Mapeamento de ícones para cada serviço
const serviceIcons = {
  customDev: Code,
  webApps: Globe,
  mobileApps: Smartphone,
  cloud: Cloud,
  integration: Database,
  security: Shield,
  performance: Gauge,
  innovation: Zap,
  automation: Package,
} as const;

// Tipo para as chaves dos serviços
type ServiceKey = keyof typeof serviceIcons;

// Componente para o card de serviço
function ServiceCard({
  serviceKey,
  isHighlighted = false,
}: {
  serviceKey: ServiceKey;
  isHighlighted?: boolean;
}) {
  const { t } = useTranslation();
  const Icon = serviceIcons[serviceKey];

  if (isHighlighted) {
    return (
      <div className="group relative bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-2xl shadow-lg text-white transform hover:-translate-y-1 transition-all duration-300">
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-3">
          {t(`services.items.${serviceKey}.title`)}
        </h3>
        <p className="text-gray-100">
          {t(`services.items.${serviceKey}.description`)}
        </p>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-blue-500" />
      </div>
    );
  }

  return (
    <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold mb-3">
        {t(`services.items.${serviceKey}.title`)}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {t(`services.items.${serviceKey}.description`)}
      </p>
    </div>
  );
}

export function Services() {
  const { t } = useTranslation();

  // Definição da estrutura das colunas
  const columns = [
    ["customDev", "webApps", "mobileApps"],
    ["cloud", "integration", "security"],
    ["performance", "innovation", "automation"],
  ] as const;

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((columnServices, columnIndex) => (
            <div
              key={columnIndex}
              className="md:col-span-1 flex flex-col space-y-8"
            >
              {columnServices.map((serviceKey, serviceIndex) => (
                <div
                  key={serviceKey}
                  className="flex-1 flex flex-col min-h-[200px]"
                >
                  <ServiceCard
                    serviceKey={serviceKey}
                    isHighlighted={columnIndex === 1 && serviceIndex === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
