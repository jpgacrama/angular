import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnInit {
  _vName: string;
  @Input() get vName() {
    return this._vName;
  }
  set vName(name: string) {
    this._vName = name;
  }
  logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
