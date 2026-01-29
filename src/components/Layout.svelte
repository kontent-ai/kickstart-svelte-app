<script lang="ts">
import type { Snippet } from "svelte";
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";

let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  {@render children?.()}
  <Footer />
</div>