import { Box, Calendar } from "lucide-react";
import trackeasyImage from "../assets/projects/trackeasy.png";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          Nossos Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Projeto 1: Rastreador de Pacotes */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video">
              <img
                src={trackeasyImage}
                alt="Rastreamento de Pacotes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Box className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl md:text-2xl font-bold">
                  Trackeasy - Rastreador Universal de Pacotes
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Uma solução completa para rastreamento de pacotes que integra
                todas as principais transportadoras em uma única plataforma.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Rastreamento em tempo real</li>
                <li>✓ Suporte a múltiplas transportadoras</li>
                <li>✓ Notificações automáticas</li>
                <li>✓ Interface intuitiva</li>
              </ul>
              <div className="mt-6">
                <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                  Em desenvolvimento
                </span>
              </div>
            </div>
          </div>

          {/* Projeto 2: Agendador de Barbearia */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
                alt="Agendador de Barbearia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl md:text-2xl font-bold">
                  Agendador de Barbearia
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sistema completo de agendamento para barbearias, otimizando a
                gestão de horários e melhorando a experiência dos clientes.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Agendamento online 24/7</li>
                <li>✓ Gestão de profissionais</li>
                <li>✓ Lembretes automáticos</li>
                <li>✓ Histórico de atendimentos</li>
              </ul>
              <div className="mt-6">
                <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                  Em desenvolvimento
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
