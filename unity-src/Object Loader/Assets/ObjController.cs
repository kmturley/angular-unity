using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using System.Text;

public class ObjController : MonoBehaviour {
    public GameObject Obj;
    Shader shader;

    void Start () {
        Debug.Log("absoluteURL: " + Application.absoluteURL);
        Debug.Log("dataPath: " + Application.dataPath);
        Debug.Log("streamingAssetsPath: " + Application.streamingAssetsPath);

        shader = Shader.Find("Specular");

        //LoadLocal("Chair.obj");
        //StartCoroutine(LoadWeb("http://localhost:4200/assets/chair/StreamingAssets/Chair.obj"));
    }

    public IEnumerator LoadWeb(string url) {
        Debug.Log("LoadWeb: " + url);
        using (WWW www = new WWW(url)) {
            yield return www;
            LoadObject(www.text);
        }
    }

    public void LoadLocal(string path) {
        Debug.Log("LoadLocal: " + path);

        StreamReader stream = File.OpenText(Application.streamingAssetsPath + "/" + path);
        string entireText = stream.ReadToEnd();
        stream.Close();
        LoadObject(entireText);
    }

    public void LoadObject(string path) {
        Debug.Log("LoadObject: " + path.Length);

        //Destroy(Obj);
        Obj = new GameObject();

        ObjImporter objImporter = new ObjImporter();

        Mesh mesh = new Mesh();
        mesh = objImporter.ImportFile(path);

        MeshRenderer renderer = Obj.AddComponent<MeshRenderer>();
        renderer.material = new Material(shader);

        MeshFilter filter = Obj.AddComponent<MeshFilter>();
        filter.mesh = mesh;
    }

    void Update () {
		
	}
}
