<script lang="ts">
import Container from "./Container.svelte";
import Logo from "./Logo.svelte";
import Navigation from "./Navigation.svelte";
</script>

<Container>
  <div class="py-8 flex flex-col lg:flex-row gap-5 lg:gap-28 xl:gap-32 items-center">
    <Logo />
    <Navigation />
  </div>
</Container>