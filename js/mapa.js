

      var mapa = new ol.Map({
		interactions: ol.interaction.defaults({mouseWheelZoom:false}),
        controls: [],
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'mapa',
        view: new ol.View({
          center: [0, 0],
          zoom: 2
        })
      });

      
      