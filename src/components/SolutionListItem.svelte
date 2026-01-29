<script lang="ts">
import { DeliveryError } from "@kontent-ai/delivery-sdk";
import { appConfig } from "../lib/stores/app.svelte";
import type { SolutionType } from "../model";
import { createClient } from "../utils/client";

let solutions = $state<ReadonlyArray<SolutionType> | null>(null);

$effect(() => {
  createClient(appConfig.environmentId, appConfig.apiKey)
    .items<SolutionType>()
    .type("solution")
    .toPromise()
    .then((res) => (solutions = res.data.items))
    .catch((err) => {
      if (err instanceof DeliveryError) {
        solutions = null;
      } else {
        throw err;
      }
    });
});
</script>

{#if solutions && solutions.length > 0}
  <h2 class="text-azure text-[40px] md:text-[64px] leading-[54px] w-full p-8 text-center">
    Solutions Tailored to You
  </h2>
  {#each solutions as solution (solution.system.id)}
    <div class="flex flex-col xl:flex-row pt-4 pb-4 gap-10 justify-center items-center">
      <div class="pr-4">
        {#if solution.elements.image && solution.elements.image.value[0]?.url}
          <img
            width={640}
            height={420}
            src={`${solution.elements.image.value[0].url}?auto=format&w=800`}
            alt={solution.elements.image.value[0].description ?? "image alt"}
            class="object-cover rounded-lg static"
          />
        {/if}
      </div>
      <div class="xl:w-1/2">
        {#if solution.elements.headline}
          <h2 class="text-left text-5xl font-semibold text-burgundy">
            {solution.elements.headline.value}
          </h2>
        {/if}
        {#if solution.elements.introduction}
          <div class="text-left text-gray-700 mt-4 text-xl">
            {solution.elements.introduction.value}
            <p>
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="#" class="text-burgundy text-xl mt-6 font-semibold underline">
                Read more
              </a>
            </p>
          </div>
        {/if}
      </div>
    </div>
  {/each}
{/if}