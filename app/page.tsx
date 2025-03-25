'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCar,
  FaUserGraduate,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaMobileAlt,
  FaRoute,
  FaUniversity,
  FaMapPin,
  FaArrowRight,
  FaUsers
} from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pb-0">
        <motion.div
          className="absolute inset-0 hero-pattern"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 wave-pattern opacity-10" />

        {/* Carros animados menos intrusivos e mais sutis */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-0 w-6 h-6 text-blue-600 opacity-50"
            initial={{ x: -50 }}
            animate={{ x: "calc(100vw + 50px)" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          >
            <FaCar className="w-full h-full" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 left-0 w-7 h-7 text-blue-800 opacity-40"
            initial={{ x: -80 }}
            animate={{ x: "calc(100vw + 80px)" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
          >
            <FaCar className="w-full h-full" />
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-0 w-6 h-6 text-blue-700 opacity-50"
            initial={{ x: "calc(100vw + 50px)" }}
            animate={{ x: -50 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaCar className="w-full h-full transform rotate-180" />
          </motion.div>
        </div>

        {/* Container com largura máxima e padding consistente */}
        <div className="container mx-auto px-6 z-10 max-w-6xl">
          {/* Header fixo no topo */}
          <motion.header
            className="fixed top-0 left-0 w-full z-50 glass-effect py-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center mr-2">
                  <FaCar className="text-white text-lg" />
                </div>
                <span className="font-bold text-xl text-blue-900">UniGo</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="nav-link">Início</a>
                <a href="#beneficios" className="nav-link">Benefícios</a>
                <a href="#como-funciona" className="nav-link">Como Funciona</a>
                <a href="#" className="nav-link">Entrar</a>
                <a href="#" className="btn-primary py-2 px-4">Cadastrar</a>
              </nav>
              <button className="md:hidden text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <FaCar className="text-4xl text-white" />
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="gradient-text"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(37, 99, 235, 0)",
                    "0 0 20px rgba(37, 99, 235, 0.5)",
                    "0 0 0px rgba(37, 99, 235, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                UniGo
              </motion.span>
              <br />
              <span className="text-4xl md:text-6xl">Sua Carona Universitária</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Conecte-se com outros estudantes da UniFio e compartilhe viagens de forma segura e econômica
            </motion.p>

            {/* Card de busca de carona */}
            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center border border-slate-200 rounded-lg p-3 bg-slate-50">
                  <div className="text-blue-900 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="De onde você está saindo?"
                    className="flex-grow bg-transparent focus:outline-none text-slate-700"
                  />
                </div>
                <div className="flex items-center border border-slate-200 rounded-lg p-3 bg-slate-50">
                  <div className="text-blue-900 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Para onde você vai?"
                    className="flex-grow bg-transparent focus:outline-none text-slate-700"
                  />
                </div>
                <button className="btn-primary w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Encontrar Carona
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="btn-primary">Começar Agora</button>
              <button className="btn-secondary">Saiba Mais</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Por que escolher o UniGo?
          </motion.h2>
          <motion.p
            className="text-slate-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubra como podemos facilitar sua rotina acadêmica com caronas seguras e econômicas
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Economia Inteligente",
                description: "Divida os custos da viagem e economize dinheiro com outros universitários",
                icon: <HiCurrencyDollar className="text-2xl" />,
                color: "from-blue-900 to-blue-700"
              },
              {
                title: "Comunidade Acadêmica",
                description: "Conecte-se apenas com estudantes verificados da UniFio",
                icon: <FaUserGraduate className="text-2xl" />,
                color: "from-blue-800 to-blue-600"
              },
              {
                title: "Viagens Seguras",
                description: "Sistema de avaliação e verificação de usuários",
                icon: <FaShieldAlt className="text-2xl" />,
                color: "from-blue-700 to-blue-500"
              }
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="feature-card card-hover"
              >
                <div className="relative z-10">
                  <div className="feature-icon mb-6">
                    {beneficio.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{beneficio.title}</h3>
                  <p className="text-slate-600">{beneficio.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Como Funciona
          </motion.h2>
          <motion.p
            className="text-slate-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Em apenas 4 passos simples você já estará compartilhando caronas com outros alunos
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Cadastre-se",
                description: "Use seu email universitário da UniFio",
                icon: <FaMobileAlt className="text-xl" />
              },
              {
                step: "2",
                title: "Encontre sua Rota",
                description: "Selecione origem e destino",
                icon: <FaMapMarkedAlt className="text-xl" />
              },
              {
                step: "3",
                title: "Agende",
                description: "Escolha data e horário",
                icon: <FaCalendarAlt className="text-xl" />
              },
              {
                step: "4",
                title: "Viaje",
                description: "Acompanhe em tempo real",
                icon: <FaClock className="text-xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center relative"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="h-1 bg-gradient-to-r from-blue-900 to-blue-500 w-24 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mobile App Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                UniGo em <span className="gradient-text">qualquer lugar</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Acesse o UniGo de qualquer dispositivo. Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Notificações em tempo real", description: "Receba alertas sobre suas caronas" },
                  { title: "Chat integrado", description: "Comunique-se facilmente com outros usuários" },
                  { title: "Compartilhamento de localização", description: "Acompanhe o trajeto em tempo real" },
                  { title: "Avaliações e feedback", description: "Sistema de reputação para mais segurança" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="btn-primary"
                onClick={() => router.push('/register')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Começar a Usar
              </motion.button>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-64 h-[500px] bg-slate-900 rounded-[36px] p-3 shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl"></div>
                <div className="w-full h-full bg-white rounded-[28px] overflow-hidden">
                  <div className="h-12 bg-blue-900 flex items-center justify-center text-white font-semibold">
                    UniGo
                  </div>
                  <div className="p-3">
                    <div className="bg-slate-100 rounded-lg p-3 mb-3">
                      <div className="text-sm font-medium mb-2">Próximas Caronas</div>
                      <div className="space-y-2">
                        {[1, 2].map((item) => (
                          <div key={item} className="bg-white p-2 rounded-md shadow-sm">
                            <div className="text-xs font-medium">Campus UniFio → Centro</div>
                            <div className="text-xs text-slate-500">Hoje, 17:30 • 3 vagas</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <div className="text-sm font-medium mb-2">Carona Atual</div>
                      <div className="bg-white p-2 rounded-md shadow-sm">
                        <div className="text-xs font-medium">Residencial → Campus</div>
                        <div className="text-xs text-slate-500">Em andamento • Chegada em 5 min</div>
                        <div className="mt-2 h-1 bg-slate-200 rounded-full">
                          <div className="h-1 bg-blue-900 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <FaMapMarkedAlt className="text-blue-900" />
                      </div>
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <FaCar className="text-blue-900" />
                      </div>
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-900" />
                      </div>
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <FaUserGraduate className="text-blue-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            O que dizem nossos usuários
          </motion.h2>
          <motion.p
            className="text-slate-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Centenas de alunos da UniFio já estão aproveitando as vantagens do UniGo
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                curso: "Medicina - 3º ano",
                texto: "O UniGo mudou minha rotina! Economizo cerca de R$250 por mês, além de conhecer outros alunos de diferentes cursos. A segurança de viajar apenas com estudantes verificados é o melhor benefício.",
                avatar: "A",
                rating: 5
              },
              {
                name: "Pedro Santos",
                curso: "Engenharia Civil - 4º ano",
                texto: "Ótima iniciativa! Consigo dividir as despesas da viagem e ainda contribuo com o meio ambiente. O app é intuitivo e sempre encontro opções de carona para os horários que preciso.",
                avatar: "P",
                rating: 5
              },
              {
                name: "Maria Oliveira",
                curso: "Direito - 2º ano",
                texto: "Me sinto muito mais segura viajando com outros alunos da UniFio. O sistema de avaliação dos motoristas garante qualidade nas viagens. Recomendo para todos os estudantes!",
                avatar: "M",
                rating: 4
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="testimonial-card relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700" />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="avatar-container mr-4">
                      <div className="avatar-circle">
                        {depoimento.avatar}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{depoimento.name}</h3>
                      <p className="text-slate-600 text-sm">{depoimento.curso}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < depoimento.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 italic mb-4">"{depoimento.texto}"</p>
                  <div className="text-blue-800 text-sm font-medium">Usuário verificado UniFio</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="btn-secondary">Ver mais depoimentos</button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 flex justify-center">
              <motion.div
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaUsers className="text-3xl text-blue-900" />
              </motion.div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se a centenas de estudantes da UniFio que já estão economizando tempo e dinheiro com o UniGo
            </p>
            <motion.button
              className="btn-primary bg-white text-blue-900 hover:bg-blue-50 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Criar Conta Agora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-2">
                  <FaCar className="text-blue-900 text-xl" />
                </div>
                <span className="font-bold text-xl">UniGo</span>
              </div>
              <p className="text-slate-400 mb-4">
                Conectando estudantes universitários através de caronas seguras e econômicas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#beneficios" className="text-slate-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> contato@unigo.com</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (14) 99123-4567</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Campus UniFio, Ourinhos - SP</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Baixe o App</h3>
              <p className="text-slate-400 mb-4">Disponível em breve para iOS e Android.</p>
              <div className="flex space-x-2">
                <a href="#" className="border border-white rounded px-4 py-2 flex items-center text-sm hover:bg-white hover:text-blue-900 transition-colors">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H10.998A7 7 0 104 16a1 1 0 102 0 5 5 0 114.998-5H14.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" /></svg>
                  Download App
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} UniGo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
