<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800"
      scrollable
      persistent
    >
      <v-card>
        <div class = "head">
          <v-card-title class="headline">
            {{ title }}
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn
              color="#369875"
              text
              @click="close"
          >
            Close
          </v-btn>

        </div>

        <v-divider></v-divider>
        <v-card-text class="content">
          <h3>Total: {{description.total }}</h3>
          <h3>Rank: {{description.rank }}</h3>
          <h3>Versions: {{description.versions }}</h3>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
  },
  data () {
    return {
      dialog: true,
      description: ""
    }
  },
  methods: {
    close(){
      this.$emit("close")
    }
  },
  async mounted() {
    await this.$store.dispatch("getInfoPackage", this.title);
    this.description = this.$store.state.infoPackage;
  },
}
</script>

<style lang="scss">
 .head{
   padding: 0 50px;
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
</style>