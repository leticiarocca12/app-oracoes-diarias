"use client";

import { useState } from "react";
import { Book, Heart, Sparkles, ChevronRight, Search, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    {
      icon: Book,
      title: "Bíblia Completa",
      description: "Acesse todos os livros, capítulos e versículos com explicações detalhadas",
      href: "/biblia",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Devocional Diário",
      description: "Reflexões inspiradoras para fortalecer sua fé todos os dias",
      href: "/devocional",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Orações Diárias",
      description: "Orações poderosas para cada momento da sua jornada espiritual",
      href: "/oracoes",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const verseOfDay = {
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16"
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Orações Diárias
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Sua jornada espiritual começa aqui
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero Section - Versículo do Dia */}
      <section className="container mx-auto px-4 py-12">
        <div className={`relative overflow-hidden rounded-3xl p-8 md:p-12 shadow-2xl ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                Versículo do Dia
              </span>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
              "{verseOfDay.text}"
            </blockquote>
            
            <p className="text-lg text-white/80 font-medium">
              — {verseOfDay.reference}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group"
            >
              <div className={`h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-purple-200/50'
              }`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  Explorar
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-12">
        <div className={`rounded-2xl p-8 ${
          darkMode 
            ? 'bg-gray-800' 
            : 'bg-white shadow-xl'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Busque na Bíblia
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Encontre versículos, capítulos e explicações com IA
              </p>
            </div>
            
            <Link
              href="/biblia"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              Buscar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`container mx-auto px-4 py-8 mt-12 border-t ${
        darkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Orações Diárias © 2024 - Fortalecendo sua fé todos os dias
          </p>
        </div>
      </footer>
    </div>
  );
}
