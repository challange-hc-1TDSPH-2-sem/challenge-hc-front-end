import { useEffect } from 'react'

const faqs = [
  { 
    q: 'O que é o HC Emergency Assistant?', 
    a: 'É um assistente virtual inteligente especializado em emergências médicas que pode avaliar sintomas, orientar primeiros socorros, classificar urgências e conectar pacientes com especialistas adequados 24 horas por dia.' 
  },
  { 
    q: 'Como o chatbot de emergência funciona?', 
    a: 'O chatbot analisa seus sintomas através de uma conversa inteligente, classifica a urgência da situação e pode orientar primeiros socorros, conectar com especialistas ou direcionar para atendimento de emergência conforme necessário.' 
  },
  { 
    q: 'O sistema pode diagnosticar doenças?', 
    a: 'Não, o HC Emergency Assistant não faz diagnósticos. Ele analisa sintomas para classificar urgências e orientar sobre primeiros socorros, mas sempre recomenda consulta médica para diagnóstico adequado.' 
  },
  { 
    q: 'Como funciona a marcação de consultas urgentes?', 
    a: 'O sistema pode agendar consultas de emergência automaticamente, conectando você com especialistas disponíveis baseado na urgência e tipo de sintomas apresentados. Consultas críticas têm prioridade máxima.' 
  },
  { 
    q: 'O assistente funciona 24 horas?', 
    a: 'Sim! O chatbot está disponível 24 horas por dia, 7 dias por semana para emergências médicas. Para situações críticas, sempre recomenda ligar 192 imediatamente.' 
  },
  { 
    q: 'Meus dados estão seguros?', 
    a: 'Sim, seguimos rigorosamente as normas de proteção de dados (LGPD) e protocolos de segurança médica. Todas as informações são criptografadas e armazenadas de forma segura.' 
  },
  { 
    q: 'Posso usar o sistema para consultas de rotina?', 
    a: 'Sim! Além de emergências, o sistema também facilita o agendamento de consultas de rotina, acesso a resultados de exames e orientações gerais de saúde.' 
  },
  { 
    q: 'O que fazer se o chatbot não entender minha situação?', 
    a: 'Em casos complexos ou se o chatbot não conseguir ajudar adequadamente, ele automaticamente conecta você com um especialista humano ou orienta a procurar atendimento presencial imediato.' 
  },
]

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ | HC Emergency Assistant'
  }, [])
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="card">
            <summary className="cursor-pointer font-medium select-none">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}


