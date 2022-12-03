import { Component, ElementRef, ViewChild } from '@angular/core';
import { Groups } from './interfaces/groups';
import * as Toastify from 'toastify-js';
import { PasswordGeneratorModule } from './password-generator.module';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent {
  @ViewChild('passwordLength') passwordLength!: ElementRef;
  @ViewChild('strengthText') strengthText!: ElementRef;
  @ViewChild('weakBar') weakBar!: ElementRef;
  @ViewChild('mediumBar') mediumBar!: ElementRef;
  @ViewChild('strongBar') strongBar!: ElementRef;
  @ViewChild('error') error!: ElementRef;
  @ViewChild('notification') notification!: ElementRef;
  password: string = 'Password';
  length: number = 0;
  showNotification = false;
  groups: Groups = {
    lowercase: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    uppercase: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    symbols: ['.', '+', '-', '*', '!', '#', '$', '%'],
  };
  groupsIncluded: string[] = ['numbers'];

  constructor() {}

  getPassword() {
    this.password = '';
    this.error.nativeElement.style.display = 'none';
    this.length = Number(this.passwordLength.nativeElement.value) ?? 0;
    if (this.length === 0 || this.groupsIncluded.length === 0) {
      this.valuesOnError();
      return;
    }
    for (let i = 0; i < this.length; i++) {
      const randomNumberGroupsIncluded: number = this.getRandomNumber(
        this.groupsIncluded
      );
      const randomGroupIncluded =
        this.groupsIncluded[randomNumberGroupsIncluded];
      const randomNumber: number = this.getRandomNumber(
        this.groups[randomGroupIncluded as keyof typeof this.groups]
      );
      this.password = `${this.password}${
        this.groups[randomGroupIncluded as keyof typeof this.groups][
          randomNumber
        ]
      }`;
    }
    this.toggleCLassBar();
  }

  getRandomNumber(group: string[] = this.groups.numbers) {
    return Math.floor(Math.random() * group.length);
  }

  isChecked(event: Event) {
    const element = (event?.target as HTMLInputElement).id;
    if ((event?.target as HTMLInputElement).checked) {
      if (this.groupsIncluded.includes(element)) {
        return;
      }
      this.groupsIncluded.push(element);
    } else {
      if (this.groupsIncluded.includes(element)) {
        const index = this.groupsIncluded.indexOf(element);
        this.groupsIncluded.splice(index, 1);
      }
    }
  }

  valuesOnError(): void {
    this.strengthText.nativeElement.innerText = '';
    this.weakBar.nativeElement.classList.remove('strength-power');
    this.mediumBar.nativeElement.classList.remove('strength-power');
    this.strongBar.nativeElement.classList.remove('strength-power');
    this.error.nativeElement.style.display = 'block';
  }

  toggleCLassBar() {
    if (
      this.groupsIncluded.length === 1 ||
      this.length <= 6 ||
      (this.groupsIncluded.length === 2 && this.length <= 8)
    ) {
      this.strengthText.nativeElement.innerText = 'WEAK';
      this.weakBar.nativeElement.classList.add('strength-power');
      this.mediumBar.nativeElement.classList.remove('strength-power');
      this.strongBar.nativeElement.classList.remove('strength-power');
    } else if (
      this.length < 10 ||
      (this.groupsIncluded.length === 2 && this.length > 8) ||
      (this.groupsIncluded.length === 3 && this.length < 10)
    ) {
      this.strengthText.nativeElement.innerText = 'MEDIUM';
      this.weakBar.nativeElement.classList.add('strength-power');
      this.mediumBar.nativeElement.classList.add('strength-power');
      this.strongBar.nativeElement.classList.remove('strength-power');
    } else {
      this.strengthText.nativeElement.innerText = 'STRONG';
      this.weakBar.nativeElement.classList.add('strength-power');
      this.mediumBar.nativeElement.classList.add('strength-power');
      this.strongBar.nativeElement.classList.add('strength-power');
    }
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    Toastify({
      text: 'Copied!',
      duration: 2000,
      gravity: 'top',
      position: 'center',
      style: {
        background: '#a5ffaf',
        color: '#202020',
        'font-family': '"Source Code Pro", monospace',
        'font-size': '14px',
        'font-weight': 'bold',
        padding: '10px 15px'
      },
    }).showToast();
  }
}
