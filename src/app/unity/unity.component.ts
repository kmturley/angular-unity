import { Component, Input, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  unityInstance: any;
  @Input() appLocation: string = '../assets/demo/demo.json';
  @Input() appWidth: string = '800';
  @Input() appHeight: string = '600';

  constructor() { }

  ngOnInit() {
    window['receiveMessageFromUnity'] = this.receiveMessageFromUnity;
    if (this.appLocation) {
      this.loadProject(this.appLocation);
    }
  }

  public loadProject(path: string) {
    this.unityInstance = window['UnityLoader'].instantiate('unityContainer', path);
  }

  public sendMessageToUnity(objectName: string, methodName: string, messageValue: string) {
    console.log('sendMessageToUnity', objectName, methodName, messageValue);
    this.unityInstance.SendMessage(objectName, methodName, messageValue);
  }

  public receiveMessageFromUnity(messageValue: string) {
    console.log('receiveMessageFromUnity', messageValue);
  }

}
