export default {
    props: ["w", "h"],
    template: `
    	<a-entity>
            <a-plane position="0 2.5 0" shadow="recieve: true" material="color: white; side: double"  :width=this.w :height=this.h class="wall">
                <a-entity position="0 0 0.01">
                    <!-- pilt läheb siia -->
                    <slot />
                    <!--  -->
                </a-entity>
            </a-plane>
        </a-entity>
    `
}