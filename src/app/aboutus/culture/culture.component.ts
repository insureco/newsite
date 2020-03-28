import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-culture",
  templateUrl: "culture.component.html"
})
export class CultureComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("culture");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("culture");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
  }
}
