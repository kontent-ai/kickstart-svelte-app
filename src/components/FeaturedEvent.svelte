<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import FeaturedComponentBase from "./FeaturedComponentBase.svelte";
  import type { EventType } from "../model";
  import { formatDate } from "../utils/date";
  import { transformToPortableText } from "@kontent-ai/rich-text-resolver";
  import type { Replace } from "../utils/types";
  
  let { event }: { event: Replace<EventType, { elements: Partial<EventType["elements"]> }> } = $props();
  
  const shouldRender = $derived(Object.entries(event.elements).length > 0);
  
  const portableText = $derived(
    event.elements.description?.value 
      ? transformToPortableText(event.elements.description.value) 
      : []
  );
  
  const dateRange = $derived(() => {
    if (!event.elements.start_date?.value) return "";
    
    const start = formatDate(event.elements.start_date.value as string);
    const end = event.elements.end_date?.value 
      ? ` - ${formatDate(event.elements.end_date.value as string)}`
      : "";
    
    return start + end;
  });
</script>

{#if shouldRender}
  <FeaturedComponentBase image={event.elements.image} type="event">
    <div>
      {#if event.elements.name}
        <h2 class="text-center xl:text-left text-5xl font-semibold text-burgundy">
          {event.elements.name.value}
        </h2>
      {/if}
      {#if event.elements.start_date}
        <p class="text-center xl:text-left text-gray-light mt-6 text-lg">
          {dateRange()}
        </p>
      {/if}
      <div class="flex mt-6 gap-2 justify-center xl:justify-normal">
        {#each event.elements.event_type?.value || [] as type (type.codename)}
          <div class="px-4 py-2 border-solid border rounded-full border-[#1D1D1B]">
            <p class="text-[#1D1D1B] text-lg">{type.name.toUpperCase()}</p>
          </div>
        {/each}
        {#each event.elements.event_topic?.value || [] as topic (topic.codename)}
          <div class="px-4 py-2 border-solid border rounded-full border-[#1D1D1B]">
            <p class="text-[#1D1D1B] text-lg">{topic.name.toUpperCase()}</p>
          </div>
        {/each}
      </div>
      {#if event.elements.description}
        <div class="mt-4 portable-text-wrapper">
          <PortableText
            value={portableText}
          />
        </div>
      {/if}
    </div>
    {#if event.elements.description?.value !== "<p><br></p>"}
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#" class="text-center xl:text-left text-burgundy text-xl mt-6 font-semibold underline">
        Read more
      </a>
    {/if}
  </FeaturedComponentBase>
{/if}

