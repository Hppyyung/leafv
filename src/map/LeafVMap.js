// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

class LeafVMap {
   constructor(container, type, url, opts = {}) {
      this.container = container;
      this.url = url;
      this.map = null;
      this.zoomLevel = opts.zoomLevel || 5;
   }

   /**
    * Add different type map by this.type. Should be override.
    */
   addMap() {

   }
}

export default LeafVMap;
