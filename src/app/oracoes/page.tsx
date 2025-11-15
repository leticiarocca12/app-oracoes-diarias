"use client";

import { useState } from "react";
import { Heart, Home, Sun, Moon, Coffee, Briefcase, Users, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

interface Prayer {
  id: number;
  title: string;
  category: string;
  content: string;
  verse: string;
  verseReference: string;
}

export default function OracoesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", name: "Todas", icon: Heart },
    { id: "manha", name: "Manhã", icon: Sun },
    { id: "noite", name: "Noite", icon: Moon },
    { id: "trabalho", name: "Trabalho", icon: Briefcase },
    { id: "familia", name: "Família", icon: Users },
    { id: "protecao", name: "Proteção", icon: Shield },
  ];

  const prayers: Prayer[] = [
    {
      id: 1,
      title: "Oração da Manhã",
      category: "manha",
      content: "Senhor, ao despertar neste novo dia, venho à Tua presença com um coração grato. Obrigado por mais uma oportunidade de viver, amar e servir.\n\nGuia meus passos neste dia. Que cada palavra que eu falar seja temperada com graça, que cada ação reflita Teu amor, e que cada pensamento seja agradável aos Teus olhos.\n\nDá-me sabedoria para tomar decisões corretas, força para enfrentar os desafios, e paz para lidar com as incertezas. Que eu possa ser uma bênção para todos que cruzarem meu caminho hoje.\n\nProtege minha família, meus amigos e todos aqueles que amo. Que este dia seja marcado pela Tua presença constante em minha vida.\n\nEm nome de Jesus, amém.",
      verse: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.",
      verseReference: "Salmos 118:24"
    },
    {
      id: 2,
      title: "Oração da Noite",
      category: "noite",
      content: "Pai celestial, ao encerrar este dia, venho à Tua presença com um coração agradecido por todas as bênçãos recebidas.\n\nObrigado por Tua proteção durante todo o dia, por Tua provisão constante e por Teu amor que nunca falha. Perdoa-me pelos erros cometidos, pelas palavras ditas sem pensar e pelas oportunidades perdidas de demonstrar Teu amor.\n\nEnquanto descanso, renovo minhas forças em Ti. Que Tua paz encha meu coração e minha mente. Afasta de mim toda ansiedade, medo e preocupação.\n\nProtege minha família durante esta noite. Que Teus anjos acampem ao nosso redor e nos guardem de todo mal. Que possamos acordar amanhã renovados e prontos para servir-Te com alegria.\n\nEm nome de Jesus, amém.",
      verse: "Em paz me deito e logo adormeço, porque só tu, Senhor, me fazes repousar seguro.",
      verseReference: "Salmos 4:8"
    },
    {
      id: 3,
      title: "Oração pela Família",
      category: "familia",
      content: "Senhor, venho diante de Ti intercedendo por minha família. Tu és o fundamento do nosso lar e a fonte do nosso amor.\n\nAbençoa cada membro da minha família. Protege-os, guia-os e fortalece-os. Que Teu amor una nossos corações e que Tua paz reine em nosso lar.\n\nAjuda-nos a nos amarmos uns aos outros como Tu nos amas - com paciência, bondade e perdão. Que possamos ser um refúgio de amor, compreensão e apoio mútuo.\n\nQuando enfrentarmos desafios, que possamos nos apoiar uns nos outros e buscar Tua sabedoria. Que nossa família seja um testemunho do Teu amor para o mundo.\n\nAbençoa nosso lar com alegria, paz e prosperidade. Que cada dia seja uma oportunidade de crescermos juntos em amor e fé.\n\nEm nome de Jesus, amém.",
      verse: "Quanto a mim e à minha casa, serviremos ao Senhor.",
      verseReference: "Josué 24:15"
    },
    {
      id: 4,
      title: "Oração pelo Trabalho",
      category: "trabalho",
      content: "Pai celestial, consagro a Ti meu trabalho e todas as minhas atividades profissionais.\n\nDá-me sabedoria para realizar minhas tarefas com excelência, integridade para tomar decisões corretas, e humildade para trabalhar em equipe.\n\nQue eu possa ser uma luz no meu ambiente de trabalho, demonstrando Teu amor através de minhas ações e palavras. Ajuda-me a ser diligente, responsável e honesto em tudo que faço.\n\nAbençoa meus colegas de trabalho, meus superiores e todos aqueles com quem interajo profissionalmente. Que eu possa ser uma bênção e um exemplo de Teu caráter.\n\nProvê todas as minhas necessidades financeiras e profissionais. Abre portas de oportunidades e fecha aquelas que não são da Tua vontade.\n\nQue meu trabalho glorifique Teu nome e seja um meio de abençoar outros.\n\nEm nome de Jesus, amém.",
      verse: "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens.",
      verseReference: "Colossenses 3:23"
    },
    {
      id: 5,
      title: "Oração de Proteção",
      category: "protecao",
      content: "Senhor, meu refúgio e minha fortaleza, venho buscar Tua proteção divina.\n\nCubro-me com o sangue de Jesus e coloco-me sob a sombra de Tuas asas. Protege-me de todo mal, perigo e adversidade. Guarda minha mente, meu coração e meu corpo.\n\nEnvie Teus anjos para acamparem ao meu redor e me guardarem em todos os meus caminhos. Que nenhuma arma forjada contra mim prosperará.\n\nProtege também minha família, meus amigos e todos aqueles que amo. Guarda nossas entradas e saídas, agora e para sempre.\n\nDá-me discernimento para reconhecer e evitar situações perigosas. Que Tua paz, que excede todo entendimento, guarde meu coração e minha mente.\n\nConfio em Ti, pois Tu és meu protetor fiel e nunca me abandonarás.\n\nEm nome de Jesus, amém.",
      verse: "O Senhor é o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.",
      verseReference: "Salmos 91:2"
    },
    {
      id: 6,
      title: "Oração de Gratidão",
      category: "todos",
      content: "Pai amado, venho à Tua presença com um coração transbordante de gratidão.\n\nObrigado por Teu amor incondicional, por Tua fidelidade que se renova a cada manhã, e por Tua graça que me sustenta todos os dias.\n\nSou grato pela vida, pela saúde, pela família, pelos amigos e por todas as bênçãos que recebi de Tuas mãos generosas.\n\nObrigado pelos desafios que me fortalecem, pelas provações que me ensinam, e pelas vitórias que celebro contigo.\n\nReconheço que tudo que tenho e tudo que sou vem de Ti. Que eu nunca me esqueça de ser grato, mesmo nas pequenas coisas.\n\nQue minha vida seja um constante louvor a Ti, e que minha gratidão se manifeste em ações de amor e serviço aos outros.\n\nEm nome de Jesus, amém.",
      verse: "Entrai por suas portas com ações de graças e nos seus átrios, com hinos de louvor; rendei-lhe graças e bendizei o seu nome.",
      verseReference: "Salmos 100:4"
    }
  ];

  const filteredPrayers = selectedCategory === "todos" 
    ? prayers 
    : prayers.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Orações Diárias</h1>
                <p className="text-sm text-gray-600">Conecte-se com Deus através da oração</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Momento de Oração
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O poder da oração transforma vidas
          </h2>
          <p className="text-lg text-white/90">
            "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças." - Filipenses 4:6
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
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Lista de Orações */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPrayers.map((prayer) => (
            <article
              key={prayer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {prayer.title}
                  </h3>
                </div>

                {/* Versículo */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-800 italic mb-2">
                    "{prayer.verse}"
                  </p>
                  <p className="text-xs font-semibold text-orange-700">
                    — {prayer.verseReference}
                  </p>
                </div>

                {/* Conteúdo da Oração */}
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {prayer.content}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <Heart className="w-5 h-5" />
                    Orar Agora
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dica de Oração */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dica para uma Oração Poderosa
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Encontre um lugar tranquilo, livre de distrações. Comece agradecendo a Deus por Suas bênçãos, confesse seus pecados, apresente seus pedidos e termine louvando Seu nome. Lembre-se: Deus ouve cada oração feita com fé e sinceridade.
              </p>
              <p className="text-sm text-gray-600 italic">
                "A oração do justo é poderosa e eficaz." - Tiago 5:16
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
