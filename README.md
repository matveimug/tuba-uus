# Madise tuba
Põhineb [aframe-vue-boilerplate](https://github.com/matveimug/aframe-vue-boilerplate)-il; [demo](https://matveimug.github.io/tuba-uus/).

### Kui ei tööta:
Siis äkki kasutad IE-d või Safarit?
Kui Chrome-is ei tööta, mine aadressile `chrome://flags/`, kirjuta sealsesse otsingusse `webvr` ja lülita see sisse. Võid sisse lülitada ka `Oculus hardware support`i

### Live demo mobiilis:
Pane live server käima, siis tseki välja oma arvuti kohalik IP-aadress: nt. vscode-is ava terminaliaken `view > terminal` ja sinna kirjuta `ipconfig`, mäki puhul `ifconfig`.
Sealt otsi välja midagi sellist - `IPv4 Address. . . . . . . . . . . : 192.168.3.123`, mäkis otsi lihtsalt `192.168.XXX.XXX`-väljanägemisega numbritejada.
kui ei viitsi, vaata [https://www.whatismybrowser.com/detect/what-is-my-local-ip-address](siit). See IP-aadress kirjuta oma mobiili aadressiribale, otsa pane koolon ja see number, mis live serveri nupu peal kirjas on (`Port: 5050` näiteks), umbes nii: `192.168.3.123:5050`.