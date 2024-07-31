<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
    >
      <div
        :class="{ 'active': selectedAccordion === index }"
        @click="toggleAccordion(index)"
        class="accordion-title"
      >
        {{ item.title }}
      </div>
      <div v-if="selectedAccordion === index" class="accordion-content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAccordion",
  props: {
    items: Array
  },
  data() {
    return {
      selectedAccordion: 0 // Default to the first accordion
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.selectedAccordion === index) {
        this.selectedAccordion = null;
      } else {
        this.selectedAccordion = index;
      }
    }
  }
};
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-title {
  padding: 15px;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.accordion-title:hover {
  background-color: #444;
}

.accordion-title.active {
  background-color: #555;
  font-weight: 700;
}

.accordion-content {
  padding: 20px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
}
</style>
