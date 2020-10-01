<script>
  import { getContext } from 'svelte';
  // import {key} from './key';
  import { key } from 'svelte-forms-lib/lib/components/key';
  export let name;
  export let type = 'text';
  const { form, handleChange } = getContext(key);
</script>

<textarea
  {name}
  {type}
  value={$form[name]}
  on:change={handleChange}
  on:blur={handleChange}
  {...$$props} />
