<script lang="ts">
  import Video from './Video.svelte';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import type { LandingPage } from '../model';

  let { portableText }: {portableText: CustomBlockComponentProps<{componentOrItem: {_ref: string}}, {element: LandingPage["elements"]["body_copy"]}>} = $props();
  
  const item = $derived(
    portableText.global.context?.element?.linkedItems?.find(
      (item) => item.system.codename === portableText.value.componentOrItem._ref
    )
  );
</script>

{#if item}
  <Video video={item} />
{:else}
  <div>Did not find any item with codename {portableText.value.componentOrItem._ref}</div>
{/if}