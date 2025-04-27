import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login Admin</h2>
      <input type="text" placeholder="Usuário" className="border p-2 mb-3 w-64" />
      <input type="password" placeholder="Senha" className="border p-2 mb-3 w-64" />
      <button className="bg-blue-900 text-white px-6 py-2 rounded">Entrar</button>
    </div>
  );
}

export default Login
