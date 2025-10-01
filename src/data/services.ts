export type Service = {
  id: string
  title: string
  description: string
  features: string[]
  color: string
  buttonColor: string
}

export const services: Service[] = [
  {
    id: 'emergency',
    title: '🚨 Consultas de Emergência',
    description: 'Atendimento imediato para situações urgentes',
    features: ['Resposta em até 15 minutos', 'Conecta com especialistas', 'Orientação de primeiros socorros'],
    color: 'bg-red-50 border-red-200',
    buttonColor: 'bg-red-600 hover:bg-red-700'
  },
  {
    id: 'specialist',
    title: '👨‍⚕️ Consultas com Especialistas',
    description: 'Agendamento com médicos especializados',
    features: ['Cardiologia', 'Neurologia', 'Pediatria', 'Psiquiatria'],
    color: 'bg-blue-50 border-blue-200',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'routine',
    title: '📅 Consultas de Rotina',
    description: 'Agendamento para consultas não urgentes',
    features: ['Check-up geral', 'Acompanhamento médico', 'Prevenção'],
    color: 'bg-green-50 border-green-200',
    buttonColor: 'bg-green-600 hover:bg-green-700'
  },
  {
    id: 'telemedicine',
    title: '💻 Telemedicina',
    description: 'Consultas online com médicos',
    features: ['Consulta por vídeo', 'Prescrição digital', 'Segunda opinião'],
    color: 'bg-purple-50 border-purple-200',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    id: 'exams',
    title: '🔬 Exames e Resultados',
    description: 'Agendamento e acesso a resultados',
    features: ['Agendamento online', 'Resultados digitais', 'Histórico completo'],
    color: 'bg-yellow-50 border-yellow-200',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
  },
  {
    id: 'pharmacy',
    title: '💊 Farmácia Digital',
    description: 'Medicamentos e prescrições',
    features: ['Receita digital', 'Entrega em casa', 'Orientações medicamentosas'],
    color: 'bg-indigo-50 border-indigo-200',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
  }
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}


