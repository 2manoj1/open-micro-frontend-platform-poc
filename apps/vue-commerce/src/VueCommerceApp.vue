<script setup lang="ts">
import { computed, ref } from 'vue';
import { emitMicroAppEvent } from '@micro-frontend/platform-sdk/client';

const segments = [
  { label: 'Enterprise', revenue: 184200, orders: 126, health: 96 },
  { label: 'Marketplace', revenue: 98300, orders: 418, health: 88 },
  { label: 'Self serve', revenue: 42100, orders: 1204, health: 82 },
];

const selected = ref(segments[0].label);
const activeSegment = computed(() => segments.find((segment) => segment.label === selected.value) ?? segments[0]);

function publishInsight() {
  emitMicroAppEvent('commerce:segment-selected', 'vue-commerce', {
    segment: activeSegment.value.label,
    revenue: activeSegment.value.revenue,
  });
}
</script>

<template>
  <section class="micro-app-container">
    <header class="micro-app-header">
      <span>Vue Commerce</span>
      <h1>Commerce Operations</h1>
      <p>Vue 3 runtime island for orders, conversion, and revenue signals.</p>
    </header>

    <div class="commerce-toolbar" role="tablist" aria-label="Commerce segments">
      <button
        v-for="segment in segments"
        :key="segment.label"
        :class="{ active: selected === segment.label }"
        type="button"
        @click="selected = segment.label"
      >
        {{ segment.label }}
      </button>
    </div>

    <div class="commerce-grid">
      <article>
        <span>Revenue</span>
        <strong>${{ activeSegment.revenue.toLocaleString() }}</strong>
      </article>
      <article>
        <span>Orders</span>
        <strong>{{ activeSegment.orders.toLocaleString() }}</strong>
      </article>
      <article>
        <span>Health</span>
        <strong>{{ activeSegment.health }}%</strong>
      </article>
    </div>

    <div class="commerce-panel">
      <div>
        <span>SDK Event</span>
        <strong>commerce:segment-selected</strong>
        <p>Vue app emits async events through the shared platform SDK.</p>
      </div>
      <button type="button" @click="publishInsight">Publish insight</button>
    </div>
  </section>
</template>
