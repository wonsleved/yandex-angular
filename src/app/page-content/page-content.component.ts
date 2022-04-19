import { Component, OnInit, HostListener } from '@angular/core';
import { NewsInfo } from "../newsInfo";
import { newsList } from "../news-list";
import { ContentInfo } from "../contentInfo";
import {VideoContentService} from "../video-content.service";

import { Observable, Subject, map, filter, debounceTime, switchMap, tap } from "rxjs";

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.less']
})
export class PageContentComponent implements OnInit {

  newsList: readonly NewsInfo[] = newsList;
  contentList: ContentInfo[] = [];

  content$!: Observable<any>;
  private events = new Subject<any>();

  @HostListener('window:scroll', ['$event'])
  scrollEvent(event: Event) {
    this.events.next(event);
    // if (window.scrollY + window.innerHeight > document.body.clientHeight) {
    //   this.videoContentService.getContentVideo()
    //     .subscribe(content => this.contentList.push(content));
    // }
  }


  getContent(): void {
    this.videoContentService.getContent()
      .subscribe(content => this.contentList = content);
  }

  constructor(private videoContentService: VideoContentService) { }

  ngOnInit(): void {
    this.getContent();
    this.content$ = this.events.pipe(
      map(() => window.scrollY),
      filter(scrollY => this.checkIfAdd(scrollY)),
      debounceTime(300),
      switchMap(() => this.videoContentService.getContentVideo())
    );

    this.content$.subscribe(content => this.contentList.push(content));
  }

  checkIfAdd(scrollY: number): boolean {
    return scrollY + window.innerHeight + 100 > document.body.clientHeight;
  }


}
