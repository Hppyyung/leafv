//--------------- leafv modules --------------------
import MapTypes from 'src/map/MapTypes';
import AMap from 'src/map/AMap';
import BMap from 'src/map/BMap';
import GoogleMap from 'src/map/GoogleMap';

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
      // let map = null;

      // switch(this.type) {
      //    case LeafVMap.MAP_TYPES.AMap:
      //       map = AMap;
      //       break;
      //    case LeafVMap.MAP_TYPES.BMap:
      //       map = BMap;
      //       break;
      //    case LeafVMap.MAP_TYPES.GOOGLE:
      //       map = GoogleMap;
      //       break;
      //    default:
      //    // do nothing.
      // }

      this.vMap = new LeafVMap.MAPS[this.type](this.container, this.styles, this.opts).createMap();
      return this;
   }

   dispose() {
      this.vMap && this.vMap.dispose();
   }

   static MAP_TYPES = MapTypes;
   static MAPS = {
      [MapTypes.AMap]: AMap,
      [MapTypes.BMap]: BMap,
      [MapTypes.Google]: GoogleMap
   };
}

export default LeafVMap;
