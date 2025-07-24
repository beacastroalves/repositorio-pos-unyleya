<template>
  <header>
    <slot name="header">
      <h1>Cabeçalho da Página</h1>
    </slot>
  </header>
  <main>
    <slot>
      <h2>Conteudo da Página</h2>
    </slot>
  </main>
  <footer>
    <slot name="footer">
      <h3>Rodape da Página</h3>
    </slot>
  </footer>
</template>