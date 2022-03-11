import About from 'components/about'
import Contact from 'components/contact'
import Galery from 'components/galery'
import Inicio from 'components/inicio'
import Portfolio from 'components/portfolio'
import React from 'react'
import { store } from 'store'
import { useSnapshot } from 'valtio'

const MapComponets = () => {
    const { currentComponent } = useSnapshot(store)
    const ArrayMap = [
        { components: currentComponent === 'portfolio' && <Portfolio /> },
        { components: currentComponent === 'galeria' && <Galery /> },
        { components: currentComponent === 'contato' && <Contact /> },
        { components: currentComponent === 'sobre' && <About /> },
        { components: currentComponent === 'inicio' && <Inicio /> },
    ]
    return (
        <div>
            {ArrayMap.map((item, index) => {
                return <div key={index}>{item.components}</div>
            })}
        </div>
    )
}

export default MapComponets
