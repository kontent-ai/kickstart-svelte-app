<script lang="ts">
import { PortableText } from "@portabletext/svelte";
import type { LandingPageType } from "../model";
import { transformToPortableText } from "@kontent-ai/rich-text-resolver";
import { defaultPortableRichTextComponents } from "../utils/richtext";
import ComponentOrItem from "./ComponentOrItem.svelte";

let { body }: { body: LandingPageType["elements"]["body_copy"] } = $props();

const portableText = $derived(transformToPortableText(body.value));

const components = $derived({
  ...defaultPortableRichTextComponents,
  types: {
    componentOrItem: ComponentOrItem,
  },
});
</script>

<div class="pt-[104px] pb-40 flex flex-col gap-8 portable-text-wrapper">
  <PortableText value={portableText} {components} context={{ element: body }} />
</div>

