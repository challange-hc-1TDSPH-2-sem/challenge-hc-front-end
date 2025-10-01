import { useForm } from 'react-hook-form'

type FormData = {
  nome: string
  email: string
  mensagem: string
}

export default function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // Validação e envio fictício (sem API) conforme regras
    alert(`Mensagem enviada por ${data.nome}`)
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white border rounded-xl p-6 shadow-sm" noValidate>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="nome">Nome</label>
          <input
            id="nome"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? 'erro-nome' : undefined}
            {...register('nome', { required: 'Informe seu nome', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } })}
          />
          {errors.nome && <p id="erro-nome" className="text-sm text-red-600 mt-1">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'erro-email' : undefined}
            {...register('email', { required: 'Informe seu email' })}
          />
          {errors.email && <p id="erro-email" className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            className="w-full border rounded-md px-3 py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? 'erro-msg' : undefined}
            {...register('mensagem', { required: 'Digite sua mensagem', minLength: { value: 10, message: 'Mínimo de 10 caracteres' } })}
          />
          {errors.mensagem && <p id="erro-msg" className="text-sm text-red-600 mt-1">{errors.mensagem.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </section>
  )
}


