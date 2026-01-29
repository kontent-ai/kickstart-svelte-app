<script lang="ts">
import type { Elements } from "@kontent-ai/delivery-sdk";

let {
  data,
}: {
  data: {
    headline?: Elements.TextElement;
    subheadline?: Elements.TextElement;
    heroImage?: Elements.AssetsElement;
  };
} = $props();
</script>

<div class="flex flex-col xl:flex-row pt-10 xl:pt-[104px] pb-10 xl:pb-[160px] gap-5">
  <div class="xl:basis-1/2">
    {#if data.headline}
      <h1 class="text-center xl:text-left font-family-libre text-[64px] md:text-[94px] text-burgundy font-bold leading-[64px] md:leading-[78px]">
        {data.headline.value}
      </h1>
    {/if}
    {#if data.subheadline}
      <p class="text-center xl:text-left font-family-sans text-xl text-gray">{data.subheadline.value}</p>
    {/if}
  </div>
  <div class="xl:basis-1/2">
    {#if data.heroImage?.value?.[0]?.url}
      <img
        class="object-cover mx-auto"
        width={670}
        height={440}
        src={`${data.heroImage.value[0].url}?auto=format&w=800`}
        alt={data.heroImage.value[0].description ?? "image-alt"}
      />
    {/if}
  </div>
</div>