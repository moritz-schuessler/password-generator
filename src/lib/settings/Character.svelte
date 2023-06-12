<script>
    export let characters

    const toggle = (event) => {
        const characterIndex = characters.findIndex((character) => character.character === event.target.id)
        characters[characterIndex].isToggled = !characters[characterIndex].isToggled
    }
</script>

<div class="wrapper">
    {#each characters as {character, isToggled}}
        <div id={character} on:click={toggle} class="character {isToggled?'enabled':'disabled'}">
            {character}
        </div>
    {/each}
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: flex-start;
        column-gap: 5px;
    }

    .character {
        color: #e1e1e1;
        background-color: #191919  ;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
    }

    .enabled {
        background-color: rgb(25,25,25,0.8);
    }

    .disabled {
        background-color: rgb(25,25,25,0.3);
        color: rgb(25,25,25);
    }

    input {
        color: rgb(25,25,25);
        background-color: rgb(25,25,25,0.4);

        border: none;
        border-radius: 3px;

        padding: 5px;

        width: 100%;
    }
</style>

