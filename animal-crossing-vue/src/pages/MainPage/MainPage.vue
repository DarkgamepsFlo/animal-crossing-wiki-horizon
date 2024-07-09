<template>
    <div>
        <HeaderComponent/>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';

export default {
  name: 'MainPage',
  components : {
    HeaderComponent,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
