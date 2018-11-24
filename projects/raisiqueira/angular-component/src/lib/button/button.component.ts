import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "rs-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() title = "Button";
  counter = 0;
  constructor() {}

  ngOnInit() {}

  increase(amount = 1) {
    this.counter += amount;
  }
}
