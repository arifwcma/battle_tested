"use client"
import { useEffect } from "react"
import LayerSwitcher from "ol-layerswitcher"
import "ol-layerswitcher/dist/ol-layerswitcher.css"

export default function LayerTree({ map }: { map: any }) {
    useEffect(() => {
        if (!map) return
        const control = new LayerSwitcher({ activationMode: "click", startActive: true })
        map.addControl(control)
    }, [map])
    return null
}
