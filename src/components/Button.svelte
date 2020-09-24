<script>
  export let text = '';
  export let type;
</script>

<style>
  .btn-outline {
    @apply py-4 px-16 font-open transition duration-500;
  }

  .btn-outline-color {
    @apply bg-tutti-blue text-white rounded-full;
  }

  .btn-outline-color:hover {
    @apply bg-tutti-grey;
  }
</style>

<button class="btn-outline btn-outline-color" type={type} >{text}</button>
