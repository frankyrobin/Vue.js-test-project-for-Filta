<template>
  <div class="card">
    <img :src="imageSrc" alt="Content Image" class="content-image" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <button>READ MORE</button>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

.content-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

button {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #333;
}
</style>
