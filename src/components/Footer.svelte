<script>
  import Icon from 'svelte-awesome';
  import { facebook, instagram, whatsapp, envelopeO } from 'svelte-awesome/icons';
  let ig = "";
  let fb = "";
  let wa = "";
  let mail = "";
</script>

<footer class="main-layout">
  <nav class="flex flex-row text-center justify-center p-4 text-white">
    <div class="social-button-bg">
      <a href={fb} target="_blank"><Icon class="w-16" data={facebook}/></a>
    </div>
    <div class="social-button-bg">
      <a href={ig} target="_blank"><Icon class="h-16" data={instagram}/></a>
    </div>
    <div class="social-button-bg">
      <a href={wa} target="_blank"><Icon class="h-16" data={whatsapp}/></a>
    </div>
    <div class="social-button-bg">
      <a href={mail} target="_blank"><Icon class="h-16" data={envelopeO}/></a>
    </div>
  </nav>
  <p class="text-center p-4">Desarrollado por <a href="https://carlosamoros.com" target="_blank">thecatlab.co</a></p>
</footer>

