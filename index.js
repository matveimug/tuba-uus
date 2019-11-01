import Layout from "./components/Layout.js";
import Scene from "./components/Scene.js";
import Box from "./components/Box.js";
import Wall from "./components/Wall.js";
import WallWindow from "./components/WallWindow.js";
import Floor from "./components/Floor.js";
import Ceiling from "./components/Ceiling.js";
import Rig from "./components/Rig.js";

new Vue({
  el: "#app",
  components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig, WallWindow  },
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
            
            <a-asset-item id="juku" src="./assets/models/juku.obj"></a-asset-item>
            <a-asset-item id="juku-mtl" src="./assets/models/juku.mtl"></a-asset-item>
            
            <a-asset-item id="nunnu" src="./assets/models/nunnu.obj"></a-asset-item>

            <a-asset-item id="aken" src="./assets/models/aken.obj"></a-asset-item>
            <a-asset-item id="aken-mtl" src="./assets/models/aken.mtl"></a-asset-item>
          </a-assets>
        </template>
        <!-- blenderist imporditud .obj-mudel koos .mtl-materjalidega; vt a-assets ülalpool -->
        <Box  class="hover"
              position="3 3 3" 
              shadow="cast: true" 
              event-set__enter="_event: mouseenter; color: red"
              event-set__leave="_event: mouseleave; color: blue"
               />
        <a-sphere dynamic-body material="color: #333; metalness: 0.6; roughness: 0.1" v-for="(sphere, index) in 10" :position='"3 0." + index + " 3"' :radius='index/10'></a-sphere>
              
        <a-entity dynamic-body class="mannekeen" obj-model="obj: #mannekeen; mtl: #mannekeen-mtl "></a-entity>

        <a-entity dynamic-body position="4 2.5 -2" scale="0.5 0.5 0.5" rotation="0 -156 0" class="juku" obj-model="obj: #juku; mtl: #juku-mtl"></a-entity>

        <a-entity class="nunnu" obj-model="obj: #nunnu"></a-entity>
        <!-- uus komponent Rig, kus sees on kõik kaameraga seonduv. -->
        <Rig position="0 0 4">
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->
          <a-entity id="pilditekst" visible="false" position="0 -0.2 -0.5">
            <a-text 
            font="./assets/signika/Signika-SemiBold-msdf.json" 
            negate="false"
            value="täpitähed: õõõõääö" width="1" align="center" color="black" />
            <a-plane material="shader: flat" color="white" scale="0.5 0.1 0" />
          </a-entity>
          <a-text 
          id="kuubikutekst" 
          value="see on kuubik" 
          width="1" 
          align="center" 
          color="#FFF" 
          visible="false" 
          position="0 -0.05 -0.5" 
          font="./assets/signika/Signika-SemiBold-msdf.json" 
          negate="false"
          />
          <a-text 
          id="plakatitekst" 
          value="see on plakat" 
          width="1" 
          align="center" 
          color="#FFF" 
          visible="false" 
          position="0 -0.05 -0.5" 
          font="./assets/signika/Signika-SemiBold-msdf.json" 
          negate="false"
          />
          <a-box material="visible: false" position="0 0 -0.5" scale="0.6 2 0.3" static-body class="box"></a-box>
        </Rig>
        <!-- -->
        <Ceiling position="0 5 0">
        <a-entity class="keskkonnavalgus" light="type: point; color: #fff; intensity: 0.7;"  position="0 -2 0" rotation="0 0 0">
          <a-entity material="color: white; emissive: white; emissionIntensity: 0.3;" class="chandelier" position="0 -2.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>
        </a-entity>            
        </Ceiling>
      	<Wall position="0 0 -10" w="20" h="5">
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
        
        <Wall position="-10 0 -8" rotation="0 90 0" w="6" h="5"></Wall>
        <Wall position="-10 0 5" rotation="0 90 0" w="10" h="5">
 
        </Wall>
      	<Wall position="10 0 0" rotation="0 -90 0" w="20" h="5"></Wall>
        <WallWindow class="aknaga sein" position="-5 0 10" rotation="0 -180 0">  </WallWindow>
        <WallWindow class="aknaga sein" position="5 0 10" rotation="0 -180 0">  </WallWindow>
        <Floor position="0 0.01 0" />
        <a-entity class="prose" light="type: spot; angle: 30; penumbra: 0.3; intensity: 0.3; color: #fff; castShadow: true;"  position="-2 4 0" rotation="-15 0 0">
          <a-entity position="0 0 0" scale="0.1 0.1 0.1" class="juku" obj-model="obj: #juku; mtl: #juku-mtl"></a-entity>
        </a-entity>
        
        <a-entity class="prose" light="type: spot; angle: 30; penumbra: 0.3; intensity: 0.3; color: #fff; castShadow: true;"  position="2 4 0" rotation="-15 0 0">
          <a-entity position="0 0 0" scale="0.1 0.1 0.1" class="juku" obj-model="obj: #juku; mtl: #juku-mtl"></a-entity>
        </a-entity>
        
        <a-entity class="prose" light="type: spot; angle: 30; penumbra: 0.3; intensity: 0.3; color: #fff; castShadow: true;"  position="2 4 1.6" rotation="-15 77 0">
          <a-entity position="0 0 0" scale="0.1 0.1 0.1" class="juku" obj-model="obj: #juku; mtl: #juku-mtl"></a-entity>
        </a-entity>
        <!-- keskkond: -->
        <a-entity environment="preset: forest; lighting: none; dressing: trees; playArea: 100; dressingScale: 30"></a-entity>
        <!--  -->
      </Scene>
    </Layout>
    `
});
