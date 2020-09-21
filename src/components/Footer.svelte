<script>
  import Icon from 'svelte-awesome';
  import { facebook, instagram, whatsapp, envelopeO } from 'svelte-awesome/icons';
  let ig = "";
  let fb = "";
  let wa = "";
</script>

<footer class="main-layout">
  <nav class="text-center p-4">
    <a href={fb} target="_blank"><Icon data={facebook}/></a>
    <a href={ig} target="_blank"><Icon data={instagram}/></a>
    <a href={wa} target="_blank"><Icon data={whatsapp}/></a>
    <a href={wa} target="_blank"><Icon data={envelopeO}/></a>
  </nav>
  <p class="text-center p-4">Desarrollado por <a href="https://carlosamoros.com" target="_blank">thecatlab.co</a></p>
</footer>

