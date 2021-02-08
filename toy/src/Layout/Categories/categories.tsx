import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'categories',
  setup() {
    const isCollapse = ref();

    function handleOpen() {
      console.log('open');
    }
    function handleClose() {
      console.log('close');
    }
    return () => (
      <>
        <el-radio-group vModel={isCollapse} style='margin-bottom: 20px;'>
          <el-radio-button label={false}>展开</el-radio-button>
          <el-radio-button label={true}>收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active='1'
          class='el-menu-vertical-demo'
          OnOpen={handleOpen}
          OnClose={handleClose}
          collapse={isCollapse}
        >
          <el-menu-item index='1'>
            <i class='el-icon-menu'></i>
          </el-menu-item>
          <el-menu-item index='2'>
            <i class='el-icon-menu'></i>
          </el-menu-item>
          <el-menu-item index='3' disabled>
            <i class='el-icon-document'></i>
          </el-menu-item>
          <el-menu-item index='4'>
            <i class='el-icon-setting'></i>
          </el-menu-item>
        </el-menu>
      </>
    );
  },
});
