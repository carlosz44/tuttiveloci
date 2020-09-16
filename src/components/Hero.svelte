<script>
  import Button from './Button.svelte';
  let src = 'images/tutti-veloci-logo.png';
	let name = 'Tutti Veloci';
</script>

<section class="-mt-hero-m lg:-mt-hero h-screen bg-bottom sm:bg-top bg-cover 
  bg-no-repeat flex flex-col p-2 justify-center items-center bg-hero">
  <!-- TODO: Parallax, chevron hacia siguiente sección, línea al hacer click al botón. RNF: animación ingreso -->
  <img {src} alt={name} class="w-3/4 lg:w-1/2 mb-16 sm:mb-0" />
  <Button text="Hacer Pedido" />


</section>