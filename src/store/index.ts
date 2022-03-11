import { proxy } from 'valtio'

interface AppState {
    xPosition: number
    burgerIsOpen: boolean
    currentComponent: string
}

export const store = proxy<AppState>({
    xPosition: 0,
    burgerIsOpen: false,
    currentComponent: 'inicio',
})

export const onToggleBurger = (value: boolean) => {
    store.burgerIsOpen = value
}

export const setNewxPosition = (value: number) => {
    store.xPosition = value
}
