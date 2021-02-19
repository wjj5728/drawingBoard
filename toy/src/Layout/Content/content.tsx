import { defineComponent, resolveDynamicComponent } from 'vue';
import Pack from '../Pack/pack';
import storeMager from '../../service/storeMager';
import './content.scss';
import { actionType } from '../../store/actionTypes';
import { GlobalConfig } from '../../config';
import { styleMerge } from './utils';
export default defineComponent({
  name: 'content',
  components: { Pack },
  setup() {
    let { store } = storeMager();
    const drop = (e: DragEvent) => {
      console.log(e);
      let data = e.dataTransfer?.getData('component') as string;
      let pathConfig = data?.split('_');
      let categories = pathConfig[0];
      let component = pathConfig[1];
      let config = GlobalConfig[categories].filter(item => {
        return (item.name = component);
      });
      config[0].config.style = styleMerge(config[0].config, {
        x: e.offsetX,
        y: e.offsetY,
      });
      store.dispatch(actionType.ADD, {
        name: pathConfig[1],
        ...config[0].config,
      });
    };
    const dragover = (e: DragEvent) => {
      e.preventDefault();
    };
    return () => (
      <>
        <div class='content'>
          <div
            class='wrap'
            onDrop={e => {
              drop(e);
            }}
            onDragover={e => {
              dragover(e);
            }}
          >
            {store.state.components.map(item => {
              let el = resolveDynamicComponent(item.name);
              console.log(item);
              return (
                <Pack style={item.style}>
                  <el></el>
                </Pack>
              );
            })}
          </div>
        </div>
      </>
    );
  },
});
