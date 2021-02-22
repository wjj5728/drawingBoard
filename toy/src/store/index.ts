import { InjectionKey } from 'vue';
import { createStore, Store, CommitOptions } from 'vuex';
import { componentItem } from '../typings/inedx';
import { actionType } from './actionTypes';
export interface State {
  count: number;
  activeComponentUuid: string;
  activeComponent: componentItem | null;
  components: componentItem[];
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state(): State {
    return {
      count: 0,
      activeComponentUuid: '',
      activeComponent: {
        uuid: '',
        name: '',
        style: {},
        custom: {},
      },
      components: [],
    };
  },
  mutations: {
    [actionType.ADD](state: State, payload: componentItem) {
      state.components.push(payload);
    },
    [actionType.CHANGEACT](state: State, payload: string) {
      let Cc = state.components.filter(item => {
        return item.uuid == payload;
      });
      state.activeComponent = Cc[0];
      state.activeComponentUuid = payload;
    },
    [actionType.EDIT](state: State, payload) {
      console.log('payload', payload);
      let index = state.components.findIndex(item => {
        return item.uuid == payload.uuid;
      });
      console.log('index', index);
      let data = JSON.parse(JSON.stringify(state.components));
      data[index] = Object.assign({}, data[index], payload);
      console.log(data);
      state.components = data;
    },
  },
  actions: {
    [actionType.ADD](context, payload: componentItem) {
      context.commit(actionType.ADD, payload);
      context.commit(actionType.CHANGEACT, payload.uuid);
    },
    [actionType.CHANGEACT](context, payload: string) {
      context.commit(actionType.CHANGEACT, payload);
    },
    [actionType.EDIT](context, payload: string) {
      context.commit(actionType.EDIT, payload);
    },
  },
});
