import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getServiceById } from '../data/services'

export default function ServicoDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = id ? getServiceById(id) : undefined

  useEffect(() => {
    document.title = service ? `${service.title} | HC Emergency Assistant` : 'Serviço não encontrado'
  }, [service])

  if (!service) {
    return (
      <section className="text-center">
        <h1 className="heading-xl mb-4">Serviço não encontrado</h1>
        <button className="btn-outline" onClick={() => navigate('/servicos')}>Voltar para Serviços</button>
      </section>
    )
  }

  return (
    <section className="space-y-8">
      <div className="text-center py-8">
        <h1 className="heading-xl text-gradient mb-3">{service.title}</h1>
        <p className="text-body text-muted max-w-2xl mx-auto">{service.description}</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-large p-8">
        <h2 className="heading-lg mb-4">Recursos inclusos</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="text-gray-700 text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-4">
          <button className="btn-success px-6 py-3" onClick={() => navigate('/servicos')}>Solicitar</button>
          <button className="btn-outline px-6 py-3" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    </section>
  )
}


