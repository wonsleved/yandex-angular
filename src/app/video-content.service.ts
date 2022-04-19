import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContentInfo } from "./contentInfo";

@Injectable({
  providedIn: 'root'
})
export class VideoContentService {
  private contentUrl = 'api/content';
  private singleVideoUrl = 'api/contentVideo';

  getContent(): Observable<ContentInfo[]> {
    return this.http.get<ContentInfo[]>(this.contentUrl);
  }

  getContentVideo(): Observable<ContentInfo> {
    return this.http.get<ContentInfo>(this.singleVideoUrl);
  }

  constructor(private http: HttpClient) { }
}
