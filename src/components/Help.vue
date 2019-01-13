<template>
  <div>
    <button @click="show = !show">Try Examples</button>
    <span v-if="show">
      <br />
      <button
        class="link"
        @click="setTo('first_name = \'noah\'')"
        href="#"
      >First Name is 'noah'</button>
      <br />
      <button
        class="link"
        @click="setTo('username ~ \'purple\'')"
        href="#"
      >Username contains 'purple'</button>
      <br />
      <button
        class="link"
        @click="setTo('username ~ \'purple\' AND first_name = \'noah\'')"
        href="#"
      >Both conditions</button>
    </span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";

@Component
export default class Search extends Vue {
  show = false;
  constructor() {
    super();
  }
  setTo(query: string) {
    this.$emit("helpClicked", query);
  }
}
</script>
<style>
button.link {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  margin-top: 1em;
}
</style>

