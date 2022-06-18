export enum Style {
    dark, aggressive, chill, happy
}

export interface Track {
    styles: Style[];
    source: string;
    name: string;
    picture?: string;
}