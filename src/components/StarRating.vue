<template>
  <div class="text-xs-center">
    <v-rating v-model="rater"></v-rating>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StarRating extends Vue {
  @Prop() private rating!: number;
  get rater() {
    return this.rating
  }
  set rater(value: number){
      this.$emit('change', this.rating)
  }
}
</script>