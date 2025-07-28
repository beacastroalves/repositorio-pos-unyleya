<script setup>
import { ref, computed, defineProps } from 'vue';
import PointOfInterestCard from '@/components/PointOfInterestCard.vue';

const props = defineProps({
  pointsOfInterest: {
    type: Array,
    required: true
  }
});

const selectedCategory = ref('');

const uniqueCategories = computed(() => {
  const categories = props.pointsOfInterest.map(poi => poi.category);
  return [...new Set(categories)].sort();
});

const filteredPointsOfInterest = computed(() => {
  if (!selectedCategory.value) {
    return props.pointsOfInterest;
  }
  return props.pointsOfInterest.filter(poi => poi.category === selectedCategory.value);
});
</script>

<template>
  <section class="pois-page">
    <h2>Pontos de Interesse</h2>

    <div class="category-filter">
      <label for="category-select">Filtrar por Categoria:</label>
      <select id="category-select" v-model="selectedCategory">
        <option value="">Todas as Categorias</option>
        <option v-for="category in uniqueCategories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="poi-list">
      <PointOfInterestCard
        v-for="poi in filteredPointsOfInterest"
        :key="poi.id"
        :poi="poi"
      />
      <p v-if="filteredPointsOfInterest.length === 0" class="no-results">
        Nenhum ponto de interesse encontrado para a categoria selecionada.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pois-page {
  padding: 20px;
  background-color: #fafafa;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}


button {
  background-color: red;
}

h2 {
  font-size: 1.8em;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
}

.category-filter {
  text-align: center;
  margin-bottom: 25px;
}

.category-filter label {
  font-size: 1em;
  color: #555555;
  margin-right: 10px;
}

.category-filter select {
  padding: 8px 12px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1em;
  background-color: #f9f9f9;
  cursor: pointer;
}

.category-filter select:focus {
  outline: none;
  border-color: #ff9900;
  box-shadow: 0 0 0 2px rgba(255, 136, 0, 0.25);
}

.poi-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.no-results {
  text-align: center;
  color: #777777;
  font-style: italic;
  margin-top: 30px;
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.2em;
  }

  .poi-list {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (min-width: 1024px) {
  .poi-list {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
  }
}
</style>
