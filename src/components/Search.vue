<template>
  <div>
    <input
      @input="changed"
      type="text"
      v-model="query"
      :class="{invalid: invalid}"
      class="big"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";

@Component
export default class Search extends Vue {
  constructor() {
    super();
  }
  query = "";
  @Action("FILTER_USERS")
  private filterUsers!: (query: string) => void;

  @State("InvalidQuery")
  private invalid!: boolean;

  changed(value: any) {
    debugger;
    this.filterUsers(this.query);
  }
}
</script>


<style>
.invalid {
  background-color: orange;
}
.big {
  width: 50vw;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
input[type="text"] {
  font-size: 2em;
}
</style>
