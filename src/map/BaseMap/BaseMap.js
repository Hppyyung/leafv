class BaseMap {
   constructor(container, styles, opts = {}) {
      this.container = container;
      this.styles = styles;
      this.map = null; // L.map
      this.tileLayers = []; // all tile layers. <L.LayerGroup>
      this.mapOpts = opts.mapOpts || {};
      this.tileLayerOpts = opts.tileLayerOpts || {};
   }

   /**
    * add map. should be overrride.
    */
   createMap() {}

   dispose() {
      this.map && this.map.remove();
   }
}

export default BaseMap;