/* Copyright 2015 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

define(function(require) {
  'use strict';
  // TODO(applmak): MUST we have these?
  require('lib/assert');
  require('client/asset/asset');
  require('client/network/neighbor_persistence');
  require('client/surface/surface');
  require('client/surface/canvas_surface');
  require('client/surface/p5_surface');
  require('client/surface/threejs_surface');
  require('client/util/load_youtube_api');
  
  var network = require('client/network/network');
  var ModuleManager = require('client/modules/module_manager');
  var debug = require('client/util/debug');
  var info = require('client/util/info');

  debug.enable('wall:*');

  // Open our socket to the server.
  network.openConnection(info.virtualRectNoBezel);

  // Ready to receive some code!
  var manager = new ModuleManager;
  manager.start();
});
