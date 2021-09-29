

export const DEFAULT_CONFIG = {
    navbarHeight: '70px'
}


export function setNavbarStyle(): string {
    return "height: "+ DEFAULT_CONFIG.navbarHeight + ";"
}

export function setDefaultMargin(): string {
    return "margin-top: "+ DEFAULT_CONFIG.navbarHeight + ";"
}
