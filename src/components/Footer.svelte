<script>
  import Icon from 'svelte-awesome';
  import { facebook, instagram, whatsapp, paperPlaneO } from 'svelte-awesome/icons';
  let ig = "";
  let fb = "";
  let wa = "";
  let mail = "";
</script>

<footer class="main-layout">
  <nav class="flex flex-row text-center justify-center p-4 text-white">
    <a href={fb} target="_blank" class="social-button-bg"><Icon class="footer-icons" data={facebook}/></a>
    <a href={ig} target="_blank" class="social-button-bg"><Icon class="footer-icons" data={instagram}/></a>
    <a href={wa} target="_blank" class="social-button-bg"><Icon class="footer-icons" data={whatsapp}/></a>
    <a href={mail} target="_blank" class="social-button-bg"><Icon class="footer-icons" data={paperPlaneO}/></a>
  </nav>
  <p class="text-center p-4">Desarrollado por <a href="https://carlosamoros.com" target="_blank">thecatlab.co</a></p>
</footer>

