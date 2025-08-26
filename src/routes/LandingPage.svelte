<script lang="ts">
  import { DeliveryError } from "@kontent-ai/delivery-sdk";
  import HeroImage from "../components/HeroImage.svelte";
  import PageContent from "../components/PageContent.svelte";
  import PageSection from "../components/PageSection.svelte";
  import "../index.css";
  import type { LandingPage } from "../model";
  import { createClient } from "../utils/client";
  import { appConfig } from "../lib/stores/app.svelte";
  import type { Replace } from "../utils/types";
  import FeaturedContent from "../components/FeaturedContent.svelte";
  import Layout from "../components/Layout.svelte";
  import SolutionListItem from "../components/SolutionListItem.svelte";

  let landingPage = $state<Replace<LandingPage, { elements: Partial<LandingPage["elements"]> }> | null>(null);
  let loading = $state(true);

  $effect(() => {
    createClient(appConfig.environmentId, appConfig.apiKey)
      .items()
      .type("landing_page")
      .limitParameter(1)
      .toPromise()
      .then(res => {
        landingPage = res.data.items[0] as Replace<LandingPage, { elements: Partial<LandingPage["elements"]> }> ?? null;
        loading = false;
      })
      .catch((err) => {
        if (err instanceof DeliveryError) {
          landingPage = null;
        } else {
          throw err;
        }
        loading = false;
      });
  });
</script>

<Layout>
  {#if loading}
    <div class="grow flex items-center justify-center">
      <div class="animate-spin border-solid border-8 border-[#f3f3f3] rounded-full border-t-burgundy w-32 h-32"></div>
    </div>
  {:else if !landingPage || !Object.entries(landingPage.elements).length}
    <div class="grow"></div>
  {:else}
    <div class="grow">
      <PageSection color="bg-creme">
        <HeroImage
          data={{
            headline: landingPage.elements.headline,
            subheadline: landingPage.elements.subheadline,
            heroImage: landingPage.elements.hero_image,
          }}
        />
      </PageSection>
      <PageSection color="bg-white">
        <SolutionListItem />
      </PageSection>
      {#if landingPage.elements.body_copy}
        <PageSection color="bg-white">
          <PageContent body={landingPage.elements.body_copy} />
        </PageSection>
      {/if}
      {#if landingPage.elements.featured_content}
        <FeaturedContent featuredContent={landingPage.elements.featured_content} />
      {/if}
    </div>
  {/if}
</Layout>