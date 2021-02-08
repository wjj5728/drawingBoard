import { defineComponent } from 'vue';
import './content.scss';
export default defineComponent({
  name: 'content',
  setup() {
    return () => (
      <>
        <div class='content'>
          <div class='wrap'></div>
        </div>
      </>
    );
  },
});
