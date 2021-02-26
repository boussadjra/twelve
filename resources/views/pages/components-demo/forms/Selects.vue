<template>
  <w-grid gapY="16">
    <div class="sub-title-1">Selects :</div>
    <w-grid :gapY="4">
      <w-grid :gapY="3">
        <div class="pb-4">Simple select :</div>
        <w-grid :gap-x="4" :cols="3">
         <w-select label="Fruits" :items="fruits" />
        </w-grid>
      </w-grid>
    </w-grid>
 
  </w-grid>
</template>

<script lang="ts">

import WSelect from "@/components/form/WSelect";
import WGrid from "@/components/layout/Grid";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-none", "rounded", "rounded-full"],
      variants: ["danger", "success", "warning"],
      pwd:'',
      fruits:['Apple','Orange','Banana','Grape','Ananas']
    };
  },
  watch:{
 
  },
  methods: {
 
  },
  components: {
    WGrid,

WSelect
  },
});
</script>

<style></style>
