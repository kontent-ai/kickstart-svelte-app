<script lang="ts">
  import FeaturedComponentBase from "./FeaturedComponentBase.svelte";
  import type { Article } from "../model";
  import type { Replace } from "../utils/types";
  
  let { article }: { article: Replace<Article, { elements: Partial<Article["elements"]> }> } = $props();
  
  const shouldRender = $derived(Object.entries(article.elements).length > 0);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      day: "numeric",
    });
  };
</script>

{#if shouldRender}
  <FeaturedComponentBase type="article" image={article.elements?.image}>
    <div>
      {#if article.elements.title}
        <h2 class="text-center xl:text-left text-5xl font-semibold text-burgundy">
          {article.elements.title.value}
        </h2>
      {/if}
      {#if article.elements.publish_date?.value}
        <p class="text-center xl:text-left text-gray-light mt-6 text-lg">
          Published on {formatDate(article.elements.publish_date.value)}
        </p>
      {/if}
      {#if article.elements.introduction}
        <p class="text-left text-gray-700 mt-4 text-xl">
          {article.elements.introduction.value}
        </p>
      {/if}
    </div>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="#" class="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
      Read more
    </a>
  </FeaturedComponentBase>
{/if}