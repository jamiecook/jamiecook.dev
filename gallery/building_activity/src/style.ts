export const style: any = {
    "version": 8,
    "center": [144.9609556,-37.8129672],
    "zoom": 15.4,
    "bearing": 0,
    "pitch": 45,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2",
            "type": "vector"
        },
    },
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "hsl(185, 9%, 81%)"
            }
        },
        {
            "id": "land",
            "type": "background",
            "layout": {},
            "paint": { "background-color": "hsl(55, 11%, 96%)" }
        },
        {
            "id": "landcover",
            "type": "fill",
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 7,
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 89%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    2,
                    0.1,
                    7,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "national-park",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 12,
            "filter": ["==", ["get", "class"], "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(150, 6%, 93%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.5
                ]
            }
        },
        {
            "id": "landuse",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 12,
            "filter": [
                "match",
                ["get", "class"],
                ["park", "airport", "glacier", "pitch", "sand"],
                true,
                false
            ],
            "layout": {},
            "paint": {
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    ["match", ["get", "class"], "glacier", 0.5, 1]
                ],
                "fill-color": "hsl(150, 6%, 93%)"
            }
        },
        {
            "id": "water-shadow",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-translate-anchor": "viewport",
                "fill-translate": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    7,
                    ["literal", [0, 0]],
                    16,
                    ["literal", [-1, -1]]
                ],
                "fill-color": "hsl(185, 7%, 73%)"
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 12,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(187, 9%, 81%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    9,
                    ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
                    20,
                    ["match", ["get", "class"], ["canal", "river"], 8, 3]
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": { "fill-color": "hsl(185, 9%, 81%)" }
        },
        {
            "id": "hillshade",
            "type": "fill",
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "layout": {},
            "paint": {
                "fill-color": [
                    "match",
                    ["get", "class"],
                    "shadow",
                    "hsl(0, 0%, 35%)",
                    "hsl(0, 0%, 100%)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    14,
                    [
                        "match",
                        ["get", "level"],
                        [67, 56],
                        0.06,
                        [89, 78],
                        0.03,
                        0.04
                    ],
                    16,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "land-structure-polygon",
            "type": "fill",
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {},
            "paint": { "fill-color": "hsl(156, 20%, 95%)" }
        },
        {
            "id": "land-structure-line",
            "type": "line",
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["geometry-type"], "LineString"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.99],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    40
                ],
                "line-color": "hsl(156, 20%, 95%)"
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                [
                    "match",
                    ["get", "type"],
                    ["runway", "taxiway", "helipad"],
                    true,
                    false
                ]
            ],
            "layout": {},
            "paint": {
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11,
                    0,
                    11.5,
                    1
                ],
                "fill-color": "hsl(0, 0%, 97%)"
            }
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 12,
            "filter": ["==", ["geometry-type"], "LineString"],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    9,
                    [
                        "match",
                        ["get", "type"],
                        "runway",
                        1,
                        "taxiway",
                        0.5,
                        0.5
                    ],
                    18,
                    ["match", ["get", "type"], "runway", 80, "taxiway", 20, 20]
                ],
                "line-color": "hsl(0, 0%, 97%)"
            }
        },
        {
            "id": "building-outline",
            "type": "line",
            "source": "composite",
            "source-layer": "building",
            "minzoom": 12,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "line-color": "hsl(55, 3%, 87%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    0.75,
                    20,
                    3
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "building",
            "type": "fill",
            "source": "composite",
            "source-layer": "building",
            "minzoom": 12,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "fill-outline-color": "hsl(55, 3%, 87%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ],
                "fill-color": "hsl(55, 5%, 91%)"
            }
        },
        {
            "id": "tunnel-street-minor-low",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(185, 7%, 88%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "tunnel-street-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(185, 12%, 89%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        1,
                        ["secondary", "tertiary"],
                        0.75,
                        0.75
                    ],
                    18,
                    2
                ],
                "line-color": "hsl(185, 12%, 89%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        0.75,
                        ["secondary", "tertiary"],
                        0.1,
                        0.1
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        32,
                        ["secondary", "tertiary"],
                        26,
                        26
                    ]
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(185, 12%, 89%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(185, 12%, 89%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(187, 7%, 88%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "path"],
                ["!=", ["get", "type"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ],
                "line-color": "hsl(0, 0%, 85%)"
            }
        },
        {
            "id": "tunnel-steps",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 85%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "tunnel-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(187, 7%, 88%)"
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(187, 7%, 88%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "tunnel-street-minor",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(187, 7%, 88%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        0.75,
                        ["secondary", "tertiary"],
                        0.1,
                        0.1
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        32,
                        ["secondary", "tertiary"],
                        26,
                        26
                    ]
                ],
                "line-color": "hsl(187, 7%, 88%)"
            }
        },
        {
            "id": "tunnel-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "1444855769305.6016" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(187, 7%, 88%)"
            }
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "pedestrian"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-minor-low",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ]
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "road-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 11, 1]
            }
        },
        {
            "id": "road-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": [
                    "step",
                    ["zoom"],
                    ["match", ["get", "class"], "motorway", 1, 0],
                    6,
                    1
                ]
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "construction"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "path"],
                [
                    "step",
                    ["zoom"],
                    [
                        "!",
                        [
                            "match",
                            ["get", "type"],
                            ["steps", "sidewalk", "crossing"],
                            true,
                            false
                        ]
                    ],
                    16,
                    ["!=", ["get", "type"], "steps"]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0.5,
                    14,
                    1,
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "type"], "steps"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "road-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "pedestrian"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "road-minor",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": { "mapbox:group": "1444855786460.0557" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["major_rail", "minor_rail"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    20,
                    1
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-street-minor-low",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "bridge-street-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        1,
                        ["secondary", "tertiary"],
                        0.75,
                        0.75
                    ],
                    18,
                    2
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        0.75,
                        ["secondary", "tertiary"],
                        0.1,
                        0.1
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        32,
                        ["secondary", "tertiary"],
                        26,
                        26
                    ]
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ],
                "line-color": "hsl(156, 0%, 100%)"
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "path"],
                ["!=", ["get", "type"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "type"], "steps"],
                ["==", ["get", "structure"], "bridge"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "bridge-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "bridge-street-minor",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "track", "primary_link"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        0.75,
                        ["secondary", "tertiary"],
                        0.1,
                        0.1
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "primary",
                        32,
                        ["secondary", "tertiary"],
                        26,
                        26
                    ]
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "bridge-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "bridge-rail",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["major_rail", "minor_rail"],
                    true,
                    false
                ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    20,
                    1
                ],
                "line-color": "hsl(156, 12%, 92%)"
            }
        },
        {
            "id": "bridge-major-link-2-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2-case",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(156, 12%, 92%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-major-link-2",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "bridge-motorway-trunk-2",
            "type": "line",
            "metadata": { "mapbox:group": "1444855799204.86" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "admin-1-boundary-bg",
            "type": "line",
            "metadata": { "mapbox:group": "1444934295202.7542" },
            "source": "composite",
            "source-layer": "admin",
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": { "line-join": "bevel" },
            "paint": {
                "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    3.75,
                    12,
                    5.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0,
                    8,
                    0.75
                ],
                "line-dasharray": [1, 0],
                "line-translate": [0, 0],
                "line-color": "hsl(0, 0%, 84%)"
            }
        },
        {
            "id": "admin-0-boundary-bg",
            "type": "line",
            "metadata": { "mapbox:group": "1444934295202.7542" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    3.5,
                    10,
                    8
                ],
                "line-color": "hsl(0, 0%, 84%)",
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-translate": [0, 0],
                "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2]
            }
        },
        {
            "id": "admin-1-boundary",
            "type": "line",
            "metadata": { "mapbox:group": "1444934295202.7542" },
            "source": "composite",
            "source-layer": "admin",
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [2, 0]],
                    7,
                    ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0.75,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    "hsl(0, 0%, 80%)",
                    7,
                    "hsl(0, 0%, 70%)"
                ]
            }
        },
        {
            "id": "admin-0-boundary",
            "type": "line",
            "metadata": { "mapbox:group": "1444934295202.7542" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "disputed"], "false"],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-color": "hsl(0, 0%, 62%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ]
            }
        },
        {
            "id": "admin-0-boundary-disputed",
            "type": "line",
            "metadata": { "mapbox:group": "1444934295202.7542" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "disputed"], "true"],
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-dasharray": [1.5, 1.5],
                "line-color": "hsl(0, 0%, 62%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ]
            }
        },
        {
            "id": "settlement-subdivision-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "class"], "settlement_subdivision"],
                ["<=", ["get", "filterrank"], 4]
            ],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": [
                    "match",
                    ["get", "type"],
                    "suburb",
                    0.15,
                    ["quarter", "neighborhood"],
                    0.1,
                    0.1
                ],
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.5, 0, 1, 1],
                    ["zoom"],
                    11,
                    [
                        "match",
                        ["get", "type"],
                        "suburb",
                        11,
                        ["quarter", "neighborhood"],
                        10.5,
                        10.5
                    ],
                    15,
                    [
                        "match",
                        ["get", "type"],
                        "suburb",
                        17,
                        ["quarter", "neighborhood"],
                        16,
                        16
                    ]
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 2,
                "text-color": "hsl(0, 0%, 55%)",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "settlement-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all",
                ["<=", ["get", "filterrank"], 3],
                ["==", ["get", "class"], "settlement"],
                [
                    "step",
                    ["zoom"],
                    true,
                    13,
                    [">=", ["get", "symbolrank"], 11],
                    14,
                    [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    3,
                    [
                        "step",
                        ["get", "symbolrank"],
                        12, 9, 11, 10, 10.5, 12, 9.5, 14, 8.5, 16, 6.5, 17, 4],
                    15,
                    [
                        "step",
                        ["get", "symbolrank"],
                        28, 9, 26, 10, 23, 11, 21, 12, 20, 13, 19, 15, 17
                    ]
                ],
                "icon-image": [
                    "case",
                    ["==", ["get", "capital"], 2],
                    "border-dot-13",
                    [
                        "step",
                        ["get", "symbolrank"],
                        "dot-11",
                        9,
                        "dot-10",
                        11,
                        "dot-9"
                    ]
                ],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["bottom", "top"],
                        "center",
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "capital"],
                        2,
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.3]],
                            "bottom-left",
                            ["literal", [0.3, -0.1]],
                            "left",
                            ["literal", [0.45, 0.1]],
                            "top-left",
                            ["literal", [0.3, 0.1]],
                            "top",
                            ["literal", [0, 0.3]],
                            "top-right",
                            ["literal", [-0.3, 0.1]],
                            "right",
                            ["literal", [-0.45, 0]],
                            "bottom-right",
                            ["literal", [-0.3, -0.1]],
                            ["literal", [0, -0.3]]
                        ],
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.25]],
                            "bottom-left",
                            ["literal", [0.2, -0.05]],
                            "left",
                            ["literal", [0.4, 0.05]],
                            "top-left",
                            ["literal", [0.2, 0.05]],
                            "top",
                            ["literal", [0, 0.25]],
                            "top-right",
                            ["literal", [-0.2, 0.05]],
                            "right",
                            ["literal", [-0.4, 0.05]],
                            "bottom-right",
                            ["literal", [-0.2, -0.05]],
                            ["literal", [0, -0.25]]
                        ]
                    ],
                    8,
                    ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["get", "text_anchor"],
                    8,
                    "center"
                ],
                "text-field": [
                    "coalesce",
                    ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-max-width": 7
            },
            "paint": {
                "text-color": [
                    "step",
                    ["get", "symbolrank"],
                    "hsl(0, 0%, 42%)",
                    11,
                    "hsl(0, 0%, 55%)",
                    16,
                    "hsl(0, 0%, 62%)"
                ],
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 3,
                "icon-opacity": [
                    "step",
                    ["zoom"],
                    1, 8, 0
                ],
                "text-halo-blur": 0.5
            }
        }
    ]
}
