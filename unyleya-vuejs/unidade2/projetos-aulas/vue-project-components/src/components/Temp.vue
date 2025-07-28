<script setup>
const { max, min } = defineProps({
  city: String,
  max: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
});
</script>

<template>
  <div>
    <section>
      <h3>{{ city }}</h3>
    </section>
    <section>
      <img v-if="max > 30" src="../assets/sunny.png">
      <img v-else-if="min < 10" src="../assets/snowing.png">
      <img v-else src="../assets/rainy.png">
    </section>
    <section>
      <p>Max: {{ max }} °C</p>
      <p>Min: {{ min }} °C</p>
    </section>
  </div>
</template>

<style scoped>
div {
  padding: 16px;
  border-radius: 4px;
  box-shadow: 1px 1px 3px gray;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
}

div > section {
  display: flex;
  justify-content: space-evenly;
}

div > section > h3 {
  font-size: 2rem;
  color: #264653;
}

div > section > img {
  padding: 24px;
}

div > section > p {
  color: #ae2012;
}

</style>