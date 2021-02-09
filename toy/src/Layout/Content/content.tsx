import { defineComponent, reactive } from 'vue';
import Pack from '../Pack/pack';
import Text from '../../components/Text';
import './content.scss';
export default defineComponent({
  name: 'content',
  components: { Pack, Text },
  setup() {
    const data = reactive({
      list: [
        {
          name: '13',
        },
      ],
    });
    return () => (
      <>
        <div class='content'>
          <div class='wrap'>
            {data.list.map(item => {
              return (
                <Pack>
                  <Text></Text>
                </Pack>
              );
            })}
          </div>
        </div>
      </>
    );
  },
});
