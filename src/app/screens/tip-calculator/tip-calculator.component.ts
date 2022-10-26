import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css'],
})
export class TipCalculatorComponent implements OnInit {
  @ViewChildren('tipButton') tipButtons!: any;
  billValue = 0;
  numberOfPeople = 0;
  tip = 0;
  totalGeneral = 0;
  totalTip = 0;

  billInput: any;
  peopleInput: any;
  customInput: any;

  invalidPeopleInput = false;

  constructor() {}

  ngOnInit(): void {}

  total = (bill: number, tip: number, people: number) => {
    if (bill > 0 && tip > 0 && tip <= 100 && people > 0) {
      this.totalGeneral = (bill + (bill * tip) / 100) / people;
      this.totalTip = (bill * tip) / 100 / people;
      return;
    }
    if (bill > 0 && people > 0) {
      this.totalGeneral = bill / people;
      this.totalTip = 0;
      return;
    }
    this.totalGeneral = 0;
    this.totalTip = 0;
  };

  removeSelectedTip() {
    this.tipButtons._results.forEach((element: any) => {
      element.nativeElement.classList.remove('selectedTip');
      element.nativeElement.classList.add('unselectedTip');
    });
  }

  billInputChange(inputValue: number) {
    this.billValue = inputValue;
    this.total(this.billValue, this.tip, this.numberOfPeople);
  }

  peopleInputChange(inputValue: number) {
    this.numberOfPeople = inputValue;
    this.total(this.billValue, this.tip, this.numberOfPeople);
    this.invalidPeopleInput = false;
    if (inputValue <= 0) this.invalidPeopleInput = true;
    if (inputValue === null) this.invalidPeopleInput = false;
  }

  customInputChange(inputValue: number) {
    this.tip = inputValue;
    this.total(this.billValue, this.tip, this.numberOfPeople);
    this.removeSelectedTip();
  }

  changeTip(e: any) {
    this.tip = Number(e.target.value);
    this.customInput = '';
    this.total(this.billValue, this.tip, this.numberOfPeople);
    this.removeSelectedTip();
    e.target.classList.remove('unselectedTip');
    e.target.classList.add('selectedTip');
  }

  resetValues() {
    this.billValue = 0;
    this.numberOfPeople = 0;
    this.tip = 0;
    this.totalGeneral = 0;
    this.totalTip = 0;
    this.billInput = '';
    this.peopleInput = '';
    this.customInput = '';
    this.removeSelectedTip();
  }
}
