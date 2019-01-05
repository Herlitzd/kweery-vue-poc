import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { Kweery } from 'kweery';

Vue.use(Vuex)

interface RootState {
  Users: User[];
  InvalidQuery: boolean;
  FilteredView: User[];
}
interface Address {
  street: string;
  suite: string;
  city: string;
}
interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  location: Address;
}

export default new Vuex.Store<RootState>({
  state: {
    Users: [],
    InvalidQuery: true,
    FilteredView: []
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.Users = [...payload];
    },
    SET_FILTERED: (state, payload) => {
      state.FilteredView = [...payload];
    },
    SET_INVALID: (state, payload) => {
      state.InvalidQuery = payload;
    }

  },
  getters: {
    GET_FILTERED: (state) => {
      return !state.InvalidQuery ? state.FilteredView : state.Users;
    }
  },
  actions: {
    FILTER_USERS: async (context, query) => {
      Kweery.exec(query, context.state.Users).then((filtered) => {
        context.commit("SET_INVALID", false);
        context.commit("SET_FILTERED", filtered);
      }).catch((e) => {
        context.commit("SET_FILTERED", context.state.Users);
        context.commit("SET_INVALID", true);
      });
    },
    GET_USERS: async (context, _payload) => {
      let { data } = await axios.get("https://raw.githubusercontent.com/pixelastic/fakeusers/master/data/final.json");
      context.commit("SET_USERS", data)
    }
  }
})
