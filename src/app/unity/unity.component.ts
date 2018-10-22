import { Component, Input, OnInit } from '@angular/core';
import { UnityLoader } from './UnityLoader.js';
import { UnityProgress } from './UnityProgress.js';

declare var window: any;

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {
  gameInstance: any;
  @Input() appLocation: String;
  @Input() appWidth: String;
  @Input() appHeight: String;

  constructor() { }

  ngOnInit() {
    window['UnityLoader'] = UnityLoader;
    window['UnityProgress'] = UnityProgress;
    window['receiveMessageFromUnity'] = this.receiveMessageFromUnity;
    if (this.appLocation) {
      this.loadProject(this.appLocation);
    }
  }

  public loadProject(path) {
    this.gameInstance = UnityLoader.instantiate('gameContainer', path);
  }

  public sendMessageToUnity(objectName: string, methodName: string, messageValue: string) {
    console.log('sendMessageToUnity', objectName, methodName, messageValue);
    this.gameInstance.SendMessage(objectName, methodName, messageValue);
  }

  public receiveMessageFromUnity(messageValue: string) {
    console.log('receiveMessageFromUnity', messageValue);
  }

}
