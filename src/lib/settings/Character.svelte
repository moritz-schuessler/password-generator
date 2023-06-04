<script>
    export let label
    export let characters
</script>

<label for='character'>
    {label}
</label>
<input
    type="text"
    id='character'
    bind:value={characters}
>
