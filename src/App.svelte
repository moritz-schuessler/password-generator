<script>
import PasswordWrapper from "./lib/password/PasswordWrapper.svelte";
import Password from "./lib/password/Password.svelte";
import SettingsWrapper from "./lib/settings/SettingsWrapper.svelte";
import Setting from "./lib/settings/Setting.svelte";
import Slider from "./lib/settings/Slider.svelte";
</script>

<main>
    <SettingsWrapper>
        <Setting>
            <Slider />
        </Setting>
    </SettingsWrapper>
    <PasswordWrapper>
        <Password />
    </PasswordWrapper>
</main>


<style>
    main {
        display: flex;
    }

</style>
