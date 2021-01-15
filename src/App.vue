<template>
  <v-app>
    <v-main>
      <PackageList/>
    </v-main>
  </v-app>
</template>

<script>
import PackageList from './components/PackageList';

export default {
  name: 'App',

  components: {
    PackageList,
  },

  data: () => ({
    //
  }),
};
</script>
