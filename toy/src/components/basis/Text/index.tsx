import { defineComponent } from 'vue';
import './text.module.scss';
export default defineComponent({
  name: 'Text',
  setup() {
    return () => (
      <>
        <p class='test'>33333</p>
        <input type='text' />
      </>
    );
  },
});
