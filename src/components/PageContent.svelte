<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { LandingPage } from "../model";
  import { transformToPortableText } from "@kontent-ai/rich-text-resolver";
  import { defaultPortableRichTextComponents } from "../utils/richtext";
  
  let { body }: { body: LandingPage["elements"]["body_copy"] } = $props();
  
  const portableText = $derived(transformToPortableText(body.value));
  
  const components = $derived({
    ...defaultPortableRichTextComponents,
    // types: {
    //   componentOrItem: ComponentOrItem
    // }
  });
</script>

<div class="pt-[104px] pb-40 flex flex-col gap-8 portable-text-wrapper">
  <PortableText value={portableText} {components} context={{ element: body }} />
</div>

