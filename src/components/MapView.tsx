"use client"
import { useEffect, useRef } from "react"
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import TileWMS from "ol/source/TileWMS"
import LayerGroup from "ol/layer/Group"
import "ol/ol.css"

export default function MapView() {
    const mapRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!mapRef.current) return
        const rasters = new TileLayer({
            source: new TileWMS({
                url: "http://testpozi.online/cgi-bin/qgis_mapserv.fcgi",
                params: {
                    LAYERS: "Stawell24RvDepthARIPMF",
                    MAP: "/var/www/qgis_projects/flood_stawell/flood_stawell.qgs",
                    TILED: true
                }
            })
        })
        const boundary = new TileLayer({
            source: new TileWMS({
                url: "http://testpozi.online/cgi-bin/qgis_mapserv.fcgi",
                params: {
                    LAYERS: "boundary",
                    MAP: "/var/www/qgis_projects/flood_stawell/flood_stawell.qgs",
                    TILED: true
                }
            })
        })
        new Map({
            target: mapRef.current,
            layers: [rasters, boundary],
            view: new View({
                center: [142.7761, -37.0574],
                zoom: 11,
                projection: "EPSG:4326"
            })

        })
    }, [])
    return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />
}
