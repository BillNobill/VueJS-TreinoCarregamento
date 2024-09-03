<template>
  <HeaderNoticia></HeaderNoticia>
  <EstruturaNoticia></EstruturaNoticia>
</template>

<script>
import EstruturaNoticia from "./components/EstruturaNoticia.vue";
import HeaderNoticia from "./components/HeaderNoticia.vue";

export default {
  name: "App",
  components: {
    EstruturaNoticia,
    HeaderNoticia,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
