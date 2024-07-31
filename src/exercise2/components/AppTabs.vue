<template>
  <div class="tabs">
    <div class="tab-titles">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ 'active': selectedTab === index }"
        @click="selectTab(index)"
        class="tab-title"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="tab-content">
      <div v-if="tabs[selectedTab]" v-html="tabs[selectedTab].content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTabs",
  props: {
    tabs: Array
  },
  data() {
    return {
      selectedTab: 0 // Default to the first tab
    };
  },
  methods: {
    selectTab(index) {
      if (this.selectedTab === index) {
        this.selectedTab = null;
      } else {
        this.selectedTab = index;
      }
    }
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tab-titles {
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #333;
}

.tab-title {
  flex: 1;
  padding: 15px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-weight: 500;
  background-color: #333;
  transition: background-color 0.3s ease;
}

.tab-title:hover {
  background-color: #444;
}

.tab-title.active {
  background-color: #555;
  font-weight: 700;
}

.tab-content {
  padding: 20px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
}
</style>
