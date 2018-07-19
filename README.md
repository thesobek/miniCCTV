# Mini CCTV Workshop

### Gettings started
- Chat: [Link to Google Hangout](https://hangouts.google.com/call/Y87d-4OjRCM3qZvLEZy4AAEI)
- RxJS:  https://www.learnrxjs.io/
- @ngrx: https://github.com/ngrx/platform ([@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)), ([@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md))
- Swagger Editor: https://editor.swagger.io/

### Challenges
 1. **Reactive map**
 ```
 Save map central point and view box in the ngx/store.
 Try to reload object on map using RxJS.
 Get data from `/map` endpoint.
Leaflet documentation https://leafletjs.com/reference-1.2.0.html
 ```
 2.  **Video player**
 ```
Connect to camera using internal video API. First you need to obtian encryption token (`/token` endpoint) required by stream server, then make a connection to the camera (`/connect/{cameraId}` endpoint).
After that you will be able to play vide stream from azure VOD server.

Azure Player demo page [link](http://ampdemo.azureedge.net/azuremediaplayer.html)
 ```
Example code:
```html
<link href="//amp.azure.net/libs/amp/2.1.7/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
<script src="//amp.azure.net/libs/amp/2.1.7/azuremediaplayer.min.js"></script>

<video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" tabindex="0"></video>

var myOptions = {
	"nativeControlsForTouch": false,
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}

myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "//amssamples.streaming.mediaservices.windows.net/830584f8-f0c8-4e41-968b-6538b9380aa5/TearsOfSteelTeaser.ism/manifest",
                "type": "application/vnd.ms-sstr+xml",
                "protectionInfo": [
                        {
                                "type": "AES",
                                "authenticationToken": „<TOKEN FROM API”
                        }
                ]
        }
]);
```
 4. **Camera panel**
 ```
 Read camera data from `/camera` endpoint. Then display the list using ngx/store.
 ```
 5. **Search/autocomplete**
 ```
Create autocomplete showing combined results from three different API. Let's use APIS to show result for places, cameras, people.
API you may use:
- Internal Cameras API (see docs/api/swagger.yml)
- Nominatim API (search places)  [https://wiki.openstreetmap.org/wiki/Nominatim](https://wiki.openstreetmap.org/wiki/Nominatim)
- [Star Wars API]([**https://swapi.co/api/people/?q=Luke**](https://swapi.co/api/people/?q=Luke))
 ```
 5. **Cameras preview**
```
Show camera preview image (using placholder image) when user click camera icon or map object. Use ngrx/store to dispatch and handle this action.
```

###
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
