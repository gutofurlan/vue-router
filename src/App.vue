<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'products'}">Produtos</router-link>
    <router-link :to="{name:'viewTask', params:{id:2}}">Tarefas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import TasksComponent from './components/TasksComponent'
import ProductsComponent from './components/ProductsComponent'
import HomeComponent from './components/HomeComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, components: {
    TasksComponent,
    ProductsComponent,
    HomeComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
