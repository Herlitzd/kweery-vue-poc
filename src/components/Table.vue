<template>
  <div>
    <Search/>
    <table class="table">
      <thead>
        <tr>
          <td>first_name</td>
          <td>last_name</td>
          <td>username</td>
          <td>email</td>
          <td>location.street</td>
          <td>location.state</td>
          <td>location.city</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>{{user.location.street}}</td>
          <td>{{user.location.state}}</td>
          <td>{{user.location.city}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State, Getter } from "vuex-class";
import Search from "./Search.vue";

@Component({ components: { Search } })
export default class Table extends Vue {
  @Action("GET_USERS")
  private getUsers!: () => void;

  @Getter("GET_FILTERED") users!: any[];

  constructor() {
    super();
    this.getUsers();
  }
}
</script>

<style scoped>
  table{
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
</style>

