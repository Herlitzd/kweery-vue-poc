<template>
  <div>
    <input
      @input="changed"
      type="text"
      v-model="query"
      :class="{invalid: invalid}"
      class="big"
    />
    <Help @helpClicked="helpClicked" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Help from "./Help.vue";
import { Action, State } from "vuex-class";

@Component({ components: { Help } })
export default class Search extends Vue {
  constructor() {
    super();
  }
  query = "";
  @Action("FILTER_USERS")
  private filterUsers!: (query: string) => void;

  @State("InvalidQuery")
  private invalid!: boolean;

  helpClicked(value: string) {
    this.query = value;
    this.filterUsers(this.query);
  }
  changed(value: any) {
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
