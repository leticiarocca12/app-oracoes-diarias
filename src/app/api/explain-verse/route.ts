import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { verse, reference } = await request.json();

    // Verificar se a chave da API está configurada
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { 
          explanation: "Para usar a explicação com IA, configure sua chave da OpenAI nas variáveis de ambiente (OPENAI_API_KEY)." 
        },
        { status: 200 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Você é um teólogo cristão experiente que explica versículos bíblicos de forma clara, profunda e acessível. Forneça explicações que incluam: contexto histórico, significado original, aplicação prática para a vida moderna, e insights espirituais. Seja respeitoso, edificante e fiel aos ensinamentos cristãos."
          },
          {
            role: "user",
            content: `Explique o seguinte versículo bíblico de forma detalhada e inspiradora:\n\nVersículo: "${verse}"\nReferência: ${reference}\n\nPor favor, forneça uma explicação que inclua:\n1. Contexto histórico e cultural\n2. Significado teológico\n3. Aplicação prática para a vida cristã moderna\n4. Reflexão espiritual`
          }
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Erro da OpenAI:", errorData);
      throw new Error("Erro ao gerar explicação");
    }

    const data = await response.json();
    const explanation = data.choices[0].message.content;

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { 
        explanation: "Desculpe, não foi possível gerar a explicação no momento. Verifique se sua chave da OpenAI está configurada corretamente ou tente novamente mais tarde." 
      },
      { status: 200 }
    );
  }
}
