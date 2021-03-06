
(function() {


    var decrunchWorker = new Worker('crunch-worker.js');
    var decrunchCallbacks = [];
    decrunchWorker.onmessage = function(msg) {
      decrunchCallbacks[msg.data.callbackID](msg.data.data);
      console.log('decrunched ' + msg.data.filename + ' in ' + msg.data.time + ' ms, ' + msg.data.data.length + ' bytes');
      decrunchCallbacks[msg.data.callbackID] = null;
    };
    function requestDecrunch(filename, data, callback) {
      decrunchWorker.postMessage({
        filename: filename,
        data: data,
        callbackID: decrunchCallbacks.length
      });
      decrunchCallbacks.push(callback);
    }


  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {


function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'base', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'ffflag', true, true);
Module['FS_createPath']('/packages/models', 'ffpit', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_roof_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v03', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_plates_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_planks_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_plaster_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_intersection_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasyJPG', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'packages/base/colos.ogz', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.ogz failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.ogz', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.ogz');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.ogz');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/base/colos.cfg', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.cfg');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.cfg');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/base/colos.wpt', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.wpt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.wpt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.wpt');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.wpt');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/models/ffflag/md5.cfg', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/md5.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'md5.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/md5.cfg');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/md5.cfg');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/models/ffflag/ffflag_nm.dds', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_nm.dds');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/models/ffflag/ffflag_sc.dds', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_sc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_sc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_sc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_sc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_sc.dds');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/models/ffflag/ffflag_cc.dds', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_cc.dds');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/models/ffflag/ffflag.md5mesh', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag.md5mesh failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag.md5mesh', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag.md5mesh');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag.md5mesh');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/models/ffflag/ffflag.md5anim', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag.md5anim failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag.md5anim', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag.md5anim');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag.md5anim');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/models/ffpit/md5.cfg', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/md5.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'md5.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/md5.cfg');

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/md5.cfg');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/models/ffpit/ffpit_01_gk_nm.dds', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_nm.dds');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/models/ffpit/ffpit_01_gk_cc.dds', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_cc.dds');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/models/ffpit/ffpit_01_gk_sc.dds', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_sc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_sc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_sc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_sc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_sc.dds');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/models/ffpit/ffpit.md5mesh', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit.md5mesh failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit.md5mesh', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit.md5mesh');

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit.md5mesh');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/package.cfg', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/package.cfg', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/package.cfg', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'packages/gk/fantasy/package.cfg', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/package.cfg');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/package.cfg', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/package.cfg', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/package.cfg', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/package.cfg', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/package.cfg', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/package.cfg', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/package.cfg', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/package.cfg', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    filePreload31.send(null);

    var filePreload32 = new DataRequest();
    filePreload32.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds', true);
    filePreload32.responseType = 'arraybuffer';
    filePreload32.onload = function() {
      var arrayBuffer = filePreload32.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    filePreload32.send(null);

    var filePreload33 = new DataRequest();
    filePreload33.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds', true);
    filePreload33.responseType = 'arraybuffer';
    filePreload33.onload = function() {
      var arrayBuffer = filePreload33.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    filePreload33.send(null);

    var filePreload34 = new DataRequest();
    filePreload34.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds', true);
    filePreload34.responseType = 'arraybuffer';
    filePreload34.onload = function() {
      var arrayBuffer = filePreload34.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    filePreload34.send(null);

    var filePreload35 = new DataRequest();
    filePreload35.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds', true);
    filePreload35.responseType = 'arraybuffer';
    filePreload35.onload = function() {
      var arrayBuffer = filePreload35.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    filePreload35.send(null);

    var filePreload36 = new DataRequest();
    filePreload36.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds', true);
    filePreload36.responseType = 'arraybuffer';
    filePreload36.onload = function() {
      var arrayBuffer = filePreload36.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    filePreload36.send(null);

    var filePreload37 = new DataRequest();
    filePreload37.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds', true);
    filePreload37.responseType = 'arraybuffer';
    filePreload37.onload = function() {
      var arrayBuffer = filePreload37.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    filePreload37.send(null);

    var filePreload38 = new DataRequest();
    filePreload38.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds', true);
    filePreload38.responseType = 'arraybuffer';
    filePreload38.onload = function() {
      var arrayBuffer = filePreload38.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    filePreload38.send(null);

    var filePreload39 = new DataRequest();
    filePreload39.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds', true);
    filePreload39.responseType = 'arraybuffer';
    filePreload39.onload = function() {
      var arrayBuffer = filePreload39.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    filePreload39.send(null);

    var filePreload40 = new DataRequest();
    filePreload40.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds', true);
    filePreload40.responseType = 'arraybuffer';
    filePreload40.onload = function() {
      var arrayBuffer = filePreload40.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    filePreload40.send(null);

    var filePreload41 = new DataRequest();
    filePreload41.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds', true);
    filePreload41.responseType = 'arraybuffer';
    filePreload41.onload = function() {
      var arrayBuffer = filePreload41.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    filePreload41.send(null);

    var filePreload42 = new DataRequest();
    filePreload42.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds', true);
    filePreload42.responseType = 'arraybuffer';
    filePreload42.onload = function() {
      var arrayBuffer = filePreload42.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    filePreload42.send(null);

    var filePreload43 = new DataRequest();
    filePreload43.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds', true);
    filePreload43.responseType = 'arraybuffer';
    filePreload43.onload = function() {
      var arrayBuffer = filePreload43.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    filePreload43.send(null);

    var filePreload44 = new DataRequest();
    filePreload44.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds', true);
    filePreload44.responseType = 'arraybuffer';
    filePreload44.onload = function() {
      var arrayBuffer = filePreload44.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    filePreload44.send(null);

    var filePreload45 = new DataRequest();
    filePreload45.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds', true);
    filePreload45.responseType = 'arraybuffer';
    filePreload45.onload = function() {
      var arrayBuffer = filePreload45.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    filePreload45.send(null);

    var filePreload46 = new DataRequest();
    filePreload46.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds', true);
    filePreload46.responseType = 'arraybuffer';
    filePreload46.onload = function() {
      var arrayBuffer = filePreload46.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    filePreload46.send(null);

    var filePreload47 = new DataRequest();
    filePreload47.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds', true);
    filePreload47.responseType = 'arraybuffer';
    filePreload47.onload = function() {
      var arrayBuffer = filePreload47.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');
    filePreload47.send(null);

    var filePreload48 = new DataRequest();
    filePreload48.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds', true);
    filePreload48.responseType = 'arraybuffer';
    filePreload48.onload = function() {
      var arrayBuffer = filePreload48.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');
    filePreload48.send(null);

    var filePreload49 = new DataRequest();
    filePreload49.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg', true);
    filePreload49.responseType = 'arraybuffer';
    filePreload49.onload = function() {
      var arrayBuffer = filePreload49.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_dn.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    filePreload49.send(null);

    var filePreload50 = new DataRequest();
    filePreload50.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg', true);
    filePreload50.responseType = 'arraybuffer';
    filePreload50.onload = function() {
      var arrayBuffer = filePreload50.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_rt.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    filePreload50.send(null);

    var filePreload51 = new DataRequest();
    filePreload51.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg', true);
    filePreload51.responseType = 'arraybuffer';
    filePreload51.onload = function() {
      var arrayBuffer = filePreload51.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_up.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    filePreload51.send(null);

    var filePreload52 = new DataRequest();
    filePreload52.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg', true);
    filePreload52.responseType = 'arraybuffer';
    filePreload52.onload = function() {
      var arrayBuffer = filePreload52.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_bk.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    filePreload52.send(null);

    var filePreload53 = new DataRequest();
    filePreload53.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg', true);
    filePreload53.responseType = 'arraybuffer';
    filePreload53.onload = function() {
      var arrayBuffer = filePreload53.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_ft.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    filePreload53.send(null);

    var filePreload54 = new DataRequest();
    filePreload54.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg', true);
    filePreload54.responseType = 'arraybuffer';
    filePreload54.onload = function() {
      var arrayBuffer = filePreload54.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_lf.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');
    filePreload54.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var dataFile = new XMLHttpRequest();
    dataFile.onprogress = function(event) {
      var url = 'low.data';
      if (event.loaded && event.total) {
        if (!dataFile.addedTotal) {
          dataFile.addedTotal = true;
          if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
          Module.dataFileDownloads[url] = {
            loaded: event.loaded,
            total: event.total
          };
        } else {
          Module.dataFileDownloads[url].loaded = event.loaded;
        }
        var total = 0;
        var loaded = 0;
        var num = 0;
        for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
          total += data.total;
          loaded += data.loaded;
          num++;
        }
        total = Math.ceil(total * Module.expectedDataFileDownloads/num);
        Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
      } else if (!Module.dataFileDownloads) {
        Module['setStatus']('Downloading data...');
      }
    }
    dataFile.open('GET', 'low.data', true);
    dataFile.responseType = 'arraybuffer';
    dataFile.onload = function() {
      Module.finishedDataFileDownloads++;
      var arrayBuffer = dataFile.response;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        curr = DataRequest.prototype.requests['packages/base/colos.ogz'];
        curr.response = byteArray.subarray(0,554131);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/colos.cfg'];
        curr.response = byteArray.subarray(554131,555286);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/colos.wpt'];
        curr.response = byteArray.subarray(555286,566750);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/md5.cfg'];
        curr.response = byteArray.subarray(566750,567002);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_nm.dds'];
        curr.response = byteArray.subarray(567002,721835);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_sc.dds'];
        curr.response = byteArray.subarray(721835,878448);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_cc.dds'];
        curr.response = byteArray.subarray(878448,1050201);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag.md5mesh'];
        curr.response = byteArray.subarray(1050201,1073622);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag.md5anim'];
        curr.response = byteArray.subarray(1073622,1165377);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/md5.cfg'];
        curr.response = byteArray.subarray(1165377,1165657);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_nm.dds'];
        curr.response = byteArray.subarray(1165657,1232944);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_cc.dds'];
        curr.response = byteArray.subarray(1232944,1300940);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_sc.dds'];
        curr.response = byteArray.subarray(1300940,1366250);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit.md5mesh'];
        curr.response = byteArray.subarray(1366250,1411447);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1411447,1411886);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1411886,1412684);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1412684,1413356);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1413356,1413827);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/package.cfg'];
        curr.response = byteArray.subarray(1413827,1414546);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/package.cfg'];
        curr.response = byteArray.subarray(1414546,1414970);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1414970,1415393);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/package.cfg'];
        curr.response = byteArray.subarray(1415393,1415832);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1415832,1416534);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1416534,1417253);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1417253,1417987);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1417987,1418434);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/package.cfg'];
        curr.response = byteArray.subarray(1418434,1419153);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1419153,1419612);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(1419612,1420411);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1420411,1539016);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1539016,1557874);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1557874,1588758);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1588758,1619185);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds'];
        curr.response = byteArray.subarray(1619185,1649568);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds'];
        curr.response = byteArray.subarray(1649568,1668189);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1668189,1683051);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1683051,1697130);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1697130,1816252);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1816252,1847337);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1847337,1876225);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1876225,1904532);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1904532,1935397);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(1935397,1965840);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(1965840,2030892);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(2030892,2096045);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(2096045,2110911);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(2110911,2125617);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds'];
        curr.response = byteArray.subarray(2125617,2133080);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds'];
        curr.response = byteArray.subarray(2133080,2162172);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg'];
        curr.response = byteArray.subarray(2162172,2347623);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg'];
        curr.response = byteArray.subarray(2347623,2497062);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg'];
        curr.response = byteArray.subarray(2497062,2579903);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg'];
        curr.response = byteArray.subarray(2579903,2736349);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg'];
        curr.response = byteArray.subarray(2736349,2890184);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg'];
        curr.response = byteArray.subarray(2890184,3039246);
        curr.onload();
                Module['removeRunDependency']('datafile_low.data');

    };
    Module['addRunDependency']('datafile_low.data');
    dataFile.send(null);
    if (Module['setStatus']) Module['setStatus']('Downloading...');
  
  });


  if (!Module['postRun']) Module['postRun'] = [];
  Module["postRun"].push(function() {
    decrunchWorker.terminate();
  });


})();

