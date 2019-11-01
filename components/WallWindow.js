export default {
    template: `
    	<a-entity>
            <a-entity position="0 1 0">
                <!-- aken läheb siia -->
                <a-entity scale="1.5 1.5 1.5" position="0 0.01 0" rotation="0 90 0" material="side: double; castShadow: true" class="aken" obj-model="obj: #aken; mtl: #aken-mtl"></a-entity>
                <!--  -->
            </a-entity>
            <a-plane position="0 0.5 0" scale="1 0.2 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall"></a-plane>
            <a-plane position="0 4.5 0" scale="1 0.2 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall"></a-plane>
            
            <a-plane position="-4.4 2.5 0" scale="0.13 1 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall"></a-plane>
            <a-plane position="4.4 2.5 0" scale="0.13 1 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall"></a-plane>
        </a-entity>
    `
}