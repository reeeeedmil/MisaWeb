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
    return Infinity
  }

  const startDateTime = new Date('2050-01-10T03:40:46.000')
  let currentTime = $state(Date.now());


  const timeElapsed = $derived(
      startDateTime.getTime() - currentTime,
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

<div>
   {dd} dní, {hh} hodin (± 1), {mm} minut a {ss} sekund
</div>
