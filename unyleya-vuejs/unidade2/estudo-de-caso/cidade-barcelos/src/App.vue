<script setup>
import { ref, computed } from 'vue';
import HomePage from './pages/HomePage.vue';
import PointsOfInterestPage from './pages/PointsOfInterestPage.vue';

let barcelosData = ref(null);
let loadingError = ref(false);

const actualPage = ref(0);
const pages = [
  { label: 'Início', comp: HomePage },
  { label: 'Pontos de Interesse', comp: PointsOfInterestPage }
];

const currentCategoryFilter = ref('');

const changePage = (pageIndex) => {
  actualPage.value = pageIndex;
  if (pageIndex !== 1) {
    currentCategoryFilter.value = '';
  }
};

const handleCategorySelected = (category) => {
  currentCategoryFilter.value = category;
  actualPage.value = 1;
};

fetch('src/assets/barcelos_data.json')
  .then(res => res.json())
  .then(data => barcelosData.value = data)
  .catch(error => {
    console.error("Erro ao carregar dados", error);
    loadingError.value = true;
  });
</script>

<template>
  <div class="layout">
    <header>
      <nav class="main-nav">
        <a
          v-for="(page, index) in pages"
          :key="`page-nav-${index}`"
          @click="changePage(index)"
          :class="{ 'active-nav-item': actualPage === index }"
        >
          {{ page.label }}
        </a>
      </nav>
    </header>

    <main>
      <div v-if="loadingError" class="error-message">
        Erro ao carregar os dados da cidade. Por favor, tente novamente mais tarde.
      </div>
      <div v-else-if="!barcelosData" class="loading-message">
        Carregando informações de Barcelos...
      </div>
      <div v-else class="page-content">
        <KeepAlive>
          <component
            :is="pages[actualPage].comp"
            :cityData="barcelosData"
            :pointsOfInterest="barcelosData.pointsOfInterest"
            :initialCategoryFilter="currentCategoryFilter"
            @category-selected="handleCategorySelected"
          />
        </KeepAlive>
      </div>
    </main>

    <footer>
      <p>&copy; 2025 Explore Barcelos. Todos os direitos reservados.</p>
      <p>Atividade efetuada para Faculdade Unyleya - Pós-Graduação Desenvolvimento Frontend</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f9f9f9;
  position: relative;
}

.layout {
  font-family: 'Arial', sans-serif;
  margin: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

header {
  background-color: #ff9900;
  color: white;
  padding: 16px 24px;
  text-align: center;
  border-bottom: 1px solid #b35f00;
  width: 100%;
  user-select: none;
}

.main-nav {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
}

.main-nav a {
  cursor: pointer;
  padding: 8px 0;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.main-nav a:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.main-nav a.active-nav-item {
  background-color: white;
  color: #ff9900;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

main {
  padding: 24px;
  min-height: 400px;
  background-color: #fcfcfc;
}

.error-message, .loading-message {
  text-align: center;
  padding: 30px;
  color: #dc3545;
  font-weight: bold;
  font-size: 1.1em;
}

.loading-message {
  color: #ffd000;
}

footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 15px 20px;
  font-size: 0.9em;
  border-top: 1px solid #555555;
  bottom: 0;
}

@media (min-width: 768px) {
  header {
    padding: 24px 32px;
  }

  main {
    height: 100%;
  }

  .main-nav {
    flex-direction: row;
    gap: 16px;
  }

  .main-nav a {
    padding: 8px 24px;
  }

  main {
    padding: 32px;
  }
}
</style>
