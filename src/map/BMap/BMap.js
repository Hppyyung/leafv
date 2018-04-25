//--------------- leafv modules --------------------
import BaseMap from 'src/map/BaseMap';
import config from './config';

/**
 * BMap is https://map.baidu.com/.
 */
class BMap extends BaseMap {
   constructor(...args) {
      super(...args);

      this.config = config;
      const crs = config.getCRS();
      this.mapOpts = Object.assign({}, this.mapOpts, {crs});
      this.tileLayerOpts = Object.assign({}, this.tileLayerOpts, config.tileLayerOpts);
   }
}

export default BMap;