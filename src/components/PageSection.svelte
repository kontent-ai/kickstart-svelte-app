<script lang="ts">
import type { Snippet } from "svelte";
import Container from "./Container.svelte";

let { children, color }: { children: Snippet; color: string } = $props();
</script>

<div class={color}>
  <Container>
    {@render children?.()}
  </Container>
</div>