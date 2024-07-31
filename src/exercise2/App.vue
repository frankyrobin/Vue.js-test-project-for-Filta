<template>
  <div>
    <div v-if="isDesktop">
      <AppTabs :tabs="data" />
    </div>
    <div v-else>
      <AppAccordion :items="data" />
    </div>
  </div>
</template>

<script>
import AppTabs from './components/AppTabs.vue';
import AppAccordion from './components/AppAccordion.vue';
import data from './assets/data.json';

export default {
  name: "AppTwo",
  components: {
    AppTabs,
    AppAccordion
  },
  data() {
    return {
      data: data,
      isDesktop: window.innerWidth >= 768
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
