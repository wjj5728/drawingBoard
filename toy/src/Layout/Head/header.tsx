import { defineComponent } from 'vue';
import './header.scss';
export default defineComponent({
  name: 'Head',
  setup() {
    return () => (
      <>
        <el-button type='primary'>测试</el-button>
        <el-button type='primary'>测试</el-button>
        <el-button type='primary'>测试</el-button>
        <el-button type='primary'>测试</el-button>
        <el-button type='primary'>测试</el-button>
      </>
    );
  },
});
