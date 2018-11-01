import { Component, ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('unityView') unityView;
  baseUrl: string;
  project: string;

  constructor(platformLocation: PlatformLocation) {
    const location = (platformLocation as any).location;
    this.baseUrl = location.origin + location.pathname;
    console.log('baseUrl', this.baseUrl);
  }

  load(name: string) {
    this.project = name;
    this.unityView.loadProject(`${this.baseUrl}/assets/${name}/${name}.json`);
  }

  send(objectName: string, methodName: string, messageValue: string) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }
}
