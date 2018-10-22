import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('unityView') unityView;
  project: string;

  load(name: string) {
    this.project = name;
    this.unityView.loadProject(`https://kmturley.github.io/angular-unity/dist/assets/${name}/${name}.json`);
  }

  send(objectName: string, methodName: string, messageValue: string) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }
}
