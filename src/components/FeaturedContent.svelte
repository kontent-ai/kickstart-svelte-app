<script lang="ts">
  import { isArticle, isEvent } from "../model";
  import type { LandingPage } from "../model";
  import PageSection from "./PageSection.svelte";
  import FeaturedArticle from "./FeaturedArticle.svelte";
  import FeaturedEvent from "./FeaturedEvent.svelte";
  import Divider from "./Divider.svelte";
  
  let { featuredContent }: { featuredContent: LandingPage["elements"]["featured_content"] } = $props();
  
  const featuredArticle = $derived(featuredContent.linkedItems.find(isArticle));
  const featuredEvent = $derived(featuredContent.linkedItems.find(isEvent));
</script>

{#if featuredArticle || featuredEvent}
  <h2 class="text-6xl text-azure text-center">
    Featured Content
  </h2>
{/if}

{#if featuredArticle}
  <PageSection color="bg-creme">
    <FeaturedArticle article={featuredArticle} />
  </PageSection>
{/if}

{#if featuredArticle && featuredEvent}
  <Divider />
{/if}

{#if featuredEvent}
  <PageSection color="bg-white">
    <FeaturedEvent event={featuredEvent} />
  </PageSection>
{/if}