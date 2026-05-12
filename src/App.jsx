import React, { useState, useEffect } from 'react';
// IMPORTANTE: Quitamos Github y Linkedin de aquí
import { Mail, ExternalLink, ChevronRight, Menu, X, Code, Terminal, Database, Award, Users, Trophy } from 'lucide-react';

// --- Iconos de Marcas (SVGs Nativos) ---
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.13-3.2s-1.14-.36-3.4 1.18a11.8 11.8 0 0 0-6 0C7.14 1.22 6 1.58 6 1.58a4.2 4.2 0 0 0-.13 3.2A4.6 4.6 0 0 0 4.5 8c0 5.6 3.36 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"></path>
    <path d="M9 20.1a5 5 0 0 1-5-1.5"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Animaciones CSS Personalizadas ---
const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes float-reverse {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(20px) rotate(-5deg); }
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float-reverse 7s ease-in-out infinite; }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    .glass-card {
      background: rgba(10, 15, 22, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  `}} />
);

// --- Fondo Animado ---
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
    <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#06090e] text-gray-300 font-sans selection:bg-emerald-500 selection:text-white relative">
      <CustomStyles />
      <AnimatedBackground />
      
      {/* Navegación */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-4 shadow-2xl shadow-emerald-900/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">Irvin<span className="text-emerald-500">.dev</span></a>
          
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">Perfil Dual</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experiencia</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contacto</a>
            <a href="https://www.linkedin.com/in/irvin-mart%C3%ADnez-d%C3%ADaz-16105a147/" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-[#06090e] transition-all duration-300">
              Mi LinkedIn
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Izquierdo: Textos y Botones */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 animate-float">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponible para proyectos freelance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Hola, soy Irvin. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                Front-End Developer.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Ingeniero en Ciencias de la Computación. Transformo lógica compleja en experiencias digitales fluidas, seguras y escalables.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 rounded-full bg-white text-[#06090e] font-bold hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Hablemos del proyecto
              </a>
              <a href="#" className="px-8 py-3 rounded-full glass-card text-white hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 flex items-center">
                Descargar CV
              </a>
            </div>
          </div>

          {/* Lado Derecho: Elementos Flotantes Abstractos */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            <div className="absolute w-64 h-64 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-md animate-blob">
               <Code className="w-16 h-16 text-emerald-400 opacity-50" />
            </div>

            <div className="absolute z-10 w-80 glass-card rounded-xl p-5 shadow-2xl animate-float-delayed border border-white/10" style={{ right: '0%', top: '20%' }}>
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-emerald-300">
                <p><span className="text-pink-400">const</span> developer = {'{'}</p>
                <p className="pl-4">name: <span className="text-yellow-300">'Irvin Martínez'</span>,</p>
                <p className="pl-4">skills: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Tailwind'</span>],</p>
                <p className="pl-4">problemSolver: <span className="text-cyan-400">true</span></p>
                <p>{'}'};</p>
              </div>
            </div>

            <div className="absolute top-[10%] left-[10%] p-4 glass-card rounded-2xl animate-float text-cyan-400">
              <Terminal className="w-8 h-8" />
            </div>
            <div className="absolute bottom-[20%] left-[0%] p-4 glass-card rounded-2xl animate-float-delayed text-blue-400">
              <Database className="w-8 h-8" />
            </div>
            <div className="absolute bottom-[10%] right-[15%] p-4 glass-card rounded-2xl animate-float text-emerald-400 flex items-center font-bold">
              <span className="text-xl">JS</span>
            </div>
          </div>

        </div>
      </section>

      {/* Sobre Mí: El Perfil Dual (Developer + Coach) */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Estrategia y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Liderazgo.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Mi perfil es inusual en la industria tecnológica. Combino la lógica estricta de la Ingeniería con la gestión humana y táctica del deporte competitivo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card Ingeniería */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-24 h-24 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ingeniería Web & TI</h3>
              <p className="text-cyan-400 font-medium mb-6">Ciencias de la Computación - BUAP</p>
              <p className="text-gray-400 mb-6">
                Especializado en Front-End, aplicaciones de escritorio multiplataforma (Electron) y gestión integral de infraestructura TI (Redes, Hosting, NAS, Correos).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">React & Angular</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">Electron JS</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">Redes & Infraestructura</span>
              </div>
            </div>

            {/* Card Entrenador / Certificaciones */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group border-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-24 h-24 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Entrenador & Liderazgo</h3>
              <p className="text-emerald-400 font-medium mb-6 relative z-10">Más de 13 años en Voleibol</p>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />
                  <div>
                    <p className="text-white font-medium">Entrenador Certificado FMVB</p>
                    <p className="text-sm text-gray-400">Nivel 1 y Nivel 2 vigentes (2025). Registro activo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />
                  <div>
                    <p className="text-white font-medium">Liderazgo de Equipos (Selectivo BUAP)</p>
                    <p className="text-sm text-gray-400">Entrenador principal con múltiples podios en Universiadas (1er, 2do y 3er lugar).</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                <p className="text-sm text-gray-400 italic">"Aplico el mismo nivel de análisis táctico para optimizar el rendimiento de un sitio web que para preparar un partido importante."</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experiencia (Línea de tiempo detallada) */}
      <section id="experience" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center">Trayectoria Profesional</h2>
          
          <div className="space-y-12 border-l border-white/10 ml-3 md:ml-6">
            
            {/* Force Ingeniería */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[8.5px] top-1 ring-4 ring-[#06090e] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              <p className="text-sm text-orange-400 font-mono mb-2">Actualidad</p>
              <h3 className="text-xl font-bold text-white">Consultor TI & Web Developer</h3>
              <p className="text-gray-400 font-medium mb-3">Force Ingeniería</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Renovación y desarrollo de la plataforma web corporativa. Gestión integral de TI: mantenimiento preventivo de equipos, optimización de procesos internos, y resolución de incidencias en redes, internet, cámaras de seguridad e impresoras.
              </p>
            </div>

            {/* SAI */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[8.5px] top-1 ring-4 ring-[#06090e] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <p className="text-sm text-purple-400 font-mono mb-2">Jul 2024 — Presente</p>
              <h3 className="text-xl font-bold text-white">Software Engineer & IT Specialist</h3>
              <p className="text-gray-400 font-medium mb-3">Sistemas Audiovisuales Internacionales (SAI), Puebla</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Desarrollo web y creación de aplicaciones de escritorio multiplataforma utilizando <strong className="text-gray-300">Electron JS</strong>. Diseño y administración de redes, brindando soporte técnico y soluciones integrales de infraestructura.
              </p>
            </div>

            {/* LK Asociados */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[8.5px] top-1 ring-4 ring-[#06090e] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <p className="text-sm text-emerald-400 font-mono mb-2">Ene 2022 — Presente</p>
              <h3 className="text-xl font-bold text-white">Web Developer & UX</h3>
              <p className="text-gray-400 font-medium mb-3">LK Asociados, Puebla</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Evolución interna desde Front End Jr. Desarrollo de sitios corporativos atractivos y funcionales. Optimización de la experiencia de usuario (UX) e introducción de procesos técnicos innovadores para mejorar la eficiencia del equipo.
              </p>
            </div>

            {/* Ingenia Marketing */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6px] top-1.5 ring-4 ring-[#06090e]"></div>
              <p className="text-sm text-cyan-400 font-mono mb-2">Jun 2023 — Dic 2024</p>
              <h3 className="text-xl font-bold text-gray-300">Front End Developer Jr.</h3>
              <p className="text-gray-400 font-medium mb-3">Ingenia Marketing Studio, Puebla</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Desarrollo y mantenimiento de sitios web con WordPress, HTML, CSS y JavaScript. Gestión estratégica de migraciones, administración de servidores Hosting y configuración de correos electrónicos empresariales.
              </p>
            </div>

            {/* Club Alpha */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6px] top-1.5 ring-4 ring-[#06090e]"></div>
              <p className="text-sm text-blue-400 font-mono mb-2">Oct 2023 — Dic 2023</p>
              <h3 className="text-xl font-bold text-gray-300">Frontend Developer Jr. (Prácticas)</h3>
              <p className="text-gray-400 font-medium mb-3">Club Alpha, Puebla</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Encargado de diseñar y programar la arquitectura Front-End de la sección de dietas (Interfaz Vitafit) dentro de la aplicación móvil y web utilizada en los diferentes clubes.
              </p>
            </div>

            {/* Dipro Johe */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6px] top-1.5 ring-4 ring-[#06090e]"></div>
              <p className="text-sm text-gray-500 font-mono mb-2">Oct 2020 — Mar 2021</p>
              <h3 className="text-xl font-bold text-gray-300">Web Developer</h3>
              <p className="text-gray-400 font-medium mb-3">Dipro Johe, Ecatepec</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Liderazgo en el diseño y desarrollo web integral. Gestión de identidad visual corporativa utilizando herramientas de diseño (Photoshop, Illustrator) para crear gráficos coherentes con la marca en medios digitales e impresos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="projects" className="py-24 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Proyectos <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Destacados.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <div className="group block relative rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-emerald-500/30 transition-all duration-500">
              <div className="h-64 bg-[#0a0f16] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <Code className="w-20 h-20 text-gray-700 group-hover:scale-110 group-hover:text-emerald-500/50 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Portal LK Asociados</h3>
                <p className="text-gray-400 mb-6 text-sm">Optimización de usabilidad y navegación estructural para portal corporativo, mejorando retención de usuarios.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium">HTML/CSS</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="group block relative rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
              <div className="h-64 bg-[#0a0f16] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <Database className="w-20 h-20 text-gray-700 group-hover:scale-110 group-hover:text-cyan-500/50 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Ecosistema Ingenia</h3>
                <p className="text-gray-400 mb-6 text-sm">Gestión integral de infraestructura web, migraciones de bases de datos y personalización de sitios en WordPress.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium">WordPress</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium">Hosting Mgmt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contacto */}
      <section id="contact" className="py-32 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-card p-12 md:p-20 rounded-[3rem] border border-white/10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">¿Listo para mejorar tu web?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">Soporte TI, desarrollo web o consultoría técnica. Escríbeme y agendamos una llamada para revisar tus necesidades.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:irvinmtzd@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-emerald-500 text-[#06090e] hover:bg-emerald-400 transition-colors duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <Mail className="w-5 h-5 mr-3" />
              irvinmtzd@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/irvin-mart%C3%ADnez-d%C3%ADaz-16105a147/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors duration-300 w-full sm:w-auto">
              <LinkedinIcon className="w-5 h-5 mr-3" />
              Conectar
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-600 relative z-10">
        <p>© {new Date().getFullYear()}Puebla, MX. Diseñado y desarrollado por Irvin Martínez Díaz.</p>
      </footer>

    </div>
  );
}