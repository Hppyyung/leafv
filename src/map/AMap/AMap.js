//--------------- leafv modules --------------------
import BaseMap from 'src/map/BaseMap';
import config from './config';

//---------------- node_modules --------------------
import {override} from 'core-decorators';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * AMap is https://www.amap.com/
 */
class AMap extends BaseMap {
   constructor(...args) {
      super(...args);

      this.tileLayerOpts = Object.assign({}, this.tileLayerOpts, config.tileLayerOpts);
   }

   @override
   createMap() {
      this.map = L.map(this.container, this.mapOpts);
      const urls = this.styles.map(style => {
         return config.urls[style];
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
}

export default AMap;