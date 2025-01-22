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

export function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Oferecemos soluções tecnológicas completas para transformar sua
            empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna Esquerda */}
          <div className="md:col-span-1 space-y-8">
            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Desenvolvimento Personalizado
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Valorizamos totalmente os ideais do cliente, transformando suas
                necessidades em soluções eficientes e escaláveis.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Aplicações Web</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desenvolvimento de sistemas web modernos, responsivos e
                otimizados para uma experiência excepcional.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Aplicativos Mobile</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Criação de aplicativos nativos e híbridos para iOS e Android,
                com foco em performance e usabilidade.
              </p>
            </div>
          </div>

          {/* Coluna Central - Destaque */}
          <div className="md:col-span-1 space-y-8">
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-2xl shadow-lg text-white transform hover:-translate-y-1 transition-all duration-300">
              <Cloud className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Soluções em Nuvem</h3>
              <p className="text-gray-100">
                Arquitetura e implementação de soluções escaláveis utilizando as
                melhores práticas de cloud computing.
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-blue-500" />
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Integração de Sistemas</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Conectamos diferentes sistemas e APIs para criar soluções
                completas e eficientes para seu negócio.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Segurança Digital</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementação de práticas robustas de segurança para proteger
                seus dados e aplicações.
              </p>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="md:col-span-1 space-y-8">
            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Gauge className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Otimização de Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Análise e melhorias de performance para sistemas existentes,
                garantindo máxima eficiência.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Inovação Tecnológica</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Esteja sempre à frente com nossas soluções inovadoras que
                acompanham as tendências do mercado.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Package className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Automação de Processos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simplificamos seus processos com soluções inteligentes para
                focar no crescimento do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
