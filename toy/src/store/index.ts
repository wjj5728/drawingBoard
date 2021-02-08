import { InjectionKey } from 'vue';
import { createStore, Store, CommitOptions } from 'vuex';
import { DispatchOptions, Payload } from 'vuex';
export interface State {
  count: number;
}
export interface Dispatch {
  (type: string, payload?: any, options?: DispatchOptions): Promise<any>;
  <P extends Payload>(
    payloadWithType: P,
    options?: DispatchOptions
  ): Promise<any>;
}

export interface Commit {
  (type: 'increment', payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state(): State {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
});
