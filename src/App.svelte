<script>
  import Nav from './components/nav.svelte';
  import Button from './components/Button.svelte';
  let menuItems = [
    { link: '#inicio', name: 'Inicio' },
    { link: '#nosotros', name: 'Nosotros' },
    { link: '#carta', name: 'Carta' },
    { link: '#contacto', name: 'Contacto' },
  ];
</script>

<Nav {menuItems} />
<Button text="Hacer Pedido" />
<main class="max-w-screen-xl mx-auto">
  <h1>Tutti</h1>
  <p>Veloci</p>

</main>
