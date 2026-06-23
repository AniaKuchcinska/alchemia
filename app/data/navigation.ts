type NavItemType = "page" | "section" | "external"

type NavItem = {
    id: string
    label: string
    href?: string
    children?: NavItem[]
    type: NavItemType
}

// export const navigation: NavItem[] = [
//     {
//         id: "about",
//         label: "o nas",
//         href: "/",
//         children: [
//             {
//                 id: "about-us",
//             }
//         ],
//     },
//
// ]