export interface StoryblokImage {
    id: number,
    alt: string
    name: string,
    focus: null,
    title: string
    filename: string
    copyright: string
    fieldtype: string

}

export interface StoryblokDocument {
    type: "doc",
    content: unknown[]
}
