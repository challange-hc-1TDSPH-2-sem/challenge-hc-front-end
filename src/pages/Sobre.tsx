export default function Sobre() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          🏥 Sobre o HC Emergency Assistant
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Uma solução inovadora de assistente virtual especializado em emergências médicas e marcação de consultas
        </p>
      </div>

      <div className="prose max-w-none prose-p:my-4">
        <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">🚨 Nossa Missão</h2>
          <p className="text-gray-700">
            O HC Emergency Assistant foi desenvolvido para revolucionar o atendimento de emergências médicas, 
            oferecendo um assistente virtual inteligente que pode avaliar situações críticas, orientar primeiros 
            socorros e conectar pacientes com especialistas adequados em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎯 Objetivos</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Reduzir tempo de resposta em emergências</li>
              <li>• Melhorar triagem de pacientes</li>
              <li>• Facilitar marcação de consultas urgentes</li>
              <li>• Oferecer orientações médicas 24/7</li>
              <li>• Conectar pacientes com especialistas</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-3">✨ Funcionalidades</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Chatbot especializado em emergências</li>
              <li>• Análise inteligente de sintomas</li>
              <li>• Marcação automática de consultas</li>
              <li>• Orientação de primeiros socorros</li>
              <li>• Integração com especialistas</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-6 border">
          <h2 className="text-2xl font-bold mb-4">🔬 Tecnologia</h2>
          <p className="text-gray-700 mb-4">
            Nossa solução utiliza inteligência artificial avançada para analisar sintomas, 
            classificar urgências e fornecer orientações médicas precisas. O sistema é 
            treinado com protocolos médicos atualizados e pode se integrar com sistemas 
            hospitalares existentes.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold">IA Avançada</h4>
              <p className="text-sm text-gray-600">Algoritmos de machine learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold">Resposta Rápida</h4>
              <p className="text-sm text-gray-600">Análise em segundos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🔗</span>
              </div>
              <h4 className="font-semibold">Integração</h4>
              <p className="text-sm text-gray-600">Conecta com especialistas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


