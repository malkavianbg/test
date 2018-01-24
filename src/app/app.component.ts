//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'my-app',
  template:
  `<div class="row">
          <div class="col-lg-6">
            <amexio-card-pane [enableFooter]="false">
              <amexio-pane-header>
                Tree View With Filter
              </amexio-pane-header>
              <amexio-pane-body>
                 <amexio-tree-filter-view [dataReader]="'data'"
                                         [httpMethod]="'get'" 
                                         [httpUrl]="'/assets/data/treeview.json'" 
                                         (selectedRecord)="onRowSelect($event)">
                </amexio-tree-filter-view>
              </amexio-pane-body>
            </amexio-card-pane>
          </div>
        </div>    
  `
  ,
  
})
export class AppComponent {
name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }

}
