<script lang="ts">
import { isArticleType, isEventType, type LandingPageType } from "../model";
import Divider from "./Divider.svelte";
import FeaturedArticle from "./FeaturedArticle.svelte";
import FeaturedEvent from "./FeaturedEvent.svelte";
import PageSection from "./PageSection.svelte";

let { featuredContent }: { featuredContent: LandingPageType["elements"]["featured_content"] } =
  $props();

const featuredArticle = $derived(featuredContent.linkedItems.find(isArticleType));
const featuredEvent = $derived(featuredContent.linkedItems.find(isEventType));
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