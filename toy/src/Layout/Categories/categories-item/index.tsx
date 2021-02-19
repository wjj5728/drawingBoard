import { defineComponent } from 'vue';

export default defineComponent({
  name: 'categoriesItem',
  setup({}, { slots }) {
    return () => {
      return <>{slots.default ? slots.default() : ''}</>;
    };
  },
});
