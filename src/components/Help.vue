<template>
  <div>
    <button @click="show = !show">Try Examples</button>
    <span v-if="show">
      <br />
      <button
        class="link"
        @click="setTo(queries[0])"
        href="#"
      >First Name is "noah"</button>
      <br />
      <button
        class="link"
        @click="setTo(queries[1])"
        href="#"
      >Username contains "purple"</button>
      <br />
      <button
        class="link"
        @click="setTo(queries[2])"
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

  queries = [
    'first_name = "noah"',
    'username ~ "purple"',
    'username ~ "purple" AND first_name = "noah"'
  ];
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

