import type { NuxtPage } from "nuxt/schema"

export function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
    const pagesToRemove = []
    for (const page of pages) {
        if (pattern.test(page.file || '')) {
            pagesToRemove.push(page)
        } else {
            removePagesMatching(pattern, page.children)
        }
    }
    for (const page of pagesToRemove) {
        pages.splice(pages.indexOf(page), 1)
    }
}