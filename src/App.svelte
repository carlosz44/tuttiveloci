<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Nosotros from './components/Nosotros.svelte';
  let menuItems = [
    { link: '#nosotros', name: 'Nosotros' },
    { link: '#carta', name: 'Carta' },
    { link: '#contacto', name: 'Contacto' },
  ];
</script>

<Header {menuItems} />
<Hero />
<main class="max-w-screen-xl mx-auto">
  <Nosotros />
  <!-- TODO: Layout? -->
  <!-- TODO: Nosotros?  -->
  <!-- TODO: Carta -->
  <!-- TODO: Contacto -->
  <!-- TODO: Footer -->

</main>
