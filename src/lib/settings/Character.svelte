<script>
    export let characters

    const toggle = (event) => {
        const characterIndex = characters.findIndex((character) => character.character === event.target.id)
        characters[characterIndex].isToggled = !characters[characterIndex].isToggled
    }
</script>

<div class="wrapper">
    {#each characters as {character, isToggled}}
        <button id={character} on:click={toggle} class="character {isToggled?'enabled':'disabled'}">
            {character}
        </button>
    {/each}
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 5px;
    }

    .character {
        all: unset;

        color: hsl(var(--lightColor));
        background-color: hsla(var(--darkColor), 1);

        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;

        border-radius: 3px;
    }

    .character:hover {
        background-color: hsla(var(--darkColor), .6);
    }

    .enabled {
        background-color: hsla(var(--darkColor), .9);
    }

    .disabled {
        background-color: hsla(var(--darkColor), .3);
        color: hsla(var(--lightColor));
    }
</style>

