<template>
  <div class="header">
    <picture>
      <source srcset="@/exercise1/assets/1920x650.png" media="(min-width: 768px)">
      <img src="@/exercise1/assets/600x600.png" alt="Banner" class="banner">
    </picture>
    <div class="text-overlay">
      <h1>Hello Developer!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  position: relative;
  text-align: center;
  color: white;
}

.banner {
  width: 100%;
  height: auto;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-overlay h1 {
  font-size: 48px;
  margin: 0;
}

.text-overlay p {
  font-size: 18px;
}

@media (max-width: 768px) {
  .text-overlay h1 {
    font-size: 32px;
  }

  .text-overlay p {
    font-size: 16px;
  }
}
</style>
