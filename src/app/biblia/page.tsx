"use client";

import { useState } from "react";
import { Book, ChevronLeft, ChevronRight, Sparkles, Home, Loader2 } from "lucide-react";
import Link from "next/link";

interface Verse {
  number: number;
  text: string;
}

interface BibleBook {
  name: string;
  abbrev: string;
  chapters: number;
  testament: "VT" | "NT";
}

// Dados estáticos da Bíblia
const bibleBooks: BibleBook[] = [
  // Antigo Testamento
  { name: "Gênesis", abbrev: "gn", chapters: 50, testament: "VT" },
  { name: "Êxodo", abbrev: "ex", chapters: 40, testament: "VT" },
  { name: "Levítico", abbrev: "lv", chapters: 27, testament: "VT" },
  { name: "Números", abbrev: "nm", chapters: 36, testament: "VT" },
  { name: "Deuteronômio", abbrev: "dt", chapters: 34, testament: "VT" },
  { name: "Josué", abbrev: "js", chapters: 24, testament: "VT" },
  { name: "Juízes", abbrev: "jz", chapters: 21, testament: "VT" },
  { name: "Rute", abbrev: "rt", chapters: 4, testament: "VT" },
  { name: "1 Samuel", abbrev: "1sm", chapters: 31, testament: "VT" },
  { name: "2 Samuel", abbrev: "2sm", chapters: 24, testament: "VT" },
  { name: "1 Reis", abbrev: "1rs", chapters: 22, testament: "VT" },
  { name: "2 Reis", abbrev: "2rs", chapters: 25, testament: "VT" },
  { name: "1 Crônicas", abbrev: "1cr", chapters: 29, testament: "VT" },
  { name: "2 Crônicas", abbrev: "2cr", chapters: 36, testament: "VT" },
  { name: "Esdras", abbrev: "ed", chapters: 10, testament: "VT" },
  { name: "Neemias", abbrev: "ne", chapters: 13, testament: "VT" },
  { name: "Ester", abbrev: "et", chapters: 10, testament: "VT" },
  { name: "Jó", abbrev: "job", chapters: 42, testament: "VT" },
  { name: "Salmos", abbrev: "sl", chapters: 150, testament: "VT" },
  { name: "Provérbios", abbrev: "pv", chapters: 31, testament: "VT" },
  { name: "Eclesiastes", abbrev: "ec", chapters: 12, testament: "VT" },
  { name: "Cânticos", abbrev: "ct", chapters: 8, testament: "VT" },
  { name: "Isaías", abbrev: "is", chapters: 66, testament: "VT" },
  { name: "Jeremias", abbrev: "jr", chapters: 52, testament: "VT" },
  { name: "Lamentações", abbrev: "lm", chapters: 5, testament: "VT" },
  { name: "Ezequiel", abbrev: "ez", chapters: 48, testament: "VT" },
  { name: "Daniel", abbrev: "dn", chapters: 12, testament: "VT" },
  { name: "Oséias", abbrev: "os", chapters: 14, testament: "VT" },
  { name: "Joel", abbrev: "jl", chapters: 3, testament: "VT" },
  { name: "Amós", abbrev: "am", chapters: 9, testament: "VT" },
  { name: "Obadias", abbrev: "ob", chapters: 1, testament: "VT" },
  { name: "Jonas", abbrev: "jn", chapters: 4, testament: "VT" },
  { name: "Miquéias", abbrev: "mq", chapters: 7, testament: "VT" },
  { name: "Naum", abbrev: "na", chapters: 3, testament: "VT" },
  { name: "Habacuque", abbrev: "hc", chapters: 3, testament: "VT" },
  { name: "Sofonias", abbrev: "sf", chapters: 3, testament: "VT" },
  { name: "Ageu", abbrev: "ag", chapters: 2, testament: "VT" },
  { name: "Zacarias", abbrev: "zc", chapters: 14, testament: "VT" },
  { name: "Malaquias", abbrev: "ml", chapters: 4, testament: "VT" },
  
  // Novo Testamento
  { name: "Mateus", abbrev: "mt", chapters: 28, testament: "NT" },
  { name: "Marcos", abbrev: "mc", chapters: 16, testament: "NT" },
  { name: "Lucas", abbrev: "lc", chapters: 24, testament: "NT" },
  { name: "João", abbrev: "jo", chapters: 21, testament: "NT" },
  { name: "Atos", abbrev: "at", chapters: 28, testament: "NT" },
  { name: "Romanos", abbrev: "rm", chapters: 16, testament: "NT" },
  { name: "1 Coríntios", abbrev: "1co", chapters: 16, testament: "NT" },
  { name: "2 Coríntios", abbrev: "2co", chapters: 13, testament: "NT" },
  { name: "Gálatas", abbrev: "gl", chapters: 6, testament: "NT" },
  { name: "Efésios", abbrev: "ef", chapters: 6, testament: "NT" },
  { name: "Filipenses", abbrev: "fp", chapters: 4, testament: "NT" },
  { name: "Colossenses", abbrev: "cl", chapters: 4, testament: "NT" },
  { name: "1 Tessalonicenses", abbrev: "1ts", chapters: 5, testament: "NT" },
  { name: "2 Tessalonicenses", abbrev: "2ts", chapters: 3, testament: "NT" },
  { name: "1 Timóteo", abbrev: "1tm", chapters: 6, testament: "NT" },
  { name: "2 Timóteo", abbrev: "2tm", chapters: 4, testament: "NT" },
  { name: "Tito", abbrev: "tt", chapters: 3, testament: "NT" },
  { name: "Filemom", abbrev: "fm", chapters: 1, testament: "NT" },
  { name: "Hebreus", abbrev: "hb", chapters: 13, testament: "NT" },
  { name: "Tiago", abbrev: "tg", chapters: 5, testament: "NT" },
  { name: "1 Pedro", abbrev: "1pe", chapters: 5, testament: "NT" },
  { name: "2 Pedro", abbrev: "2pe", chapters: 3, testament: "NT" },
  { name: "1 João", abbrev: "1jo", chapters: 5, testament: "NT" },
  { name: "2 João", abbrev: "2jo", chapters: 1, testament: "NT" },
  { name: "3 João", abbrev: "3jo", chapters: 1, testament: "NT" },
  { name: "Judas", abbrev: "jd", chapters: 1, testament: "NT" },
  { name: "Apocalipse", abbrev: "ap", chapters: 22, testament: "NT" },
];

// Versículos de exemplo (você pode expandir isso)
const sampleVerses: Record<string, Record<number, Verse[]>> = {
  "jo": {
    3: [
      { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
      { number: 17, text: "Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele." },
    ]
  },
  "sl": {
    23: [
      { number: 1, text: "O Senhor é o meu pastor; nada me faltará." },
      { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." },
      { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
      { number: 4, text: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
    ]
  }
};

export default function BibliaPage() {
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string>("");
  const [loadingExplanation, setLoadingExplanation] = useState(false);

  // Carregar capítulo
  const loadChapter = (book: BibleBook, chapter: number) => {
    setSelectedChapter(chapter);
    
    // Carregar versículos de exemplo ou mostrar mensagem
    const bookVerses = sampleVerses[book.abbrev]?.[chapter];
    if (bookVerses) {
      setVerses(bookVerses);
    } else {
      // Gerar versículos de placeholder
      const placeholderVerses: Verse[] = Array.from({ length: 10 }, (_, i) => ({
        number: i + 1,
        text: `Versículo ${i + 1} de ${book.name} capítulo ${chapter}. Conteúdo bíblico será carregado aqui.`
      }));
      setVerses(placeholderVerses);
    }
  };

  // Explicar versículo com IA
  const explainVerse = async (verse: Verse) => {
    setSelectedVerse(verse);
    setLoadingExplanation(true);
    
    try {
      const response = await fetch("/api/explain-verse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verse: verse.text,
          reference: `${selectedBook?.name} ${selectedChapter}:${verse.number}`
        })
      });
      
      const data = await response.json();
      setAiExplanation(data.explanation);
    } catch (error) {
      setAiExplanation("Desculpe, não foi possível gerar a explicação no momento. Tente novamente.");
    }
    
    setLoadingExplanation(false);
  };

  const oldTestament = bibleBooks.filter(b => b.testament === "VT");
  const newTestament = bibleBooks.filter(b => b.testament === "NT");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bíblia Sagrada</h1>
                <p className="text-sm text-gray-600">Nova Versão Internacional</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar - Lista de Livros */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Livros da Bíblia</h2>
              
              <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Antigo Testamento */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Antigo Testamento
                  </h3>
                  <div className="space-y-1">
                    {oldTestament.map((book) => (
                      <button
                        key={book.abbrev}
                        onClick={() => {
                          setSelectedBook(book);
                          loadChapter(book, 1);
                          setSelectedVerse(null);
                          setAiExplanation("");
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                          selectedBook?.abbrev === book.abbrev
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {book.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Novo Testamento */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Novo Testamento
                  </h3>
                  <div className="space-y-1">
                    {newTestament.map((book) => (
                      <button
                        key={book.abbrev}
                        onClick={() => {
                          setSelectedBook(book);
                          loadChapter(book, 1);
                          setSelectedVerse(null);
                          setAiExplanation("");
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                          selectedBook?.abbrev === book.abbrev
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {book.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-6">
            {!selectedBook ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Selecione um Livro
                </h3>
                <p className="text-gray-600">
                  Escolha um livro da Bíblia para começar a leitura
                </p>
              </div>
            ) : (
              <>
                {/* Navegação de Capítulos */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedBook.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => loadChapter(selectedBook, Math.max(1, selectedChapter - 1))}
                        disabled={selectedChapter === 1}
                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold">
                        Capítulo {selectedChapter}
                      </span>
                      <button
                        onClick={() => loadChapter(selectedBook, Math.min(selectedBook.chapters, selectedChapter + 1))}
                        disabled={selectedChapter === selectedBook.chapters}
                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Grid de Capítulos */}
                  <div className="grid grid-cols-8 sm:grid-cols-12 gap-2">
                    {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map((chapter) => (
                      <button
                        key={chapter}
                        onClick={() => loadChapter(selectedBook, chapter)}
                        className={`p-2 rounded-lg font-semibold transition-all duration-200 ${
                          selectedChapter === chapter
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md scale-110"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                      >
                        {chapter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Versículos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="space-y-4">
                    {verses.map((verse) => (
                      <div
                        key={verse.number}
                        className="group"
                      >
                        <div className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm">
                            {verse.number}
                          </span>
                          <div className="flex-1">
                            <p className="text-gray-800 leading-relaxed text-lg">
                              {verse.text}
                            </p>
                            <button
                              onClick={() => explainVerse(verse)}
                              className="mt-2 flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Sparkles className="w-4 h-4" />
                              Explicar com IA
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explicação com IA */}
                {selectedVerse && (
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-6 h-6" />
                      <h3 className="text-xl font-bold">
                        Explicação - {selectedBook.name} {selectedChapter}:{selectedVerse.number}
                      </h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                      <p className="text-lg italic leading-relaxed">
                        "{selectedVerse.text}"
                      </p>
                    </div>

                    {loadingExplanation ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Gerando explicação...</span>
                      </div>
                    ) : (
                      <div className="prose prose-invert max-w-none">
                        <p className="text-white/90 leading-relaxed whitespace-pre-line">
                          {aiExplanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
