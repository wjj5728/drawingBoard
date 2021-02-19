import { defineComponent } from 'vue';
export const config = {
  style: {
    width: '100%',
    height: '100px',
  },
};
export default defineComponent({
  name: 'lottie',
  setup() {
    return () => (
      <>
        <p class='test'>lottie</p>
      </>
    );
  },
});
