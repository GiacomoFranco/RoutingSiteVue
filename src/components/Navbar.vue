<template>
  <div class="nav">
    <div class="nav-links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'products' }">Products</router-link>
      <router-link :to="{ name: 'not-existing-page' }">Redirect to 404</router-link>
      <router-link to="other-home">Other Home</router-link>
    </div>
    <div class="nav-buttons">
      <button class="nav-button nav-button__login">Log in</button>
      <button class="nav-button">Register</button>
    </div>
  </div>
</template>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-button {
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #00bd7e;
  width: 150px;
  height: 50px;
  
  cursor: pointer;
}

.nav-button__login {
  
  color: #00bd7e;
  border: 1px solid #00bd7e;
  background-color: transparent;
}

.nav-button__login:hover {
  background-color: #00bd7e;
  color: white;
  transition: 0.4s;
}
</style>