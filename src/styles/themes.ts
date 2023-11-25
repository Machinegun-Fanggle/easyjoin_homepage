import { css, CSSProp } from "styled-components"

export const Sizes = {
    SMALL: 576,
    MEDIUM: 769,
    LARGE: 1200,
    EXTRA_LARGE: 1920,
} as const

// eslint-disable-next-line prettier/prettier
export type Sizes = (typeof Sizes)[keyof typeof Sizes]

const sizes: { [key: string]: number } = {
    small: Sizes.SMALL,
    medium: Sizes.MEDIUM,
    large: Sizes.LARGE,
    extra_large: Sizes.EXTRA_LARGE,
}

type BackQuoteArgs = string[]

interface Media {
    small: (..._: BackQuoteArgs) => CSSProp | undefined
    medium: (..._: BackQuoteArgs) => CSSProp | undefined
    large: (..._: BackQuoteArgs) => CSSProp | undefined
    extra_large: (..._: BackQuoteArgs) => CSSProp | undefined
}

const media: Media = {
    small: (..._: BackQuoteArgs) => undefined,
    medium: (..._: BackQuoteArgs) => undefined,
    large: (..._: BackQuoteArgs) => undefined,
    extra_large: (..._: BackQuoteArgs) => undefined,
}

Object.keys(sizes).reduce((acc: Media, label: string) => {
    switch (label) {
        case "extra_large":
            acc.extra_large = (...args: BackQuoteArgs) => css`
                @media only screen and (min-width: ${sizes.large}px) {
                    ${args}
                }
            `
            break
        case "large":
            acc.large = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.large}px) and (min-width: ${sizes.medium}px) {
                    ${args}
                }
            `
            break
        case "medium":
            acc.medium = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.medium}px) and (min-width: ${sizes.small}px) {
                    ${args}
                }
            `
            break
        case "small":
            acc.small = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.small}px) {
                    ${args}
                }
            `
            break
        default:
            break
    }
    return acc
}, media)

const color = {
    Primary: "#ffe1e5",
    Secondary: "#00ff00",
    Black: "#3a3a3a",
    White: "#eaeaea",
}

const theme = {
    color,
    media,
    sizes,
}

export default theme
