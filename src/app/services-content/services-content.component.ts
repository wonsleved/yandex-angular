import { Component, OnInit } from '@angular/core';
import { ServiceInfo } from "../serviceInfo";
import { services } from "../services-list";

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.less']
})
export class ServicesContentComponent implements OnInit {

  services: readonly ServiceInfo[] = services;

  constructor() { }

  ngOnInit(): void {
  }

}


