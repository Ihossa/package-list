<template>
  <div>
    <v-card >
      <div class="footer">
        <v-img
            class="footer_photo"
            max-height="100"
            max-width="100"
            src="@/assets/myPhoto.jpeg">
        </v-img>
        <div class="footer_content">
          <h2 class="footer_text-name">IHOR SHYMKOV</h2>
          <a href="https://github.com/Ihossa" class="footer_text-git">Me on Github</a>
        </div>
      </div>

    </v-card>
  </div>
</template>

<style lang="scss">
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6E7A8D;
  &_photo{
    border-radius: 50%;
    margin: 30px 30px 30px 0;
  }
  &_content {
    color: #eff1f6;
    font-weight: 250;
  }
  &_text-name{
    font-weight: 300;
  }
  &_text-git{
    font-weight: 700;
    color: inherit !important;
  }
}

</style>