<script>
  import Modal from './ui/Modal.svelte';
  let img = 'images/menu.png';
  let src = 'images/menu-table.png';
  let modalSrc = 'images/carta-tutti-full.jpg';
</script>

<section id="carta" class="bg-cart bg-cover lg:bg-bottom pt-20 flex flex-col items-center">
  <img src={img} alt="Nuestra Carta" class="w-32 pb-8">
  <h2>Nuestra Carta</h2>
  <!-- TODO: Cambiar lightbox por modal -->
  
  <Modal description="tomatelá pelotudo..." src={modalSrc}>
    <img {src} alt="Tabla Menú" class="w-1/2 mx-auto">
  </Modal>


</section>
