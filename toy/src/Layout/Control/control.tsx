import { defineComponent, reactive, ref, toRef } from 'vue';
import './control.scss';
import storeMager from '../../service/storeMager';

export default defineComponent({
  name: 'control',
  setup() {
    let { store } = storeMager();
    let state = reactive({
      style: {},
    });
    let init = ref(50);
    let a = 20;

    const styleV = <T, K extends keyof T>(obj: T, key: K): T[K] => {
      return obj[key];
    };
    console.log();
    const setState = (key: string, value: any) => {
      state[key] = ref(value);
    };
    return () => (
      <div class='control'>
        <p>控制台</p>
        <p>{store.state.activeComponent?.name}</p>
        <p>{store.state.activeComponent?.style ? '样式' : ''}</p>
        {store.state.activeComponent?.style
          ? Object.keys(store.state.activeComponent?.style).map(item => {
              setState(
                'style',
                parseFloat(styleV(store.state.activeComponent?.style, item))
              );
              return (
                <>
                  <p>{item}</p>
                  <el-slider
                    v-model={a}
                    onChange={(value: number) => {
                      a = value;
                      console.log(value);
                    }}
                  ></el-slider>
                </>
              );
            })
          : ''}
      </div>
    );
  },
});
