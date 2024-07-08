<template>
  <VotezDewey></VotezDewey>
  <img alt="Vue logo" src="./assets/logo.png">
  <VotezDewey2></VotezDewey2>
  <HelloWorld msg="Coucou"/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import VotezDewey from './components/VotezDewey.vue';
import VotezDewey2 from './components/VotezDewey2/VotezDewey2.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    VotezDewey,
    VotezDewey2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
