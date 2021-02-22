import { defineComponent, onMounted, Ref, ref } from 'vue';
import { ZoomAction } from '../../utils';
import storeMager from '../../service/storeMager';
import './pack.scss';
import { actionType } from '../../store/actionTypes';
interface PackProps {
  active: Boolean;
  uuid: string;
}
export default defineComponent({
  name: 'Pack',
  props: {
    active: {
      type: Boolean,
      default: true,
      requred: true,
    },
    uuid: {
      type: String,
      requred: true,
      default: '',
    },
  },
  setup(props: PackProps, { slots, emit }) {
    const { store } = storeMager();
    const root: Ref<HTMLDivElement> = ref(
      document.querySelector('.pack') as HTMLDivElement
    );
    onMounted(() => {
      let els: Array<HTMLDivElement> = Array.from(
        document.querySelectorAll('.j-dot')
      );
      els.forEach(item => {
        ZoomAction(item);
      });
      /** move */
      let el = root.value;
      el.addEventListener('mousedown', (e: MouseEvent) => {
        console.log('props.active', props.active);
        let isPointDot = (e.target as Element).classList.contains('j-dot');
        if (!props.active) return false;
        if (isPointDot) return false;
        let x_down = e.clientX;
        let y_down = e.clientY;
        let leftDown = el.offsetLeft;
        let topDown = el.offsetTop;
        document.onmousemove = (e: MouseEvent) => {
          if (!props.active) return;
          let x_move = e.clientX;
          let y_move = e.clientY;
          let x_now = x_move - x_down;
          let y_now = y_move - y_down;
          el.style.position = 'absolute';
          el.style.top = topDown + y_now + 'px';
          el.style.left = leftDown + x_now + 'px';
        };
        el.onmouseup = () => {
          store.dispatch(actionType.EDIT, {
            uuid: props.uuid,
            style: {
              left: el.style.left,
              top: el.style.top,
            },
          });
          document.onmousemove = el.onmouseup = null;
        };
      });
    });
    return () => (
      <div
        data-uuid={props.uuid}
        class={`pack ${props.active ? 'act' : ''}`}
        ref={root}
      >
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
