import Layout from "./components/Layout.js";
import Scene from "./components/Scene.js";
import Box from "./components/Box.js";
import Wall from "./components/Wall.js";
import Floor from "./components/Floor.js";
import Ceiling from "./components/Ceiling.js";
import Rig from "./components/Rig.js";

new Vue({
  el: "#app",
  components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig },
  template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <!-- siin tõmbame sisse väliseid mudeleid -->
            <a-asset-item id="mannekeen" src="./assets/models/mannequin.obj"></a-asset-item>
            <a-asset-item id="mannekeen-mtl" src="./assets/models/mannequin.mtl"></a-asset-item>

            <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
            <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>

            <a-asset-item id="standing" src="./assets/models/standing_model.obj"></a-asset-item>
            <a-asset-item id="standing-mtl" src="./assets/models/standing_materials.mtl"></a-asset-item>
            
          </a-assets>
        </template>
        <!-- uus komponent Rig, kus sees on kõik kaameraga seonduv. -->
        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->
          <a-entity id="pilditekst" visible="false" position="0 -0.2 -0.5">
            <a-text value="see on see uuem pilt" width="1" align="center" color="black" />
            <a-plane material="shader: flat" color="white" scale="0.5 0.1 0" />
          </a-entity>
          <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst" value="see on plakat" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
        <!-- -->
        <Ceiling position="0 5 0">
          <a-entity material="color: white; emissive: yellow; emissiveIntensity: 2" class="chandelier" position="0 -4.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>  
          <a-entity light="type: point; intensity: 0.6; color: #ffffaa; castShadow: true;"  position="0 -1.5 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.5; color: #ffffaa"></a-entity>
        </Ceiling>
        <!-- blenderist imporditud .obj-mudel koos .mtl-materjalidega; vt a-assets ülalpool -->
        <a-entity class="mannekeen" obj-model="obj: #mannekeen; mtl: #mannekeen-mtl "></a-entity>
      	<Wall position="0 0 -5">
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis muudavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          <a-plane 
              position="-2 0 0"
              scale="2 3 0"
              material="src: ./assets/images/plakat.jpg"
              shadow="cast: true" 
          
              class="hover" 
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane
              position="2 0 0" 
              scale="2 2 0"
              material="src: ./assets/images/pilt.jpg"
              shadow="cast: true"

              class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>
        </Wall>
        <Wall position="-5 0 0" rotation="0 90 0">
          <a-plane
                scale="2 2 0"
                material="src: ./assets/images/pilt.jpg"
                shadow="cast: true"
            ></a-plane>
        </Wall>
      	<Wall position="5 0 0" rotation="0 -90 0">  </Wall>
        <Wall position="0 0 5" rotation="0 -180 0">  </Wall>
        <Box  class="hover"
              position="1 0.5 0" 
              shadow="cast: true" 

              event-set__enter="_event: mouseenter; color: red"
              event-set__leave="_event: mouseleave; color: blue"
              
               />
        <Floor />
      </Scene>
    </Layout>
    `
});
