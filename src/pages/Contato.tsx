import { useForm } from 'react-hook-form'

type FormData = {
  nome: string
  email: string
  mensagem: string
}

export default function Contato() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // Validação e envio fictício (sem API) conforme regras
    alert(`Mensagem enviada por ${data.nome}`)
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white border rounded-xl p-6 shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            {...register('nome', { required: 'Informe seu nome' })}
          />
          {errors.nome && <p className="text-sm text-red-600 mt-1">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            {...register('email', { required: 'Informe seu email' })}
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            {...register('mensagem', { required: 'Digite sua mensagem' })}
          />
          {errors.mensagem && <p className="text-sm text-red-600 mt-1">{errors.mensagem.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">Enviar</button>
      </form>
    </section>
  )
}


