type Integrante = {
  nome: string
  rm: string
  turma: string
  foto?: string
  github?: string
}

const integrantes: Integrante[] = [
  { nome: 'Pedro De Matos', rm: '564184', turma: '1TDSPH', foto: '/membros/membro3.jpg', github: 'https://github.com/PedroPrevitali' },
  { nome: 'João Vitor Lacerda', rm: '565565', turma: '1TDSPH', foto: '/membros/membro1.jpg', github: 'https://github.com/joaolacerdaconsorte' },
  { nome: 'Murilo Fernandes Carapia', rm: '564969', turma: '1TDSPH', foto: '/membros/membro2.png', github: 'https://github.com/MurilloFernandesCarapia' },
]

export default function Integrantes() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Integrantes</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrantes.map((p) => (
          <li key={p.rm} className="card">
            <div className="w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden mx-auto flex items-center justify-center">
              {p.foto ? (
                <img 
                  src={p.foto} 
                  alt={`Foto de ${p.nome}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Foto não disponível</p>
                </div>
              )}
            </div>
            <p className="font-semibold text-lg">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {p.nome}
                </a>
              ) : (
                p.nome
              )}
            </p>
            <p className="text-sm text-gray-600 mt-1">RM: {p.rm}</p>
            <p className="text-sm text-gray-600">Turma: {p.turma}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}


