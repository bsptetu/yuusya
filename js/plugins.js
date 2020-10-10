// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"10","screenWidth":"624","screenHeight":"750","changeWindowWidthTo":"624","changeWindowHeightTo":"750","renderingMode":"canvas","alwaysDash":"off"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力","parameters":{}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"QuickMove","status":true,"description":"歩行とジャンプを軽快に(2000風に)します。","parameters":{}},
{"name":"OnlineAvatar","status":false,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyAn_xLzHX2ls7CwJeOP37nO8xN9Ubfe2oU","authDomain":"jgame-tuuti.firebaseapp.com","databaseURL":"https://jgame-tuuti.firebaseio.com","avatarEvent":"1","syncSwitchStart":"100","syncSwitchEnd":"300","syncVariableStart":"200","syncVariableEnd":"500"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"TMAutoNewGame","status":true,"description":"起動時に自動ではじめからゲームを開始します。\r\nWeb用ミニゲームなど、タイトルが不要な場合に使えます。","parameters":{"autoNewGame":"1","allwaysOnTop":"0","autoDevTool":"0"}},
{"name":"HyperLink","status":true,"description":"ゲーム中に外部ページへのリンクを貼ります。","parameters":{"description":"Webサイトへのリンク"}},
{"name":"EasingPicture","status":true,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"MultipleCameras","status":true,"description":"画面に複数のカメラ（視点）を配置します。","parameters":{}},
{"name":"TimeEvent","status":true,"description":"時間の経過に応じてイベントを起こします。","parameters":{}},
{"name":"mv3d","status":true,"description":"3D rendering in RPG Maker MV with babylon.js\r\nversion 0.6.4.2","parameters":{"options":"","3dMenu":"ENABLE","renderDistOptionName":"Render Distance","renderDist":"25","renderDistOption":"true","renderDistMin":"10","renderDistMax":"100","fovOptionName":"FOV","fov":"65","fovOption":"false","fovMin":"50","fovMax":"100","invertYOptionName":"Invert Y Axis","invertYOption":"true","lookSensitivityOptionName":"Look Sensitivity","lookSensitivityOption":"true","spacer|graphics":"","graphics":"","antialiasing":"true","edgefix":"0.5","alphatest":"0.51","lightLimit":"8","backfaceCulling":"true","cameraCollision":"Type2 Smoothed","resScale":"1","spacer|map":"","map":"","cellSize":"10","unloadCells":"false","eventsUpdateNear":"true","mapDefaults":"\"enable(true)\\nsun(white)\\nambient(default)\\nfog(black|20,30)\\nceiling(backface:true)\"","spacer|input":"","input":"","inputCameraMouse":"false","inputCameraGamepad":"false","inputGamepadTurnButton":"Bumpers","WASD":"true","dir8Movement":"Diagonal Smart","keyboardPitch":"true","keyboardTurn":"QE","keyboardStrafe":"QE","turnIncrement":"90","yawSpeed":"180","pitchSpeed":"90","stairThresh":"0.1","walkOffEdge":"false","walkOnEvents":"true","gravity":"8","spacer|tileconfig":"","tileconfig":"","wallHeight":"2.0","tableHeight":"0.33","fringeHeight":"2.0","ceilingHeight":"2.0","layerDist":"0.0100","animDelay":"333","regions":"[\"{\\\"regionId\\\":\\\"1\\\",\\\"conf\\\":\\\"height(1)\\\"}\",\"{\\\"regionId\\\":\\\"2\\\",\\\"conf\\\":\\\"height(2)\\\"}\",\"{\\\"regionId\\\":\\\"3\\\",\\\"conf\\\":\\\"height(3)\\\"}\",\"{\\\"regionId\\\":\\\"4\\\",\\\"conf\\\":\\\"height(4)\\\"}\",\"{\\\"regionId\\\":\\\"5\\\",\\\"conf\\\":\\\"height(5)\\\"}\",\"{\\\"regionId\\\":\\\"6\\\",\\\"conf\\\":\\\"height(6)\\\"}\",\"{\\\"regionId\\\":\\\"7\\\",\\\"conf\\\":\\\"height(7)\\\"}\"]","ttags":"[\"{\\\"terrainTag\\\":\\\"1\\\",\\\"conf\\\":\\\"shape(xcross),height(1),fringe(0)\\\"}\",\"{\\\"terrainTag\\\":\\\"2\\\",\\\"conf\\\":\\\"shape(fence),height(1)\\\"}\"]","spacer|characters":"","characters":"","heightTrigger":"true","eventCharDefaults":"\"shadow(0.8,4)\\nshape(sprite)\\nscale(1)\"","eventObjDefaults":"\"shadow(0)\\nshape(sprite)\\nscale(1)\"","eventTileDefaults":"\"shadow(0)\\nshape(flat)\\nscale(1)\"","eventHeight":"2.0","boatSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","shipSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","airshipSettings":"{\"conf\":\"shadow(1,6),shape(sprite),scale(1),bush(false)\",\"height\":\"2.0\",\"bushLanding\":\"false\"}","allowGlide":"true","spriteOffset":"0.9","spacer|assets":"","assets":"","diagSymbol":"{d}","shadowTexture":"shadow","alphaMask":"bushAlpha","errorTexture":"errorTexture","requiredImages":""}},
{"name":"OggOnly","status":true,"description":"音声ファイルの再生にoggファイルのみを使用します。","parameters":{"deleteM4a":"false"}},
{"name":"stbvorbis","status":true,"description":"","parameters":{}},
{"name":"stbvorbis_asm","status":true,"description":"","parameters":{}},
{"name":"EasingPicture","status":true,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"ServerTime","status":true,"description":"サーバータイムを取得します。","parameters":{}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"true","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"3","ポインタY座標の変数番号":"4","タッチ操作抑制":"false","戦闘中常にコモン実行":"false","無効スイッチ":"0"}},
{"name":"PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"ChangeMapTouchPolicy","status":true,"description":"マップタッチ仕様変更プラグイン","parameters":{"initPolicyLevel":"1","invalidForceDash":"false"}},
{"name":"EventNoLock","status":true,"description":"イベントロック無効化プラグイン","parameters":{}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{"最初のセルに戻る":"false"}},
{"name":"EventReSpawn","status":true,"description":"イベント動的生成プラグイン","parameters":{"keepSelfSwitch":"false","tryRandomCount":"1000","CertainSpawnSwitch":"0"}},
{"name":"TemplateEvent","status":true,"description":"テンプレートイベントプラグイン","parameters":{"TemplateMapId":"5","KeepEventId":"false","OverrideTarget":"{\"Image\":\"false\",\"Direction\":\"false\",\"Move\":\"false\",\"Priority\":\"false\",\"Trigger\":\"false\",\"Option\":\"false\"}","AutoOverride":"false","IntegrateNote":"0"}}
];
