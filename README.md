*This component allows you to load models in the [OpenCTM](http://openctm.sourceforge.net/) format.*

*It is work in Progress and based on [this](https://github.com/cecropia/thehallaframe/) repository.*

## Usage

```html
<a-asset-item id="model" src="bunny.ctm" color="#FFFFFF"></a-asset-item>
<a-entity id="mesh" ctm="src: #model; " position=" 0 1.5 -2"></a-entity>
```

### Schema


* src: *Patch to the model file*
    * **type:** *asset*
* side: *Side property of THREE material, [docu](https://threejs.org/docs/#api/materials/Material)*
    * **type:** *number*
    * **default:** THREE.DoubleSide
* scale:
    * **type:** *number*
    * **default:** 1
* texture: *path to texture file*
    * **type:** *string*
    * **default:** ''
* maxSize: *define the maximum size of the model, using a bounding box the scale factor is computed by either width or height, depending on which one is greater*
    * **type:** *number*
    * **default:** 1
