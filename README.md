# angular-unity

Example Angular and Unity integration using:
* Unity 2019.3.14f1
* Angular 6.1.x

## Installation

    npm install

## Usage

    npm start

Then view the site at:

    http://localhost:4200/


## Creating a compatible Unity project

To communicate between JavaScript and Unity you need a few things:

1) Create a Unity Project with GameObject > Controller.cs:

```
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    using System.Runtime.InteropServices;

    public class Controller : MonoBehaviour {

        [DllImport("__Internal")]
        private static extern void SendMessageToWeb(string msg);

        public void ReceiveMessageFromWeb(string msg) {
            Debug.Log("Controller.ReceiveMessageFromWeb: " + msg);
        }

        // Use this for initialization
        void Start() {
            SendMessageToWeb("Hello from Unity");
        }

        // Update is called once per frame
        void Update() {

        }
    }
```

2) Add a file to the Unity project at: /Assets/Plugins/WebInterface.jslib containing:

```
    mergeInto(LibraryManager.library, {
    SendMessageToWeb: function (str) {
        window.receiveMessageFromUnity(str);
    },
    });
```

3) Build the project as WebGL so that it creates the files:

- demo.data.unityweb
- demo.json
- demo.wasm.code.unityweb
- demo.wasm.framework.unityweb

4) Copy the generated files to this project folder:

    /src/assets
    
5) Embed your generated files using the reusable Angular component:

    <app-unity appLocation="../assets/demo/demo.json"></app-unity>


## Updating Unity

If you update Unity then you'll also needs to update the Unity JavaScript files to match. Publish a WebGL project and copy the new JavaScript files into the angular src folder here:

    ./src/assets/UnityLoader.js
    ./src/assets/UnityProgress.js


## Directory structure

    src/                       --> Frontend sources files
    unity-src/                 --> Unity script examples


## Contact

For more information please contact kmturley