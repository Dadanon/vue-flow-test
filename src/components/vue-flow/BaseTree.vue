<template>
  <VueFlow
    :nodes="nodes"
    :edges="edges"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
  >
    <Background bg-color="#eee" pattern-color="#333" :gap="16" />
    <MiniMap />
    <Controls position="top-right" />
  </VueFlow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { initialEdges, initialNodes } from './initial-elements'

const { onPaneReady } = useVueFlow()

const nodes = ref(initialNodes)

const edges = ref(initialEdges)

onPaneReady(({ fitView }) => {
  fitView()
})
</script>
