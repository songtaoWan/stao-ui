<script lang="ts" setup>
defineProps<{
  type?: 'default' | 'line';
  disabled?: boolean;
}>();
</script>

<template>
  <button
    name="button"
    type="button"
    autocomplete="off"
    class="s-button"
    :class="{
      's-button-line': type === 'line',
      's-button--disabled': disabled
    }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.s-button {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  width: 100%;
  height: 48px;
  background: #2f54eb;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  &:hover, &:focus {
    background-color: #5572e8;
  }
}

.s-button-line {
  color: #2f54eb;
  background: #fff;
  border: 1px solid #2f54eb;

  &:hover, &:focus {
    border-color: #95a4e0;
    color: #95a4e0;
    background-color: transparent;
  }
}

.s-button--disabled {
  cursor: not-allowed;
}
</style>
