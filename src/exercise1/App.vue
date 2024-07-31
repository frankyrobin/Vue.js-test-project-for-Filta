<template>
  <div id="app">
    <AppHeader />
    <div class="cards-container">
      <AppCard :imageSrc="require('@/exercise1/assets/400x300.png')" />
      <AppCard :imageSrc="require('@/exercise1/assets/400x300.png')" />
      <AppCard :imageSrc="require('@/exercise1/assets/400x300.png')" />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";

export default {
  name: "AppOne",
  components: {
    AppHeader,
    AppCard,
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
