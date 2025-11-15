"use client";

import { useState } from "react";
import { Sparkles, Home, Heart, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Devotional {
  id: number;
  title: string;
  date: string;
  verse: string;
  verseReference: string;
  content: string;
  reflection: string;
  prayer: string;
  category: string;
}

export default function DevocionalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", name: "Todos", icon: BookOpen },
    { id: "fe", name: "Fé", icon: Sparkles },
    { id: "amor", name: "Amor", icon: Heart },
    { id: "gratidao", name: "Gratidão", icon: Heart },
  ];

  const devotionals: Devotional[] = [
    {
      id: 1,
      title: "O Amor Incondicional de Deus",
      date: "Hoje",
      verse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      verseReference: "João 3:16",
      content: "O amor de Deus por nós é incomparável e vai além de qualquer compreensão humana. Ele não nos ama porque somos perfeitos, mas nos ama apesar de nossas imperfeições. Este amor foi demonstrado da forma mais poderosa através do sacrifício de Jesus Cristo na cruz.\n\nQuando olhamos para a cruz, vemos o maior ato de amor já realizado. Deus não poupou seu próprio Filho, mas o entregou por todos nós. Este amor não é baseado em nossos méritos ou conquistas, mas na natureza graciosa e misericordiosa de Deus.",
      reflection: "Como você tem respondido ao amor de Deus em sua vida? Você tem compartilhado este amor com aqueles ao seu redor? Reflita sobre as maneiras práticas de demonstrar o amor de Deus hoje.",
      prayer: "Pai celestial, obrigado pelo Seu amor incondicional. Ajude-me a compreender a profundidade deste amor e a compartilhá-lo com todos ao meu redor. Que eu possa ser um reflexo do Seu amor neste mundo. Em nome de Jesus, amém.",
      category: "amor"
    },
    {
      id: 2,
      title: "Fé que Move Montanhas",
      date: "Ontem",
      verse: "Se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e ele passará. Nada vos será impossível.",
      verseReference: "Mateus 17:20",
      content: "A fé não é medida pelo tamanho, mas pela sua autenticidade e direção. Jesus usa a ilustração do grão de mostarda - uma das menores sementes - para nos ensinar que mesmo a menor fé genuína tem poder extraordinário quando está fundamentada em Deus.\n\nAs montanhas em nossas vidas podem representar desafios, obstáculos, medos ou situações impossíveis. Jesus nos ensina que com fé em Deus, nenhuma situação é impossível. Não se trata de força humana, mas de confiar no poder ilimitado de Deus.",
      reflection: "Quais são as 'montanhas' em sua vida hoje? Você tem colocado sua fé em Deus para movê-las? Lembre-se: não é sobre o tamanho da sua fé, mas sobre a grandeza do Deus em quem você crê.",
      prayer: "Senhor, aumenta minha fé. Ajude-me a confiar em Ti completamente, mesmo quando as circunstâncias parecem impossíveis. Que minha fé, mesmo pequena, esteja firmada em Teu poder infinito. Amém.",
      category: "fe"
    },
    {
      id: 3,
      title: "Gratidão em Todas as Circunstâncias",
      date: "2 dias atrás",
      verse: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
      verseReference: "1 Tessalonicenses 5:18",
      content: "A gratidão não é apenas uma emoção, mas uma escolha deliberada que fazemos independentemente das circunstâncias. Paulo nos ensina a dar graças 'em tudo' - não apenas nas coisas boas, mas em todas as situações da vida.\n\nQuando cultivamos um coração grato, nossa perspectiva muda. Começamos a ver as bênçãos de Deus mesmo nos momentos difíceis. A gratidão nos conecta com a bondade de Deus e nos lembra de Sua fidelidade constante em nossas vidas.",
      reflection: "Faça uma lista de pelo menos cinco coisas pelas quais você é grato hoje. Inclua tanto as grandes bênçãos quanto as pequenas. Como a prática da gratidão pode transformar sua perspectiva?",
      prayer: "Pai, obrigado por todas as Suas bênçãos em minha vida. Ajude-me a ter um coração grato em todas as circunstâncias. Que eu possa reconhecer Sua bondade mesmo nos momentos difíceis. Amém.",
      category: "gratidao"
    }
  ];

  const filteredDevotionals = selectedCategory === "todos" 
    ? devotionals 
    : devotionals.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Devocional Diário</h1>
                <p className="text-sm text-gray-600">Fortaleça sua fé todos os dias</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bem-vindo ao seu momento com Deus
          </h2>
          <p className="text-lg text-white/90">
            Reserve alguns minutos para refletir, orar e crescer espiritualmente
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Lista de Devocionais */}
        <div className="space-y-6">
          {filteredDevotionals.map((devotional) => (
            <article
              key={devotional.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">
                      {devotional.date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {devotional.title}
                    </h3>
                  </div>
                </div>

                {/* Versículo */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg text-gray-800 italic leading-relaxed mb-2">
                        "{devotional.verse}"
                      </p>
                      <p className="text-sm font-semibold text-purple-700">
                        — {devotional.verseReference}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {devotional.content}
                  </p>
                </div>

                {/* Reflexão */}
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                    Para Refletir
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {devotional.reflection}
                  </p>
                </div>

                {/* Oração */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Oração
                  </h4>
                  <p className="leading-relaxed italic">
                    {devotional.prayer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Continue sua jornada espiritual
          </h3>
          <p className="text-gray-600 mb-6">
            Explore mais recursos para fortalecer sua fé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biblia"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Ler a Bíblia
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/oracoes"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Orações Diárias
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
