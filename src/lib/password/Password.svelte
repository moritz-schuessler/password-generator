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
    <div class="password-wrapper">
        <div class="password">
            {password}
        </div>
        <button
            class="copyPassword"
            on:click={() => navigator.clipboard.writeText(password)}
        >
            Copy Password
        </button>
    </div>
    <button
            class="newPassword"
            on:click={() => password = generatePassword($length, $characters)}
    >
    Generate new Password
    </button>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        gap: 2rem;

        height: 100%;

        padding: 2rem;
        overflow-wrap: anywhere;
        text-align: center;
        hyphens: none;
    }

    .password-wrapper {
        display: flex;
        height: 100%;
    }

    .password {
        background-color: rgba(225,225,225,0.1);

        display: flex;
        flex-basis: 85%;
        align-items: center;
        justify-content: center;

        border-radius: 4px 0 0 4px;

        height: 100%;

        padding: 1rem;
    }

    button {
        color: rgb(25,25,25);
        background-color: rgb(225,225,225);

        border: none;
        border-radius: 4px;

        padding: 1rem;
    }

    button:hover {
        background-color: rgba(225,225,225,0.8);
    }

    button:active {
        background-color: rgba(225,225,225,0.7);
    }

    .copyPassword {
        flex-basis: 15%;

        border-radius: 0 4px 4px 0;

        height: 100%;
        width: 8rem;
        min-width: 4rem;
    }
</style>



