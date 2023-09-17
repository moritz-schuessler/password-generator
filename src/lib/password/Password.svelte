<script>
    import { length, characters } from "../stores.js";

    $: password = generatePassword($length, $characters)

    const generatePassword = (length, characters) => {
        let temp = '';
        for (let i = 0; i < length; i++) {
            const charAt = Math.floor(Math.random() * characters.length);
            temp += characters.charAt(charAt);
        }
        return temp
    }
</script>

<div class="wrapper">
    <div class="password">
        {password}
    </div>
    <div class="actions">
        <button
                class="newPassword"
                on:click={() => password = generatePassword($length, $characters)}
        >
            Generate new Password
        </button>
        <button
                class="copyPassword"
                on:click={() => navigator.clipboard.writeText(password)}
        >
            Copy Password
        </button>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
        width: 100%;
        padding: 1rem;
        gap: 2rem;

        background-color: hsla(var(--lightColor), .1);

        border-radius: 4px;
    }

    .actions {
        display: flex;

        gap: 1rem;
    }

    .password {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
        padding: 1rem;

        border-radius: 4px 0 0 4px;

        overflow-wrap: anywhere;
        text-align: center;
        hyphens: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        color: hsl(var(--lightColor));
        background-color: hsla(var(--darkColor), .9);

        border-radius: 4px;

        width: 100%;
        padding: 1rem;
    }

    button:hover, button:active {
        background-color: hsla(var(--darkColor), .6);
    }
</style>



