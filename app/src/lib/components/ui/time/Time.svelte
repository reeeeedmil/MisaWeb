<script lang="ts">
    import { onMount } from "svelte";

  const getSeconds = (
    time: number,
  ): number => {
    return Math.floor(time / 1000 % 60);
  }

  const getMinutes = (
    time: number,
  ): number => {
    return Math.floor(time / 1000 / 60) % 60
  }

  const getHours = (
    time: number,
  ): number => {
    return Math.floor(time / 1000 / 60 / 60) % 24
  }

  const getDays = (
    time: number,
  ): number => {
    return Math.floor(time / 1000 / 60 / 60 / 24)
  }

  const startDateTime = new Date('2024-06-01T13:04:47.000')
  let currentTime = $state(Date.now());

  const timeElapsed = $derived(
     currentTime - startDateTime.getTime(),
  );

  let ss = $derived(getSeconds(timeElapsed));
  let mm = $derived(getMinutes(timeElapsed));
  let hh = $derived(getHours(timeElapsed));
  let dd = $derived(getDays(timeElapsed));

	onMount(() => {
		const interval = setInterval(() => {
			currentTime = Date.now();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{dd} dní, {hh} hodin (± 1), {mm} minut a {ss} sekund
