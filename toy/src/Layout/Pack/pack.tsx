import { defineComponent, onMounted } from 'vue';
import { MoveAction, ZoomAction } from '../../utils';
import storeMager from '../../service/storeMager';
import './pack.scss';
interface PackProps {
  active: Boolean;
}
export default defineComponent({
  name: 'Pack',
  props: {
    active: Boolean,
  },
  setup(props: PackProps, { slots, emit }) {
    const { store } = storeMager();
    onMounted(() => {
      let els: Array<HTMLDivElement> = Array.from(
        document.querySelectorAll('.j-dot')
      );
      els.forEach(item => {
        ZoomAction(item);
      });

      /** move */
      let moveEl = document.querySelector('.pack') as HTMLDivElement;
      MoveAction(moveEl);
    });
    return () => (
      <div class={`pack ${props.active ? 'act' : ''}`}>
        <i data-dr='lt' class='j-dot dot-lt'></i>
        <i data-dr='rt' class='j-dot dot-rt'></i>
        <i data-dr='lb' class='j-dot dot-lb'></i>
        <i data-dr='rb' class='j-dot dot-rb'></i>
        <i data-dr='ct' class='j-dot dot-ct'></i>
        <i data-dr='cb' class='j-dot dot-cb'></i>
        <i data-dr='cl' class='j-dot dot-cl'></i>
        <i data-dr='cr' class='j-dot dot-cr'></i>
        <div class='pack-wrap'>{slots.default ? slots.default() : ''}</div>
      </div>
    );
  },
});
