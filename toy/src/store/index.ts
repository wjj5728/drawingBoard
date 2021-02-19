import { InjectionKey } from 'vue';
import { createStore, Store, CommitOptions } from 'vuex';
import { componentItem } from '../typings/inedx';
import { actionType } from './actionTypes';
export interface State {
  count: number;
  components: componentItem[];
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state(): State {
    return {
      count: 0,
      components: [],
    };
  },
  mutations: {
    [actionType.ADD](state: State, payload: componentItem) {
      state.components.push(payload);
    },
  },
  actions: {
    [actionType.ADD](context, payload: componentItem) {
      console.log(payload);
      context.commit(actionType.ADD, payload);
    },
  },
});
