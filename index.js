import Layout from "./components/Layout.js";
import Scene from "./components/Scene.js";
import Box from "./components/Box.js";
import Wall from "./components/Wall.js";
import Floor from "./components/Floor.js";
import Ceiling from "./components/Ceiling.js";

new Vue({
  el: "#app",
  components: { Layout, Scene, Box, Wall, Floor, Ceiling },
  data: () => ({
    wallHeight: 3
  }),
  template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
          
            <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
            <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>

            <a-asset-item id="standing" src="./assets/models/standing_model.obj"></a-asset-item>
            <a-asset-item id="standing-mtl" src="./assets/models/standing_materials.mtl"></a-asset-item>
            
          </a-assets>
        </template>
        <a-entity id="rig" position="0 0 3">
          <a-camera>
              <a-entity 
                cursor="fuse:true, fuseTimeout: 50;" raycaster="far: 10; objects: .hover"
                position="0 0 -1"
                geometry="primitive: circle; radius: 0.005;"
                material="color: white; shader: flat; opacity: 0.5"
                >
              </a-entity>
              <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
              <a-text id="plakatitekst" value="see on plakat" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          </a-camera>
          <!-- <a-entity position="0 0 4" oculus-go-controls="model: false"></a-entity> -->
          <!-- <a-entity laser-controls="hand: right"></a-entity> -->
        </a-entity>
        <Ceiling position="0 5 0">
          <a-entity material="color: white; emissive: yellow; emissiveIntensity: 2" class="chandelier" position="0 -4.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>  
          <a-entity light="type: point; intensity: 0.6; color: #ffffaa; castShadow: true;"  position="0 -1.5 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.5; color: #ffffaa"></a-entity>
        </Ceiling>
      	<Wall position="0 0 -5">
          <a-plane 
              class="hover" scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/images/plakat.jpg" 
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        </Wall>
      	<Wall position="-5 0 0" rotation="0 90 0"/>
      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <Wall position="0 0 5" rotation="0 -180 0"/>
        <Box  class="hover"
              position="1 0.5 0" 
              shadow="cast: true" 
              event-set__enter="_event: mouseenter; _target: #kuubikutekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #kuubikutekst; visible: false"
               />
        <Floor />
      </Scene>
    </Layout>
    `
});
