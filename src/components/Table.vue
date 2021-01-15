<template>
  <div>
    <v-container @click="showModal">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
    </v-card-title>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="10"
        class="elevation-1"
        @click: row = "send"
        :search="search"
      ></v-data-table>
    </v-container>

    <Modal
        v-if="isModal"
        :title = "selected"
        @close = "closeModal"
    />
  </div>
</template>
<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  data () {
    return {
      selected:"",
      isModal:false,
      search: "",
      headers: [
        {
          text: 'Title package',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Type', value: 'type' },
        { text: 'Hits', value: 'hits' },
      ],
    }
  },
  methods: {
    showModal(el){
      if(el.target.nodeName === "TD"){
        this.isModal = true;
        this.selected = el.target.parentElement.firstElementChild.textContent;
      }
    },
    closeModal(){
      this.isModal = false;
    }
  },
  created() {
    this.list = this.$store.state.package;
  }
}
</script>