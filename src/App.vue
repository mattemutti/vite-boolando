<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { state } from "./state";


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      state
    }
  }
}

</script>
<!-- *********************************************************************** -->
<template>

  <AppHeader />

  <AppMain />

  <AppFooter />


</template>
<!-- *********************************************************************** -->
<style></style>