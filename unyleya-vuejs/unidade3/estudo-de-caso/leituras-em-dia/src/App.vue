<script setup>

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/leituras">Leituras</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

nav {
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  header .wrapper {
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
}
</style>
