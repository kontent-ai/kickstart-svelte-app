<script lang="ts">
import type { Snippet } from "svelte";
import type { Elements } from "@kontent-ai/delivery-sdk";

let {
  type,
  image,
  children,
}: {
  type: "article" | "event";
  image?: Elements.AssetsElement;
  children: Snippet;
} = $props();

const img = $derived(image?.value[0]);
</script>

<div class="flex flex-col gap-5 xl:gap-16 xl:flex-row py-5 xl:py-[104px] items-center">
  <div class="basis-1/3">
    {#if img}
      <span class="px-3.5 py-1.5 absolute text-[12px] bg-azure text-white mt-4 ms-4 rounded-md font-bold">
        {type === "event" ? "FEATURED EVENT" : "FEATURED ARTICLE"}
      </span>
      <img
        width={640}
        height={420}
        src={img.url ? `${img.url}?auto=format&w=800` : ""}
        alt={img.description ?? "image alt"}
        class="object-cover rounded-lg static"
      />
    {/if}
  </div>
  <div class="basis-2/3 flex flex-col">
    {@render children?.()}
  </div>
</div>