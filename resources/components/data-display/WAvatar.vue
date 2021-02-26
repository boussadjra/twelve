<template>
  <div
    :class="classes"
    class="flex items-end justify-end w-avatar text-primary-600 min-w-max"
  >
    <!-- -->
    <img :class="classes" v-if="!$slots.default" :src="src" alt="" />
    <div
      v-else-if="$slots.default"
      class="flex items-center self-center justify-center w-full text-4xl font-semibold"
    >
      <slot></slot>
    </div>

    <div class="absolute">
      <slot name="badge" :w-avatar="{ size, shape }"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { keyable } from "@/@types/global";
import shaped from "@/mixins/shaped";
import sizeable from "@/mixins/sizeable";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "w-avatar",

  props: {
    src: {
      type: String,
      default: "",
    },
  },
  mixins: [shaped, sizeable],
  data() {
    return {};
  },

  computed: {
    classes(): Array<string | keyable> {
      return [
        `${this.sizes[this.size]}`,
        `${this.size}`,
        this.shapes[this.shape],
        "relative",
      ];
    },
  },
});
</script>

<style >
.w-avatar.sm {
  min-width: 64px;
}
</style>
