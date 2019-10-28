import { Character } from "./character.model";

export type TableProps = {
    CharactersData: Character[],
    RemoveCharacter: (index: number) => void,
}
export type AppState = {
    Characters: Character[]
}

