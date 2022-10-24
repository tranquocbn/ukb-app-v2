import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/providers/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit() {
  }

  public showAlert() {
    this.shareService.toast('Chức năng đang phát triển', 'dark', 'bottom');
  }

  public handleGotoFeature(val: string) {
    console.log(val);
    
  }
}
