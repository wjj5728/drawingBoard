import { defineComponent, onMounted } from 'vue';
import { MoveAction } from '../../utils';
import './pack.scss';
export default defineComponent({
  name: 'Pack',
  setup(props: any, { slots }) {
    onMounted(() => {
      let els: Array<HTMLDivElement> = Array.from(
        document.querySelectorAll('.j-dot')
      );
      els.forEach(item => {
        MoveAction(item, 'ZOOM');
      });

      /** move */
      let moveEl = document.querySelector('.pack') as HTMLDivElement;
      MoveAction(moveEl, 'MOVE');
    });
    return () => (
      <div class='pack'>
        <i class='j-dot dot-left-top'></i>
        <i class='j-dot dot-right-top'></i>
        <i class='j-dot dot-left-bottom'></i>
        <i class='j-dot dot-right-bottom'></i>
        <i class='j-dot dot-center-top'></i>
        <i class='j-dot dot-center-bottom'></i>
        <div class='move-wrap'>{slots.default ? slots.default() : ''}</div>
      </div>
    );
  },
});
