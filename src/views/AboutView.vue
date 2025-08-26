<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Sidebar gauche -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
        MonLogo
      </div>
      <nav class="flex-1 px-4 py-6 space-y-2">
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700 transition">Accueil</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700 transition">À propos</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700 transition">Services</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700 transition">Contact</a>
      </nav>
      <div class="px-4 py-4 border-t border-gray-700">
        <button class="w-full px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 transition">
          Déconnexion
        </button>
      </div>
    </aside>

    <!-- Contenu principal -->
    <main class="flex-1 p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Bienvenue sur mon app</h1>
      <p class="text-gray-700">
        Voici le contenu principal. Le menu reste fixe à gauche.
      </p>
    </main>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
