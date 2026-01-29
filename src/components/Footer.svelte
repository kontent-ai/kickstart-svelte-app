<script lang="ts">
import Divider from "./Divider.svelte";
import Logo from "./Logo.svelte";
import Navigation from "./Navigation.svelte";
</script>

<footer class="w-full">
  <div class="flex flex-col items-center gap-10 py-20">
    <Logo />
    <Navigation />
  </div>
  <Divider />
  <p class="text-[16px] text-gray-light mx-auto w-fit py-[60px]">©2024 Karma Health, LLC. All Rights Reserved.</p>
</footer>