<script>
  export let menuItems = [];
  let src = 'images/logo.png';
	let name = 'Tutti Veloci';
</script>

<header class="bg-transparent shadow-sm p-1">
  <!-- TODO: cambio de transparent a fondo con el scroll -->
  <div class="max-w-screen-xl mx-auto px-8 hidden md:flex items-center justify-between">
    <div class="flex items-center mr-6">
      <a href="#inicio" class="w-16">
        <img {src} alt={name} />
      </a>
    </div>
    <nav class="flex items-center md:w-auto">
      {#each menuItems as item}
        <a
          href={item.link}
          class="uppercase text-tutti-text transition duration-500
          hover:text-tutti-blue ml-16">
          {item.name}
        </a>
      {/each}
    </nav>
  </div>
  <div class="md:hidden max-w-screen-xl mx-auto flex items-center justify-center">
    <div class="flex items-center">
      <a href="#inicio" class="w-16 lg:w-24">
        <img {src} alt={name} />
      </a>
    </div>
    <!-- <nav class="hidden md:flex items-center md:w-auto">
      {#each menuItems as item}
        <a
          href={item.link}
          class="block mt-4 md:inline-block md:mt-0 text-tutti-text
          hover:text-tutti-blue mr-4">
          {item.name}
        </a>
      {/each}
    </nav> -->
  </div>
</header>
