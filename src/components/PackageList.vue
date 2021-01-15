<template>
  <div id = "app">
    <Header />
    <Table v-if="packageList"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Table from "@/components/Table"
import Footer from "@/components/Footer";
  export default {
    name: 'app',
    data(){
      return{
        packageList: null,
      }
    },
    components: {
      Footer,
      Header,
      Table
    },

    async created() {
       await this.$store.dispatch("getPackage");
        this.packageList = this.$store.state.package;
    }
  }
</script>
