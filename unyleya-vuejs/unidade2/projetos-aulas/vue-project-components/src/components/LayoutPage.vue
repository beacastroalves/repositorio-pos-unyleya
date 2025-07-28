<script setup>
const pagina = "Eventos"
</script>

<template>
  <main>
    <slot :pag="pagina">
      <h2>Conteudo da Página</h2>
    </slot>
  </main>
</template>