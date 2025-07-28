<script setup>
import { ref, watch } from 'vue';
const { modelValue } = defineProps([
  'label', 'type', 'ph', 'modelValue'
]);

defineEmits(['update:modelValue'])

const iptValue = ref(null);
const iptMsg = ref(null);

watch(iptValue, (newValue, oldValue) => {
  if (newValue === null || newValue === '') {
    iptMsg.value = 'Preencha este campo.'
  } else {
    iptMsg.value = null;
  }
}, { immediate: true });
</script>

<template>
  <section>
    <label>{{ label }}</label>
    <input
      :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)'
      :type='type'
      :placeholder='ph'
      />
  </section>
  <p>{{ iptMsg }}</p>
</template>

<style scoped>
section {
  display: flex;
}

section > label {
  min-width: 15vw;
  font-weight: 800;
}

section > input {
  padding: 16px;
  flex: 1;
}

p {
  min-height: 40px;
  padding: 8px;
  text-align: right;
  color: #ae2012;
}
</style>