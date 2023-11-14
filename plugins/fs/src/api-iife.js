if("__TAURI__"in window){var __TAURI_PLUGIN_FS__=function(t){"use strict";async function e(t,e={},n){return window.__TAURI_INTERNALS__.invoke(t,e,n)}var n;async function a(t,n,a){"object"==typeof a&&Object.freeze(a),"object"==typeof t&&Object.freeze(t);const i={path:"",contents:""};let o=a;return"string"==typeof t?i.path=t:(i.path=t.path,i.contents=t.contents),"string"==typeof n?i.contents=n??"":o=n,await e("plugin:fs|write_file",{path:i.path,contents:Array.from((new TextEncoder).encode(i.contents)),options:o})}return"function"==typeof SuppressedError&&SuppressedError,t.Dir=void 0,(n=t.Dir||(t.Dir={}))[n.Audio=1]="Audio",n[n.Cache=2]="Cache",n[n.Config=3]="Config",n[n.Data=4]="Data",n[n.LocalData=5]="LocalData",n[n.Document=6]="Document",n[n.Download=7]="Download",n[n.Picture=8]="Picture",n[n.Public=9]="Public",n[n.Video=10]="Video",n[n.Resource=11]="Resource",n[n.Temp=12]="Temp",n[n.AppConfig=13]="AppConfig",n[n.AppData=14]="AppData",n[n.AppLocalData=15]="AppLocalData",n[n.AppCache=16]="AppCache",n[n.AppLog=17]="AppLog",n[n.Desktop=18]="Desktop",n[n.Executable=19]="Executable",n[n.Font=20]="Font",n[n.Home=21]="Home",n[n.Runtime=22]="Runtime",n[n.Template=23]="Template",t.BaseDirectory=t.Dir,t.copyFile=async function(t,n,a={}){return await e("plugin:fs|copy_file",{source:t,destination:n,options:a})},t.createDir=async function(t,n={}){return await e("plugin:fs|create_dir",{path:t,options:n})},t.exists=async function(t){return await e("plugin:fs|exists",{path:t})},t.metadata=async function(t){return await e("plugin:fs|metadata",{path:t}).then((t=>{const{accessedAtMs:e,createdAtMs:n,modifiedAtMs:a,...i}=t;return{accessedAt:new Date(e),createdAt:new Date(n),modifiedAt:new Date(a),...i}}))},t.readBinaryFile=async function(t,n={}){const a=await e("plugin:fs|read_file",{path:t,options:n});return Uint8Array.from(a)},t.readDir=async function(t,n={}){return await e("plugin:fs|read_dir",{path:t,options:n})},t.readTextFile=async function(t,n={}){return await e("plugin:fs|read_text_file",{path:t,options:n})},t.removeDir=async function(t,n={}){return await e("plugin:fs|remove_dir",{path:t,options:n})},t.removeFile=async function(t,n={}){return await e("plugin:fs|remove_file",{path:t,options:n})},t.renameFile=async function(t,n,a={}){return await e("plugin:fs|rename_file",{oldPath:t,newPath:n,options:a})},t.writeBinaryFile=async function(t,n,a){"object"==typeof a&&Object.freeze(a),"object"==typeof t&&Object.freeze(t);const i={path:"",contents:[]};let o=a;return"string"==typeof t?i.path=t:(i.path=t.path,i.contents=t.contents),n&&"dir"in n?o=n:"string"==typeof t&&(i.contents=n??[]),await e("plugin:fs|write_file",{path:i.path,contents:Array.from(i.contents instanceof ArrayBuffer?new Uint8Array(i.contents):i.contents),options:o})},t.writeFile=a,t.writeTextFile=a,t}({});Object.defineProperty(window.__TAURI__,"fs",{value:__TAURI_PLUGIN_FS__})}
