import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from '../models';
import { ROUTES } from '../shared/menu/menu-items';


@Injectable({
  providedIn: 'root'
})
export class VerticalSidebarService {
  public screenWidth: any;
  public collapseSidebar: boolean = false;
  public fullScreen: boolean = false;

  MENUITEMS: RouteInfo[] = ROUTES;

  items = new BehaviorSubject<RouteInfo[]>(this.MENUITEMS);
  
  constructor() { }
}
