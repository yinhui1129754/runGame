var userUtilsPro,EVENT_TYPE=Enum.EVENT_TYPE,MAIN_STATE=Enum.MAIN_STATE,GameMain=Game.getGameMain(),BULLET_MOVE_TYPE=Enum.BULLET_MOVE_TYPE;Game.on(EVENT_TYPE.OPEN_LOADED_SCENEED,function(e){Game.removeAllUI(),Game.createAllUI(),GameMain.readSceneData();var a=GameMain.spawnEnemies.getArea("start"),a=Game.createEffect("csm",a.x+a.width/2,a.y+a.height/2),a=(a.scale.x=.7,a.scale.y=.7,Game.addNowSceneChild(a),GameMain.spawnEnemies.getArea("end")),a=Game.createEffect("csm2",a.x+a.width/2,a.y+a.height/2-10);a.scale.x=.45,a.scale.y=.45,Game.addNowSceneChild(a),GameMain.dialog("start")}),Game.on(EVENT_TYPE.KILL_ROLE,function(e){var a=Game.getUI("resShow"),e=Game.createFloatText("+25",e.x,e.y,16766720,12,"plist_comm_gold.png");e.setTMult(.025),e.setIconSize(14,14),e.setPoint({x:e.x,y:e.y},{x:e.x,y:e.y-30}),e.setMoveType(BULLET_MOVE_TYPE.LINE),a.goldNumber+=25}),Game.on(EVENT_TYPE.CLOSE_SCENE,function(){GameMain.processDialog.hide(),GameMain.spawnEnemies.clear(),Game.destory()}),Game.on(EVENT_TYPE.KEY_DOWN,function(e){e.code===Game.getConfig("keyboard:menu")&&(Game.getState()===MAIN_STATE.SHOWMENU?Game.hideMenu():Game.showMenu("system"))});