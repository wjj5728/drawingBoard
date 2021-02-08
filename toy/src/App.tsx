import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import './style/main.scss';
import './style/reset.scss';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
