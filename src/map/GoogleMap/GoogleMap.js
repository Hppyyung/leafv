//--------------- leafv modules --------------------
import BaseMap from 'src/map/BaseMap';
import config from './config';

/**
 * GoogleMap is https://www.google.com/maps.
 */
class GoogleMap extends BaseMap {
   constructor(...args) {
      super(...args);

      this.config = config;
   }
}

export default GoogleMap;