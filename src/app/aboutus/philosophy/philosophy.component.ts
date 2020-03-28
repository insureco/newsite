import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-philosophy",
  templateUrl: "philosophy.component.html"
})
export class PhilosophyComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("philosophy");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("philosophy");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
  }
}
