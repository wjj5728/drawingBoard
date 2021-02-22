import { defineComponent } from 'vue';
import storeM from '../service/storeMager';
import Header from '../Layout/Head/header';
import Content from '../Layout/Content/content.vue';
import Categories from '../Layout/Categories/categories';
import Control from '../Layout/Control/control';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <el-container style='height:100vh'>
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <el-aside>
            <Categories />
          </el-aside>
          <el-main>
            <Content />
          </el-main>
          <el-aside>
            <Control />
          </el-aside>
        </el-container>
      </el-container>
    );
  },
});
