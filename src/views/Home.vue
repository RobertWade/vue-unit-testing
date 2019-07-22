<template>
  <div class="home">
    <h1>Star Rating</h1>
    <StarRating :rating="rating" @change="rate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StarRating from "@/components/StarRating.vue";
@Component({
  components: {
    StarRating
  },
  data: () => ({
    rating: null
  })
})
export default class Home extends Vue {
  rating: number = 0;
  rate(rateNumber: number): void {
    this.rating = rateNumber;
  }
}
</script>


<style lang="scss" scoped>
.home{
  height: 100vh;
  width:100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
