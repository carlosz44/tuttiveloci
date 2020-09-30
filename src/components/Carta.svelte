<script>
  import { Lightbox } from 'svelte-lightbox';
  let img = 'images/menu.png';
  let src = 'images/menu-table.png';
</script>

<section id="carta" class="bg-cart bg-cover lg:bg-bottom pt-20 flex flex-col items-center">
  <img src={img} alt="Nuestra Carta" class="w-32 pb-8">
  <h2>Nuestra Carta</h2>
  <!-- TODO: Cambiar lightbox por modal -->
  <Lightbox description="Escoge o muere puto">
    <img {src} alt="Tabla Menú" class="w-1/2 mx-auto">
  </Lightbox>
</section>
