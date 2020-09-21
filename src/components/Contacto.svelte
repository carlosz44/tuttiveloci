<script>
  let img = 'images/contact.png';
  let src = 'images/chicken-pie.jpg';
  let alt = 'Realiza tu pedido';
</script>

<section id="contacto" class="main-layout px-8 py-16 flex flex-col items-center mx-auto">
  <img src={img} alt="Contáctanos" class="w-32 pb-8">
  <h2>Contáctanos</h2>
  <div class="flex flex-row py-8">
    <div class="hidden md:block md:w-1/2 px-4">
      <img {src} alt={alt} />
    </div>
    <div class="w-full md:w-1/2 px-8">Formulario</div>
  </div>

</section>
