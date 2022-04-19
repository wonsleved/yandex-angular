import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContentInfo } from './contentInfo';
import { contentList } from './content-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    return {
      content: contentList,
      contentVideo: contentList[0]
    };
  }
}
