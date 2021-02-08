// import { ref, computed } from "vue";
import { useStore } from 'vuex';
import { key } from '../store';

export default function () {
  const store = useStore(key);
  return {
    store,
  };
}
