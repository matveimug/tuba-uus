# VR-portfolio
[Demo](https://matveimug.github.io/tuba-uus/). Põhineb [aframe-vue-boilerplate](https://github.com/matveimug/aframe-vue-boilerplate)-il.

### Kui ei tööta:
Siis äkki kasutad IE-d või Safarit?
Kui Chrome-is ei tööta, mine aadressile `chrome://flags/`, kirjuta sealsesse otsingusse `webvr` ja lülita see sisse. Võid sisse lülitada ka `Oculus hardware support`i

### Live demo mobiilis:
1. Pane live server käima, tseki välja oma arvuti kohalik IP-aadress: nt vscode-is ava terminaliaken `view > terminal` ja sinna kirjuta `ipconfig`, mäki puhul `ifconfig`.
1. Sealt otsi välja midagi sellist - `IPv4 Address. . . . . . . . . . . : 192.168.3.123`, mäkis otsi lihtsalt `192.168.XXX.XXX`-väljanägemisega numbritejada.
1. Kui ei viitsi, vaata [siit](https://www.whatismybrowser.com/detect/what-is-my-local-ip-address). 
1. See IP-aadress kirjuta oma mobiili aadressiribale, otsa pane koolon ja see number, mis VSCode-is live serveri nupu peal kirjas on (`Port: 5050` näiteks), tulemus peaks olema umbes nii: `192.168.3.123:5050`.

### youtube-i lingid:

[Pleilist](https://www.youtube.com/playlist?list=PLjHo4fPLPthupmg72cyxO9IWDDZzDcX44)

[1](https://youtu.be/Jgw2lmDDKms) 
[2](https://youtu.be/M6AVC-I3n1Y) 
[3](https://youtu.be/cCuSpDbom3E) 
[4](https://youtu.be/aTdLMDUZxkI) 
[5](https://youtu.be/2mUkn9WXBBM) 
[6](https://youtu.be/V1PX2CaU-Bk) 
[7](https://youtu.be/89bUgv2rQfU)  
[8](https://youtu.be/3kdZHH6yODo)  
[9](https://youtu.be/nL6dN2oZtSk)  
[10](https://youtu.be/UCpVgpMdMig)  
[11](https://youtu.be/Ttn3dLWjXG4)


## Mobiiliga liikumine

https://github.com/Ctrl-Alt-Zen/aframe-mobile-controls/blob/HEAD/components/twoway-motion/README.md

## Mobiiliga pööramine

https://github.com/Ctrl-Alt-Zen/aframe-mobile-controls/blob/2b2695cdd0f65aad2738002b73171a92dac89642/components/tilt-turn/README.md

# Aframe:

- aframe - https://aframe.io/docs/  
- kool - https://aframe.io/aframe-school/#/  
- LISAD - https://github.com/supermedium/superframe  
- https://aframe.io/blog/awoa-170-172/ - week of aframe  

# Valmis 3d-objektid

- https://poly.google.com/blocks - google blocks
- https://github.com/supermedium/aframe-environment-component - aframe keskkonnad

# MTL-i häkkimine

https://people.sc.fsu.edu/~jburkardt/data/mtl/mtl.html

# Täpitähtede häkkimine

link, kuhu tõsta oma fondifail ja genereerida VR-font.
https://msdf-bmfont.donmccurdy.com/

# Füüsika häkkimine ja viplala-efekti pärssimine

index.html-faili:

`<!-- füüsika -->
  <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.0.1/dist/aframe-extras.min.js"></script>
  <script src="//cdn.rawgit.com/donmccurdy/aframe-physics-system/v4.0.1/dist/aframe-physics-system.min.js"></script>
  <!--  -->`

kaamera peab olema a-entity sees, mille id="rig" ja millel on parameeter
`movement-controls="constrainToNavMesh: true;"`

põranda küljes (näiteks) peab olema seega parameeter `nav-mesh`,
või tee põranda juurde uus plane, näiteks nii:
`<a-plane material="visible: false" position="0 -0.01 4" rotation="-90 0 0"  nav-mesh width="19" height="19"></a-plane>`


# Insp:

## upcoming:
- https://store.steampowered.com/app/876160/Occupy_White_Walls/ - OWW  
- https://www.youtube.com/watch?v=gE3wLCcnTHY - Vulnicura  

## collections:
- http://khoracontemporary.com/artworks/ - paul mccarthy  
- https://blog.dextra.art/the-10-virtual-reality-artists-you-need-to-see-to-believe-c66cfde4dcb8  
- https://www.wearvr.com/collections/vr-art - collection  
- https://www.artsy.net/article/artsy-editorial-8-artists-pushing-limits-digital-effects-vr  
- https://www.oculus.com/experiences/rift/1327909963983186/?fbclid=IwAR0u0DIqNI1FWCWgCoXLM8H7uQdIhKzEB8CoJRiOSSyMWs3uz6nkrng1ll0 - tallinn  

## gallery & portfolio: 
- https://store.steampowered.com/app/515020/The_VR_Museum_of_Fine_Art/  
- https://medium.com/bestfolios/7-inspiring-case-studies-on-vr-and-ar-7235c562844b  


# TODO:
[x] aknaga sein
[x] täpitähed
[ ] viplala kinni keerata (füüsika)
[ ] uksed avanema, uksekell