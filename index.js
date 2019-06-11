import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
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
        <Ceiling position="0 5 0">
          <a-entity material="color: white; emissive: yellow; emissiveIntensity: 2" class="chandelier" position="0 -4.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>  
          <a-entity light="type: point; intensity: 0.6; color: #ffffaa; castShadow: true;"  position="0 -1.5 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.5; color: #ffffaa"></a-entity>
        </Ceiling>
      	<Wall position="0 0 -5"/>
      	<Wall position="-5 0 0" rotation="0 90 0"/>
      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <Wall position="0 0 5" rotation="0 -180 0"/>
        <Box position="1 1 0" shadow="cast: true"/>
        <Floor />
      </Scene>
    </Layout>
    `
})