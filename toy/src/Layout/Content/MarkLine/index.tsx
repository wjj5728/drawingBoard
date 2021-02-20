import { defineComponent } from 'vue';
import './index.scss';
export default defineComponent({
  name: 'MarkLine',
  setup() {
    return () => (
      <>
        <div class='line-align'></div>
        <div class='line-verticle'></div>
      </>
    );
  },
});
