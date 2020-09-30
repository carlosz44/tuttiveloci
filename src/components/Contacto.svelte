<script>
  import Form from './Form.svelte';
  let img = 'images/contact.png';
  let src = 'images/chicken-pie.jpg';
  let alt = 'Realiza tu pedido';
</script>

<section id="contacto" class="main-layout mx-auto py-20 flex flex-col items-center">
  <img src={img} alt="Contáctanos" class="w-32 pb-8">
  <h2>Contáctanos</h2>
  <div class="flex flex-row items-center w-full px-4 py-8">
    <div class="hidden md:block md:w-1/2 px-4">
      <img {src} alt={alt} />
    </div>
    <div class="w-full md:w-1/2 md:px-8">
      <Form />
    </div>
  </div>

</section>
