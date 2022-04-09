import {StoryblokComponent} from "storyblok-js-client";

export interface HomepageBlok {
    sections: StoryblokComponent<any>[]
    title: string
}

export interface FooterProps {
    title: string
    links: SocialLink[]
}

export interface HeaderProps {
    title: string
    subtitle: string
    image: StoryblokImage
}

export interface PortfolioProps {
    title: string
    projects: Project[]
}


interface StoryblokImage {
    id: number,
    alt: string
    name: string,
    focus: null,
    title: string
    filename: string
    copyright: string
    fieldtype: string

}

export interface NavComponent {
    items: NavItem[]
    logo: StoryblokImage
    brand: string
}

interface NavItem {
    id: string
    title: string
}

interface Project {
    image: StoryblokImage
}

interface SocialLink {
    link: string,
    icon: string,
    label: string
}

