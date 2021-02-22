<template>
  <div class="content">
    <div class="wrap" @drop="drop" @dragover="dragover">
      <Pack
        v-for="(item, index) in components"
        v-bind:key="index"
        :active="item.uuid == activeComponentUuid"
        :uuid="item.uuid"
        @click="PackClick(item.uuid)"
        :style="item.style"
      >
        <component :is="item.name"></component>
      </Pack>
      <MarkLine></MarkLine>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, resolveComponent } from 'vue';
import Pack from '../Pack/pack';
import MarkLine from './MarkLine';
import storeMager from '../../service/storeMager';
import { actionType } from '../../store/actionTypes';
import { GlobalConfig } from '../../config';
import { styleMerge } from './utils';
import { uuid } from '../../utils';
export default defineComponent({
  name: 'content',
  components: { Pack, MarkLine },
  setup() {
    let { store } = storeMager();
    const drop = (e: DragEvent) => {
      let data = e.dataTransfer?.getData('component') as string;
      let pathConfig = data?.split('_');
      let categories = pathConfig[0];
      let component = pathConfig[1];
      let targetArr = GlobalConfig[categories].filter((item) => {
        return (item.name = component);
      });
      targetArr[0].config.style = styleMerge(targetArr[0].config, {
        x: e.offsetX,
        y: e.offsetY,
      });
      let payload = {
        uuid: uuid(),
        name: pathConfig[1],
        ...targetArr[0].config,
      };
      store.dispatch(actionType.ADD, payload);
    };
    const dragover = (e: DragEvent) => {
      e.preventDefault();
    };
    const PackClick = (uuid) => {
      store.dispatch(actionType.CHANGEACT, uuid);
    };
    return {
      drop,
      dragover,
      resolveComponent,
      PackClick,
      components: computed(() => store.state.components),
      activeComponentUuid: computed(() => store.state.activeComponentUuid),
    };
  },
});
</script>
<style lang="scss" >
@import './content.scss';
</style>
