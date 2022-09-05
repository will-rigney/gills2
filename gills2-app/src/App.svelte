<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <!-- top div with logos in it -->
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div> -->

  <!-- header -->
  <h1>gills2</h1>

  <!--  div with component  -->
  <!-- <div class="card">
    <Counter />
  </div> -->

  <!-- little message - not in a div -->
  <!-- <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p> -->

  <!-- little message with class - not in a div -->
  <!-- <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->

  <div>
    <input class="text-entry" placeholder="please write or copy text here. Maximum 2000 words." />
    <input class="" placeholder="The name you wish to be credited by." />
  </div>
</main>

<!-- is it necessary that this use tailwind? -->

<style>
  .text-entry {
    display: block;
    /* margin:  */
  }
  
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>