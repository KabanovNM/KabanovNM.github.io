<template>
  <div id="app">
    <Crm />
  </div>
</template>

<script>
import Crm from './components/Crm.vue';

export default {
  name: 'App',
  components: {
    Crm,
  },
};
</script>

<style>
#app {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
}

body {
  background-color: var(--color-background);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: var(--color-text);
}

.passed {
  color: var(--color-success);
}

.danger {
  color: var(--color-error);
}

.warning {
  color: var(--color-warning);
}
</style>
