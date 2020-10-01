<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  export let style = '';
  export let src = '';
  export let description = '';
  let visible = false;
  let mountedT = () => {};
  const toggle = () => {
    visible = !visible;
    mountedT();
  };
  onMount(() => {
    let defaultOverflow = document.body.style.overflow;
    mountedT = () => {
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = defaultOverflow;
      }
    };
  });
</script>

<style>
  .cover {
    position: fixed;
    z-index: 1000000 !important;
    background-color: rgba(43, 39, 45, 0.87);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .svelte-lightbox-overlay {
    position: relative;
    z-index: 1000001;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .svelte-lightbox {
    position: absolute;
    background-color: transparent;
    max-width: 90%;
    max-height: 90%;
    z-index: 1000002;
  }
</style>

<div class="static cursor-zoom-in" on:click={toggle}>
  <slot />
</div>

{#if visible}
  <div class="cover">
    <div
      class="svelte-lightbox-overlay"
      {style}
      transition:fade={{ duration: 500 }}
      on:click={toggle}>
      <div class="svelte-lightbox" on:click={toggle}>
        <div class="flex justify-end">
          <button
            on:click={toggle}
            class="text-white hover:text-gray-400 text-5xl tutti-transitions"
            size="xs">
            ×
          </button>
        </div>
        <div class="max-h-screen overflow-scroll">
          <img class="overflow-auto" {src} alt={description} />
          <p class="text-center text-white">{description}</p>
        </div>
      </div>
    </div>
  </div>
{/if}
