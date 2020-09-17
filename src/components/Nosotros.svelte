<script>
  import Us from './ui/Us.svelte';
  let src = 'images/about-1.jpg';
	let name = 'Tutti Veloci';
	let textabout1 = 'Somos una empresa en crecimiento que nace de la pasión por el buen gusto y paladar. Apostamos por la máxima calidad usando los mejores ingredientes y adaptandonos a sus requisitos.';
</script>

<section class="my-16 flex flex-col items-center">
  <div class="pb-12">
    <Us />
  </div>
  <h2>Nosotros</h2>
  <p class="my-6">Apasionados por brindarte la mejor experiencia gastronómica.</p>
  <div class="sm:flex">
    <div class="px-8">
      <img {src} alt="About">
      <h3>¿Quiénes Somos?</h3>
      <p>{textabout1}</p>
    </div>

  </div>
</section>