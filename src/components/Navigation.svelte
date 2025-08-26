<script>
  const menuItems = ["Solutions", "Products", "Pricing", "Contact", "Our Company"];
</script>

<nav>
  <menu class="flex flex-col lg:flex-row gap-5 lg:gap-[60px] items-center list-none">
    {#each menuItems as name (name)}
      <li>
        <a href="#" class="text-xl leading-5 text-gray w-fit block hover:text-burgundy">{name}</a>
      </li>
    {/each}
  </menu>
</nav>