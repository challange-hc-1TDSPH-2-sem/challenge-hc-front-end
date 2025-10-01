import { useState } from 'react'

const emergencyTypes = [
  {
    id: 'cardiac',
    title: '🚨 Emergência Cardíaca',
    description: 'Dor no peito, falta de ar, palpitações',
    color: 'bg-red-100 border-red-300 text-red-800',
    action: 'Ligue 192 IMEDIATAMENTE'
  },
  {
    id: 'respiratory',
    title: '🫁 Emergência Respiratória',
    description: 'Dificuldade para respirar, asfixia',
    color: 'bg-orange-100 border-orange-300 text-orange-800',
    action: 'Busque atendimento URGENTE'
  },
  {
    id: 'neurological',
    title: '🧠 Emergência Neurológica',
    description: 'Perda de consciência, convulsões, AVC',
    color: 'bg-purple-100 border-purple-300 text-purple-800',
    action: 'Procure emergência IMEDIATAMENTE'
  },
  {
    id: 'trauma',
    title: '🩹 Emergência por Trauma',
    description: 'Acidentes, quedas, ferimentos graves',
    color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    action: 'Vá ao pronto-socorro'
  },
  {
    id: 'pediatric',
    title: '👶 Emergência Pediátrica',
    description: 'Emergências em crianças e bebês',
    color: 'bg-pink-100 border-pink-300 text-pink-800',
    action: 'Busque pediatra de emergência'
  },
  {
    id: 'mental',
    title: '🧠 Emergência Psiquiátrica',
    description: 'Crises de ansiedade, pensamentos suicidas',
    color: 'bg-blue-100 border-blue-300 text-blue-800',
    action: 'Ligue CVV: 188'
  }
]

const firstAidTips = [
  'Mantenha a calma e respire fundo',
  'Se houver sangramento, pressione o local com pano limpo',
  'Não mova a vítima se houver suspeita de lesão na coluna',
  'Mantenha a vítima aquecida',
  'Não dê água ou medicamentos sem orientação médica'
]

export default function Emergencias() {
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <section className="space-y-12">
      <div className="text-center py-8">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800 shadow-soft animate-pulse-soft">
            🚨 Atendimento de Emergência
          </span>
        </div>
        <h1 className="heading-xl text-gradient mb-6">
          Emergências Médicas
        </h1>
        <p className="text-body text-muted max-w-4xl mx-auto">
          Em caso de emergência médica, nosso assistente virtual pode ajudar com orientações 
          imediatas e conectar você com os serviços de emergência adequados.
        </p>
      </div>

      {/* Botão de Emergência Crítica */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 text-center shadow-large relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="heading-lg mb-4">EMERGÊNCIA CRÍTICA?</h2>
          <p className="text-lg mb-6 opacity-90">Se você está em perigo imediato de vida:</p>
          <a 
            href="tel:192" 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-large hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            📞 LIGUE 192 AGORA
          </a>
        </div>
      </div>

      {/* Tipos de Emergência */}
      <div>
        <h2 className="heading-lg text-center mb-8 text-gradient-blue">Tipos de Emergência</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyTypes.map((emergency) => (
            <div
              key={emergency.id}
              className={`card-emergency cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-large ${
                selectedEmergency === emergency.id ? 'ring-4 ring-red-300' : ''
              }`}
              onClick={() => setSelectedEmergency(emergency.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-soft">
                  <span className="text-2xl">{emergency.title.split(' ')[0]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{emergency.title}</h3>
                  <p className="text-sm mb-3 text-gray-600">{emergency.description}</p>
                  <div className="text-xs font-semibold bg-white/70 px-3 py-1 rounded-lg text-gray-700">
                    {emergency.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot de Emergência */}
      <div className="gradient-primary rounded-3xl p-8 border border-blue-200/50 shadow-large">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
            <span className="text-3xl text-white">🤖</span>
          </div>
          <h2 className="heading-lg mb-3 text-gradient-blue">Assistente de Emergência</h2>
          <p className="text-body text-muted">
            Converse com nosso chatbot especializado em emergências médicas
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className={`btn-secondary px-8 py-4 ${chatOpen ? 'bg-red-600 hover:bg-red-700' : ''}`}
          >
            {chatOpen ? '❌ Fechar Chat' : '💬 Abrir Chat de Emergência'}
          </button>
        </div>

        {chatOpen && (
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 max-w-3xl mx-auto shadow-large">
            <div className="h-80 overflow-y-auto border border-gray-200 rounded-xl p-4 mb-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl ml-12 shadow-soft">
                  <p className="text-sm">Olá! Sou seu assistente de emergência. Como posso ajudar?</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl mr-12 shadow-soft">
                  <p className="text-sm">Descreva brevemente sua situação ou sintomas...</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    // placeholder para envio
                  }
                }}
              />
              <button className="btn-secondary px-6 py-3">
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dicas de Primeiros Socorros */}
      <div className="gradient-success rounded-3xl p-8 border border-green-200/50 shadow-large">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
            <span className="text-3xl text-white">🩹</span>
          </div>
          <h2 className="heading-lg mb-3 text-gradient">Dicas de Primeiros Socorros</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Em caso de emergência:</h3>
            <ul className="space-y-3">
              {firstAidTips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Números de Emergência:</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚑</span>
                  <span className="font-medium">SAMU</span>
                </div>
                <a href="tel:192" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">192</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚒</span>
                  <span className="font-medium">Bombeiros</span>
                </div>
                <a href="tel:193" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">193</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👮</span>
                  <span className="font-medium">Polícia</span>
                </div>
                <a href="tel:190" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">190</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <span className="font-medium">CVV</span>
                </div>
                <a href="tel:188" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">188</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
