<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Nosotros from './components/Nosotros.svelte';
  import Carta from './components/Carta.svelte';
  import Contacto from './components/Contacto.svelte';
  import Footer from './components/Footer.svelte';
  let y = 0;
  let menuItems = [
    { link: '#nosotros', name: 'Nosotros' },
    { link: '#carta', name: 'Carta' },
    { link: '#contacto', name: 'Contacto' },
  ];
</script>

<svelte:window bind:scrollY={y}/>

<Header {menuItems} {y} />
<Hero />
<main>
  <Nosotros  />
  <Carta />
  <Contacto />
</main>
<Footer />
