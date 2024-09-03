<template>
  <header class="header">
    <div class="header-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <nav class="navigation">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#noticias">Notícias</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNoticia",
};
</script>

<style>
.header {
  color: #181818;
  padding: 10px 0;
  width: 100%;
}

.header-container {
  max-width: 100%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 120px;
}

.navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation li {
  margin: 0 15px;
}

.navigation a {
  color: #181818;
  text-decoration: none;
  font-size: 1em;
}

.navigation a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .navigation a {
    color: #181818;
    text-decoration: none;
    font-size: 0.8em;
  }
}
</style>
