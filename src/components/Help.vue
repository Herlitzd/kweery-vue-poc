<template>
  <div>
    <button @click="show = !show">Need Help?</button>
    <span v-if="show">
      <p>Try:</p>
      <button
        class="link"
        @click="setTo('first_name = \'noah\'')"
        href="#"
      >First Name is 'noah'</button>
      <br />
      <button
        class="link"
        @click="setTo('username ~ \'yellow\'')"
        href="#"
      >Username contains 'yellow'</button>
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
  margin-bottom: 1em;
}
</style>

