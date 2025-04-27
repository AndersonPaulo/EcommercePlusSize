function AdminLogin() {
  return (
    <main className="pt-20 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Login Administrativo</h1>
      <form className="w-full max-w-sm space-y-4">
        <input type="email" placeholder="E-mail" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Senha" className="w-full border p-2 rounded" />
        <button className="w-full px-4 py-2 bg-gray-800 text-white rounded">Entrar</button>
      </form>
    </main>
  );
}

export default AdminLogin;
