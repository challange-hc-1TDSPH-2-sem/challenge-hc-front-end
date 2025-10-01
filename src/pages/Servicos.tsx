import { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const specialties = [
  'Cardiologia', 'Neurologia', 'Pediatria', 'Psiquiatria', 'Dermatologia',
  'Oftalmologia', 'Ortopedia', 'Ginecologia', 'Urologia', 'Endocrinologia',
  'Gastroenterologia', 'Pneumologia', 'Reumatologia', 'Oncologia', 'Geriatria'
]

export default function Servicos() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    symptoms: '',
    urgency: 'normal'
  })

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria a lógica para enviar o formulário
    alert('Solicitação enviada! Você receberá uma confirmação em breve.')
  }

  useEffect(() => {
    document.title = 'Serviços | HC BRIDGE'
  }, [])

  return (
    <section className="space-y-12">
      <div className="text-center py-8">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 shadow-soft animate-pulse-soft">
            🏥 Serviços Médicos
          </span>
        </div>
        <h1 className="heading-xl text-gradient mb-6">
          Serviços Médicos
        </h1>
        <p className="text-body text-muted max-w-4xl mx-auto">
          Acesse nossos serviços médicos com facilidade. Desde emergências até consultas de rotina, 
          estamos aqui para cuidar da sua saúde.
        </p>
      </div>

      {/* Serviços Disponíveis */}
      <div>
        <h2 className="heading-lg text-center mb-8 text-gradient-blue">Nossos Serviços</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService === service.id}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      </div>

      {/* Formulário de Agendamento */}
      {selectedService && (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-large p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
              <span className="text-3xl text-white">📋</span>
            </div>
            <h2 className="heading-lg text-gradient mb-3">
              Solicitar {services.find(s => s.id === selectedService)?.title}
            </h2>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={appointmentForm.name}
                  onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={appointmentForm.email}
                  onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={appointmentForm.phone}
                  onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgência
                </label>
                <select
                  value={appointmentForm.urgency}
                  onChange={(e) => setAppointmentForm({...appointmentForm, urgency: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgente</option>
                  <option value="emergency">Emergência</option>
                </select>
              </div>
            </div>
            
            {selectedService === 'specialist' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidade
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">Selecione uma especialidade</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sintomas / Descrição *
              </label>
              <textarea
                required
                rows={4}
                value={appointmentForm.symptoms}
                onChange={(e) => setAppointmentForm({...appointmentForm, symptoms: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                placeholder="Descreva seus sintomas ou o motivo da consulta..."
              />
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn-outline px-8 py-3"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-success px-8 py-3"
              >
                Enviar Solicitação
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Informações Importantes */}
      <div className="gradient-primary rounded-3xl p-8 border border-blue-200/50 shadow-large">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
            <span className="text-3xl text-white">ℹ️</span>
          </div>
          <h2 className="heading-lg text-gradient-blue">Informações Importantes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4 text-gray-800">⏰ Horários de Funcionamento:</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">🚨</span>
                </div>
                <span className="text-sm text-gray-700">Emergências: 24 horas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs">📅</span>
                </div>
                <span className="text-sm text-gray-700">Consultas: 7h às 19h</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">💻</span>
                </div>
                <span className="text-sm text-gray-700">Telemedicina: 8h às 18h</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">💊</span>
                </div>
                <span className="text-sm text-gray-700">Farmácia: 6h às 22h</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4 text-gray-800">📞 Contatos:</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚨</span>
                  <span className="font-medium">Emergências</span>
                </div>
                <a href="tel:192" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">192</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-medium">Central</span>
                </div>
                <a href="tel:1133334444" className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors">(11) 3333-4444</a>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <span className="font-medium">WhatsApp</span>
                </div>
                <a href="https://wa.me/5511999999999" className="text-green-600 font-bold text-lg hover:text-green-700 transition-colors">(11) 99999-9999</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
