import {derived, writable} from 'svelte/store';

export const length = writable(144);
export const lowerCases = writable([
    {character: 'a', isToggled: true},
    {character: 'b', isToggled: true},
    {character: 'c', isToggled: true},
    {character: 'd', isToggled: true},
    {character: 'e', isToggled: true},
    {character: 'f', isToggled: true},
    {character: 'g', isToggled: true},
    {character: 'h', isToggled: true},
    {character: 'i', isToggled: true},
    {character: 'j', isToggled: true},
    {character: 'k', isToggled: true},
    {character: 'l', isToggled: true},
    {character: 'm', isToggled: true},
    {character: 'n', isToggled: true},
    {character: 'o', isToggled: true},
    {character: 'p', isToggled: true},
    {character: 'q', isToggled: true},
    {character: 'r', isToggled: true},
    {character: 's', isToggled: true},
    {character: 't', isToggled: true},
    {character: 'u', isToggled: true},
    {character: 'v', isToggled: true},
    {character: 'w', isToggled: true},
    {character: 'x', isToggled: true},
    {character: 'y', isToggled: true},
    {character: 'z', isToggled: true},
]);

export const upperCases = writable([
    {character: 'A', isToggled: true},
    {character: 'B', isToggled: true},
    {character: 'C', isToggled: true},
    {character: 'D', isToggled: true},
    {character: 'E', isToggled: true},
    {character: 'F', isToggled: true},
    {character: 'G', isToggled: true},
    {character: 'H', isToggled: true},
    {character: 'I', isToggled: true},
    {character: 'J', isToggled: true},
    {character: 'K', isToggled: true},
    {character: 'L', isToggled: true},
    {character: 'M', isToggled: true},
    {character: 'N', isToggled: true},
    {character: 'O', isToggled: true},
    {character: 'P', isToggled: true},
    {character: 'Q', isToggled: true},
    {character: 'R', isToggled: true},
    {character: 'S', isToggled: true},
    {character: 'T', isToggled: true},
    {character: 'U', isToggled: true},
    {character: 'V', isToggled: true},
    {character: 'W', isToggled: true},
    {character: 'X', isToggled: true},
    {character: 'Y', isToggled: true},
    {character: 'Z', isToggled: true},
]);

export const numbers = writable([
    {character: '0', isToggled: true},
    {character: '1', isToggled: true},
    {character: '2', isToggled: true},
    {character: '3', isToggled: true},
    {character: '4', isToggled: true},
    {character: '5', isToggled: true},
    {character: '6', isToggled: true},
    {character: '7', isToggled: true},
    {character: '8', isToggled: true},
    {character: '9', isToggled: true},
]);

export const specials = writable([
    {character: '!', isToggled: true},
    {character: '#', isToggled: true},
    {character: '$', isToggled: true},
    {character: '%', isToggled: true},
    {character: '&', isToggled: true},
    {character: '(', isToggled: true},
    {character: ')', isToggled: true},
    {character: '*', isToggled: true},
    {character: '+', isToggled: true},
    {character: ',', isToggled: true},
    {character: '-', isToggled: true},
    {character: '.', isToggled: true},
    {character: '/', isToggled: true},
    {character: ':', isToggled: true},
    {character: ';', isToggled: true},
    {character: '=', isToggled: true},
    {character: '?', isToggled: true},
    {character: '@', isToggled: true},
    {character: '[', isToggled: true},
    {character: '\\', isToggled: true},
    {character: ']', isToggled: true},
    {character: '^', isToggled: true},
    {character: '_', isToggled: true},
    {character: '{', isToggled: true},
    {character: '|', isToggled: true},
    {character: '}', isToggled: true},
    {character: '~', isToggled: true},
]);

export const characters = derived(
    [lowerCases, upperCases, numbers, specials],
    ([$lowerCases, $upperCases, $numbers, $specials]) => {
         const filteredCharacters = $lowerCases
            .concat($upperCases, $numbers, $specials)
            .filter(character => character.isToggled)

        let characters = ''
        filteredCharacters.forEach(({character}) => characters += character)
        return characters
    }
)

