import { defineComponent, ref, reactive } from 'vue';
import './categories.scss';
export default defineComponent({
  name: 'categories',
  setup() {
    const isCollapse = ref(false);

    function handleOpen() {
      console.log('open');
    }
    function handleClose() {
      console.log('close');
    }
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
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
            <li>
              <i class='el-icon-s-data'></i>
              <p>类别</p>
            </li>
          </ul>
          <ul class='cate-list'>
            <li>
              <i class='el-icon-video-camera'></i>
              <p>item</p>
            </li>
            <li>
              <i class='el-icon-video-camera'></i>
              <p>item</p>
            </li>
            <li>
              <i class='el-icon-video-camera'></i>
              <p>item</p>
            </li>
          </ul>
        </div>
      </>
    );
  },
});
