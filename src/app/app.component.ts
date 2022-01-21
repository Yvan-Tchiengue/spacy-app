import { Component } from '@angular/core';
import {spacyapiobject, SpacyapiService} from './spacyapi.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacy-app';
  text = new FormControl();
  language = new FormControl();
constructor(private spacyapi: SpacyapiService){
}

responsedata: spacyapiobject[] ;
  senRequest(text: string, lang: string): void {
    this.spacyapi.makeRequest(text, lang).subscribe(data => {
      this.responsedata = data.words;
      console.log(this.responsedata[0].tag);
      console.log(this.responsedata[0].text);
  } );

  }
}
