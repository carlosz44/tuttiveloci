<script>
  import Us from './ui/Us.svg';
  let src1 = 'images/about-1.jpg';
  let src2 = 'images/about-2.jpg';
	let textabout1 = 'Somos una empresa en crecimiento que nace de la pasión por el buen gusto y paladar. Apostamos por la máxima calidad usando los mejores ingredientes y adaptandonos a sus requisitos.';
	let textabout2 = 'Nos especializamos en brindarte la mejor carta con muchas opciones especiales para coffee breaks, desayunos corporativos, caterings corporativos y eventos especiales.';
</script>

<section id="nosotros" class="my-16 flex flex-col items-center">
  <div class="pb-8">
    <Us />
  </div>
  <h2>Nosotros</h2>
  <p class="my-8 px-4">Apasionados por brindarte la mejor experiencia gastronómica.</p>
  <div class="sm:flex p-4">
    <div class="sm:px-8 sm:w-1/2 pb-12 sm:pb-0">
      <img src={src1} alt="Sobre nosotros">
      <h3 class="my-8">¿Quiénes Somos?</h3>
      <p>{textabout1}</p>
    </div>
    <div class="sm:px-8 sm:w-1/2">
      <img src={src2} alt="Lo que hacemos">
      <h3 class="my-8">¿Qué Hacemos?</h3>
      <p>{textabout2}</p>
    </div>

  </div>
</section>