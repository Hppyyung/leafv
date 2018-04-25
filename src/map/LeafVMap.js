//--------------- leafv modules --------------------
import MapTypes from 'src/map/MapTypes';
import AMap from 'src/map/AMap';
import BMap from 'src/map/BMap';

// ------------- node_modules ---------------------
import 'leaflet/dist/leaflet.css';

/**
 * @param {String || HTMLElement} container
 * @param {MapTypes} type
 * @param {Array<String>} urls
 * @param {Object} opts
 */
class LeafVMap {
   constructor(container, type, styles, opts = {}) {
      this.container = container;
      this.type = type;
      this.styles = styles;
      this.opts = opts;
      this.vMap = null;
   }

   /**
    * Add different type map by this.type
    */
   createMap() {
      let map = null;

      switch(this.type) {
         case LeafVMap.MAP_TYPES.AMap:
            map = new AMap(this.container, this.styles, this.opts);
            break;
         case LeafVMap.MAP_TYPES.BMap:
            map = new BMap(this.container, this.styles, this.opts);
            break;
         default:
         // do nothing.
      }

      this.vMap = map.createMap();
      return this;
   }

   dispose() {
      this.vMap && this.vMap.dispose();
   }

   static MAP_TYPES = MapTypes;
}

export default LeafVMap;
