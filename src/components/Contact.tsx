export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Vamos conversar?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Estamos prontos para transformar suas ideias em realidade.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5519988496675"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Entre em contato
        </a>
      </div>
    </section>
  );
}
