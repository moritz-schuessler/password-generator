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

<div>
    {password}
</div>

<style>
    div {
        padding: 2rem;
        overflow-wrap: anywhere;
        text-align: center;
        hyphens: none;
    }
</style>



