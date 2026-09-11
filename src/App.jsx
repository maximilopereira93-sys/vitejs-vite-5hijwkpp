import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('Gestor')
  const [mensagem, setMensagem] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !senha) {
      setMensagem('Preencha o e-mail e a senha para continuar.')
      return
    }

    setMensagem(`Acesso realizado com sucesso! Bem-vindo, ${tipoUsuario}.`)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>SGEI</h1>

        <h2>Sistema de Gestão Escolar Infantil</h2>

        <p className="subtitulo">
          Acesse o sistema para continuar
        </p>

        <form onSubmit={handleLogin}>
          <label>E-mail</label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label>Tipo de usuário</label>

          <select
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="Gestor">Gestor</option>
            <option value="Professor">Professor</option>
          </select>

          <button type="submit">
            Entrar
          </button>
        </form>

        {mensagem && (
          <p className="mensagem">
            {mensagem}
          </p>
        )}
      </div>
    </div>
  )
}

export default App