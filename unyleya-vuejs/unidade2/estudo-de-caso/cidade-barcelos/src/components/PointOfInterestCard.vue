<script setup>
import { defineProps } from 'vue';

defineProps({
  poi: {
    type: Object,
    required: true,
    validator: (value) => {
      return ['id', 'name', 'category', 'description', 'image'].every(prop => prop in value);
    }
  }
});
</script>

<template>
  <section class="poi-card">
    <img :src="poi.image" :alt="poi.name" class="poi-image" />
    <div class="poi-content">
      <h3>{{ poi.name }}</h3>
      <p class="poi-category">{{ poi.category }}</p>
      <p class="poi-description">{{ poi.description }}</p>
    </div>
  </section>
</template>

<style scoped>
.poi-card {
  background-color: #f8f8f8;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.poi-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #eeeeee;
}

.poi-content {
  padding: 16px;
  flex-grow: 1;
}

.poi-content h3 {
  font-size: 1.4em;
  color: #333333;
  margin-bottom: 8px;
}

.poi-category {
  font-size: 0.9em;
  color: #d18800;
  font-weight: bold;
  margin-bottom: 10px;
}

.poi-description {
  font-size: 0.95em;
  color: #666666;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .poi-card {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }

  .poi-image {
    width: 200px;
    height: 100%;
    flex-shrink: 0;
    border-right: 1px solid #eeeeee;
    border-bottom: none;
  }

  .poi-content {
    padding: 24px;
  }

  .poi-content h3 {
    font-size: 1.6em;
  }

  .poi-category {
    font-size: 1em;
  }

  .poi-description {
    font-size: 1em;
  }
}
</style>
