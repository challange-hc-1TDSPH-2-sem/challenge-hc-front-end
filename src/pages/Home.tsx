import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'HC BRIDGE — Home'
  }, [])
  return (
    <section className="space-y-16">
      <div className="text-center py-16 sm:py-20 gradient-emergency rounded-3xl border border-red-200/50 shadow-large relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5"></div>
        <div className="relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800 shadow-soft animate-pulse-soft">
              🚨 Assistência 24/7 Disponível
            </span>
          </div>
          <h1 className="heading-xl text-gradient mb-6">
            HC BRIDGE
          </h1>
          <p className="text-body text-muted max-w-3xl mx-auto mb-8">
            Chatbot inteligente para auxílio em emergências médicas, marcação de consultas urgentes e orientações de saúde 24 horas por dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/emergencias')} className="btn-emergency">
              🚨 Emergência Agora
            </button>
            <button onClick={() => navigate('/chatbot')} className="btn-secondary">
              🤖 Falar com Assistente
            </button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: '🚨 Emergências 24/7', 
            desc: 'Assistente virtual especializado em emergências médicas com resposta imediata e orientações de primeiros socorros.',
            gradient: 'from-red-50 to-red-100/50',
            border: 'border-red-200',
            icon: '🚨'
          },
          { 
            title: '📅 Marcação Inteligente', 
            desc: 'Sistema automatizado para agendamento de consultas urgentes e acompanhamento de especialistas.',
            gradient: 'from-blue-50 to-blue-100/50',
            border: 'border-blue-200',
            icon: '📅'
          },
          { 
            title: '🎯 Consulta Especializada', 
            desc: 'Conecta pacientes com especialistas adequados baseado em sintomas e histórico médico.',
            gradient: 'from-green-50 to-green-100/50',
            border: 'border-green-200',
            icon: '🎯'
          },
        ].map((f) => (
          <div key={f.title} className={`card-service border-2 ${f.border} bg-gradient-to-br ${f.gradient} group`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="heading-md text-gray-800">{f.title}</h3>
            </div>
            <p className="text-muted">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="gradient-primary rounded-3xl p-12 border border-blue-200/50 shadow-large">
        <h2 className="heading-lg text-center mb-12 text-gradient-blue">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
              <span className="text-3xl text-white">💬</span>
            </div>
            <h3 className="heading-md mb-3 text-gray-800">1. Converse com o Assistente</h3>
            <p className="text-muted">Descreva seus sintomas ou situação de emergência de forma natural</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
              <span className="text-3xl text-white">🔍</span>
            </div>
            <h3 className="heading-md mb-3 text-gray-800">2. Análise Inteligente</h3>
            <p className="text-muted">IA analisa e classifica a urgência da situação em segundos</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <h3 className="heading-md mb-3 text-gray-800">3. Ação Imediata</h3>
            <p className="text-muted">Conecta com especialistas ou orienta primeiros socorros</p>
          </div>
        </div>
      </div>
    </section>
  )
}


