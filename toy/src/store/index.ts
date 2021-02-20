import { InjectionKey } from 'vue';
import { createStore, Store, CommitOptions } from 'vuex';
import { componentItem } from '../typings/inedx';
import { uuid } from '../utils';
import { actionType } from './actionTypes';
export interface State {
  count: number;
  activeComponentUuid: string;
  components: componentItem[];
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state(): State {
    return {
      count: 0,
      activeComponentUuid: '',
      components: [],
    };
  },
  mutations: {
    [actionType.ADD](state: State, payload: componentItem) {
      state.components.push(payload);
    },
    [actionType.CHANGEACT](state: State, payload: string) {
      state.activeComponentUuid = payload;
    },
  },
  actions: {
    [actionType.ADD](context, payload: componentItem) {
      payload.uuid = uuid();
      context.commit(actionType.ADD, payload);
    },
    [actionType.CHANGEACT](context, payload: string) {
      context.commit(actionType.CHANGEACT, payload);
    },
  },
});
