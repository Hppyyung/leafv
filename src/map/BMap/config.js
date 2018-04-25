import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';

function getCRS() {
   const crs = new L.Proj.CRS('EPSG:3395',
      '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      {
         resolutions: function () {
            const level = 19
            const res = [];
            res[0] = Math.pow(2, 18);

            for(let i = 1; i < level; i++) {
               res[i] = Math.pow(2, (18 - i));
            }

            return res;
         }(),
         origin: [0, 0],
         bounds: L.bounds([0, 20037508.342789244], [20037508.342789244, 0])
      });

      return crs;
}

const config = {
   getCRS,
   tileLayerOpts: {
      subdomains: "1234",
      tms: true
   },
   urls: {
      street: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20170624&scaler=2'
   }
};

export default config;