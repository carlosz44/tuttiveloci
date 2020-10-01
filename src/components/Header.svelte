<script>
  export let menuItems = [];
  export let y = 0;
  let src = 'images/logo.png';
  let name = 'Tutti Veloci';
</script>

<header class="fixed w-full p-1 tutti-transitions {y < 50 ? 'bg-transparent': 'bg-header shadow-sm'}">
  <div class="main-layout px-8 hidden md:flex items-center justify-between">
    <div class="flex items-center mr-6">
      <a href="#inicio" class="w-16">
        <img {src} alt={name} />
      </a>
    </div>
    <nav class="flex items-center md:w-auto">
      {#each menuItems as item}
        <a
          href={item.link}
          class="uppercase text-tutti-text tutti-transitions
          hover:text-tutti-orange ml-16">
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
          hover:text-tutti-orange mr-4">
          {item.name}
        </a>
      {/each}
    </nav> -->
  </div>
</header>
