/*
* Taken from
* https://github.com/Cecropia/thehallaframe/blob/master/js/ctm_component.js
*/

if(typeof AFRAME === 'undefined'){
  throw new Error('Component attempted to register before AFRAME was available.');
}

var CTMLoader = require('./js/CTMLoader');

AFRAME.registerComponent('ctm', {
    schema: {
        src: {type: 'asset'},
        side: {type: 'number', default: THREE.DoubleSide},
        scale: {type: 'number', default: 1},
        texture: {type: 'string', default: ''},
        maxSize: {type: 'number', default: 1}
    },

    multiple: true,


    init: function () {
        var ctmLoader = new CTMLoader();
        var that = this;

        var textureLoader = new THREE.TextureLoader();

        ctmLoader.load( this.data.src,   function( bufferGeometry ) {
          var meshPhongMaterial = undefined;
          if(that.data.texture !== ''){
            meshPhongMaterial = new THREE.MeshPhongMaterial({color: 0xd9d9d9});
          }else{
            meshPhongMaterial = new THREE.MeshPhongMaterial({color: 0xd9d9d9,  vertexColors: THREE.VertexColors});
          }
          var mesh = new THREE.Mesh(bufferGeometry, meshPhongMaterial);
          mesh.material.side = that.data.side;

          if(that.data.maxSize != 1){
            var bBox = new THREE.Box3().setFromObject(mesh);
            var max = Math.max(bBox.getSize().x, bBox.getSize().y, bBox.getSize().z);
            var scaleFactor = that.data.maxSize/max;
            mesh.scale.multiplyScalar(scaleFactor);
          }

          mesh.scale.multiplyScalar(that.data.scale);

          if(that.data.texture !== ''){
            mesh.material.map = textureLoader.load(that.data.texture);
          }

          that.el.setObject3D('mesh', mesh);

        } );
    },

    update: function(){

    },

    play: function(){

    },

    tick: function(){

    },

});
