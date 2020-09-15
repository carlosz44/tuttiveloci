<script>
  export let menuItems = [];
</script>

<nav class="bg-transparent p-6">
  <div class="max-w-screen-xl mx-auto flex items-center justify-between">
    <div class="flex items-center mr-6">
      Tutti Veloci
    </div>
    <div class="hidden md:flex items-center md:w-auto">
      <div class="text-sm">
        {#each menuItems as item}
          <a
            href={item.link}
            class="block mt-4 md:inline-block md:mt-0 text-tutti-text
            hover:text-tutti-blue mr-4">
            {item.name}
          </a>
        {/each}
      </div>
    </div>
    <div>
      Íconos Sociales
    </div>
  </div>
</nav>
