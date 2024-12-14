<script>
  import '../app.css';
  let { children } = $props();
  import Header from '$lib/components/shared/header/Header.svelte';
</script>

<div class="w-screen h-screen bg-pink-orchid">
  <Header />
  {@render children()}
</div>
