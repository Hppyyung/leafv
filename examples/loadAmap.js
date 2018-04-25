import LeafV from 'src';

const body = document.getElementsByTagName('body');
const div = document.createElement('div');
div.style.width = '500px';
div.style.height = '500px';
div.id = 'mapContainer';
div.style.border = 'solid 1px green';
body[0].appendChild(div);

const {LeafVMap} = LeafV;
const leafVMap = new LeafVMap(
   div,
   LeafVMap.MAP_TYPES.AMap,
   ['street'],
   {
      mapOpts: {
         zoom: 5,
         center: [31.834912, 117.220102],
      }
   }
);
leafVMap.createMap();