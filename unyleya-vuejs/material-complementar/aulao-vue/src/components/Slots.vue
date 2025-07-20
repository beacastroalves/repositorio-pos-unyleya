<template>
  <div class="componente">
    <h1>Componente com Slots</h1>
    <button class="btn-slot">
      <slot name="icone"></slot>
      <slot name="texto">Botão</slot>
    </button>
  </div>
</template>


<style scoped>
.btn-slot {
  display: flex;
  text-align: center;
  align-items: flex-end;
  gap: 4px;
  margin: 0 auto;
}
</style>