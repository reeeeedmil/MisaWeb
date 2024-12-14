<script lang="ts">

  const dayTimeDiff = (
    oldTime: number,
    newTime: number,
  ): number => {
    let diff = newTime - oldTime;
    return diff;
  }

  const startDateTime = new Date('2024-06-01T13:04:47.000')
  const currentTime = Date.now();

  const timeElapsed = $state(
    dayTimeDiff(
      startDateTime.getTime(),
      currentTime,
    ),
  );

  let ms = $state(timeElapsed % 1000);
  let ss = $state(Math.floor(timeElapsed / 1000 % 60));
  let mm = $state(Math.floor(timeElapsed / 1000 / 60) % 60);
  let hh = $state(Math.floor(timeElapsed / 1000 / 60 / 60) % 24);
  let dd = $state(Math.floor(timeElapsed / 1000 / 60 / 60 / 24));
</script>

<div>
   {dd} dní, {hh} hodin (± 1), {mm} minut, {ss} sekund a {ms} milisekund
</div>
