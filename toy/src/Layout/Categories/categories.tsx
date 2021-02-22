import { defineComponent, ref, reactive } from 'vue';
import { GlobalConfig, ConfigItem, lang } from '../../config';
import categoriesItem from './categories-item';
import './categories.scss';
export default defineComponent({
  name: 'categories',
  components: {
    categoriesItem,
  },
  setup() {
    const isCollapse = ref(false);
    const index = ref(0);

    const handleOpen = () => {
      console.log('open');
    };
    const handleClose = () => {
      console.log('close');
    };
    const dragstart = (e: DragEvent, item: ConfigItem) => {
      e.dataTransfer?.setData('component', `${item.type}_${item.name}`);
      console.log(e);
    };
    return () => (
      <>
        <div
          class='cate-wrap'
          style={{ width: isCollapse.value ? '60px' : 'auto' }}
        >
          <i
            class={
              isCollapse.value
                ? 'el-icon-d-arrow-right'
                : 'el-icon-d-arrow-left'
            }
            onClick={() => {
              isCollapse.value = !isCollapse.value;
            }}
          ></i>
          <ul class='categories'>
            {Object.keys(GlobalConfig).map((item, i) => {
              return (
                <li
                  class={i == index.value ? 'active' : ''}
                  onClick={() => {
                    index.value = i;
                  }}
                >
                  <i class='el-icon-s-data'></i>
                  <p>{lang[item]}</p>
                </li>
              );
            })}
          </ul>
          <ul class='cate-list'>
            {GlobalConfig[Object.keys(GlobalConfig)[index.value]].map(item => {
              return (
                <li
                  draggable='true'
                  onDragstart={e => {
                    console.log(123);
                    dragstart(e, item);
                  }}
                >
                  <i class={`el-icon-${item.icon}`}></i>
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  },
});
