<script lang="ts">
  import Video from './Video.svelte';
  
  let { portableText, context } = $props();
  
  const item = $derived(
    context?.element?.linkedItems?.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.system.codename === portableText.componentOrItem._ref
    )
  );
</script>

{#if item}
  <Video video={item} />
{:else}
  <div>Did not find any item with codename {portableText.componentOrItem._ref}</div>
{/if}