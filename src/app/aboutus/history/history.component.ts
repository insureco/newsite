import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "history.component.html"
})
export class HistoryComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("history");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("history");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
  }
}
