export interface HeaderContents {
    color: string, 
    logo: string,
    isInternal: boolean,
    styles?: {
        themeheaderColor: string
    }
}

export interface ButtonContents {
    label: string,
    bgColor: string,
    color: string,
    width?: string
}