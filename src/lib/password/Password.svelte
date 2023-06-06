<script>
    import { length, characters } from "../stores.js";

    $: password = generatePassword($length, $characters)

    const generatePassword = (length, characters) => {
        let temp = '';
        console.log(characters)
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

        height: 100%;

        padding: 2rem;
        overflow-wrap: anywhere;
        text-align: center;
        hyphens: none;
    }

    .password {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
    }

    button {
        color: rgb(25,25,25);
        background-color: rgb(225,225,225);

        border: none;
        border-radius: 5px;

        padding: 1rem;
    }

    button:hover {
        background-color: rgba(225,225,225,0.8);
    }

    button:active {
        background-color: rgba(225,225,225,0.7);
    }
</style>



