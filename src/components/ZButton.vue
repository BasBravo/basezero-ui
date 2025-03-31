<template>
  <button
    class="z-button"
    :class="[
      `z-button--${color}`,
      { 'z-button--outline': variant === 'outline' }
    ]"
    @click="handleClick"
  >
    <span v-if="label">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'solid'
  },
  to: String,
  target: String
});

const handleClick = () => {
  if (props.to) {
    window.open(props.to, props.target || '_self');
  }
};
</script>

<style>
.z-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.z-button--primary {
  background-color: var(--ui-primary);
  color: white;
  border: 1px solid var(--ui-primary);
}

.z-button--neutral {
  background-color: #e5e7eb;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.z-button--outline {
  background-color: transparent;
}

.z-button--primary.z-button--outline {
  color: var(--ui-primary);
}

.z-button--neutral.z-button--outline {
  color: #1f2937;
}
</style>
