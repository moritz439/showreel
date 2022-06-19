export enum Style {
    dark, aggressive, chill, happy, hard
}

export interface Track {
    styles: Style[];
    source: string;
    name: string;
    picture?: string;
}