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
