import { useNavigate } from 'react-router-dom'
import type { Service } from '../data/services'

type Props = {
  service: Service
  isSelected?: boolean
  onSelect?: (id: string) => void
}

export default function ServiceCard({ service, isSelected, onSelect }: Props) {
  const navigate = useNavigate()

  return (
    <div
      className={`card-service cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-large ${
        isSelected ? 'ring-4 ring-blue-300' : ''
      }`}
      onClick={() => onSelect?.(service.id)}
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-medium">
          <span className="text-2xl text-white">{service.title.split(' ')[0]}</span>
        </div>
        <div className="flex-1">
          <h3 className="heading-md text-gray-800 mb-2">{service.title}</h3>
          <p className="text-muted text-sm">{service.description}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="text-sm flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-3">
        <button
          className={`${service.buttonColor} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-medium hover:-translate-y-0.5`}
          onClick={(e) => {
            e.stopPropagation()
            onSelect?.(service.id)
          }}
        >
          Solicitar Serviço
        </button>
        <button
          className="btn-outline py-3 px-4"
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/servicos/${service.id}`)
          }}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  )
}


