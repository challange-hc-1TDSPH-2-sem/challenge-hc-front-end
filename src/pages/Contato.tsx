import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  nome: string
  email: string
  mensagem: string
}

export default function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<FormData>()
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    setSuccessMsg(null)
    // Simula envio assíncrono (sem API)
    await new Promise((r) => setTimeout(r, 800))
    setSuccessMsg(`Obrigado, ${data.nome}. Sua mensagem foi enviada!`)
    reset()
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contato</h1>
      {successMsg && (
        <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-green-800" role="alert" aria-live="polite">
          {successMsg}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white border rounded-xl p-6 shadow-sm" noValidate>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="nome">Nome <span className="text-red-600">*</span></label>
          <input
            id="nome"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? 'erro-nome' : undefined}
            placeholder="Seu nome completo"
            autoComplete="name"
            {...register('nome', { required: 'Informe seu nome', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } })}
          />
          <p className="text-xs text-gray-500 mt-1">Como você gostaria de ser chamado.</p>
          {errors.nome && <p id="erro-nome" className="text-sm text-red-600 mt-1">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'erro-email' : undefined}
            placeholder="seu@email.com"
            autoComplete="email"
            {...register('email', { required: 'Informe seu email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' } })}
          />
          <p className="text-xs text-gray-500 mt-1">Usaremos para retornar seu contato.</p>
          {errors.email && <p id="erro-email" className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="mensagem">Mensagem <span className="text-red-600">*</span></label>
          <textarea
            id="mensagem"
            className="w-full border rounded-md px-3 py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? 'erro-msg' : undefined}
            placeholder="Como podemos ajudar?"
            maxLength={500}
            {...register('mensagem', { required: 'Digite sua mensagem', minLength: { value: 10, message: 'Mínimo de 10 caracteres' }, maxLength: { value: 500, message: 'Máximo de 500 caracteres' } })}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 mt-1">Descreva com detalhes para agilizar o atendimento.</p>
            <span className="text-xs text-gray-500 mt-1">{(watch('mensagem')?.length ?? 0)}/500</span>
          </div>
          {errors.mensagem && <p id="erro-msg" className="text-sm text-red-600 mt-1">{errors.mensagem.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </section>
  )
}


