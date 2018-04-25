//---------------- node_modules --------------------
import L from 'leaflet';

class BaseMap {
   constructor(container, styles, opts = {}) {
      this.container = container;
      this.styles = styles;
      this.map = null; // L.map
      this.tileLayers = []; // all tile layers. <L.LayerGroup>
      this.mapOpts = opts.mapOpts || {
         zoom: 5,
         center: [39.915, 116.404],
      };
      this.tileLayerOpts = opts.tileLayerOpts || {};
   }

   /**
    * add map.
    */
   createMap() {
      this.map = L.map(this.container, this.mapOpts);
      const urls = this.styles.map(style => {
         return this.config.urls[style];
      }).filter(url => !!url);

      if(urls.length == 0) {
         throw new Error(`styles not found`);
      }
      else {
         const layers = urls.map(url => {
            return L.tileLayer(url, this.tileLayerOpts)
         });

         this.tileLayers = L.layerGroup(layers);
         this.tileLayers.addTo(this.map);

         return this;
      }
   }

   dispose() {
      this.map && this.map.remove();
   }
}

export default BaseMap;