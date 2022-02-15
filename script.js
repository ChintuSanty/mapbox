mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudHljaGludHUiLCJhIjoiY2t4cjlmc2I1MGp5cDJubnludjIzeXR4ZSJ9.K-1gTtD5FCdxJNemZS6t_Q';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-83.1309121, 39.9831302],
        zoom: 4
    });

    map.on('load', () => {
        // Add an image to use as a custom marker
        map.loadImage(
            'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);
                // Add a GeoJSON source with 2 points
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                // feature for Mapbox DC
                            'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                -75.1089296, 39.9767948
                                    ]
                                },
                                'properties': {
                                    'title': 'Port Richmond'
                                }
                            },
                            {
                                // feature for Mapbox SF
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.1835636, 37.776]
                                },
                                'properties': {
                                    'title': 'Strawberry Mansion'
                                },
                            },
                            {
                                // feature for Mapbox SF
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.1315517, 40.0172382]
                                },
                                'properties': {
                                    'title': 'Southwest Philadelphia'
                                }
                            }
                        ]
                    }
                });

                // Add a symbol layer
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'custom-marker',
                        // get the title name from the source's "title" property
                        'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
            }
        );
    });
