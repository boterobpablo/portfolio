import { Component, OnInit } from '@angular/core';
import { Advice } from './interfaces/advice';
import { AdviceGeneratorService } from './services/advice-generator.service';

@Component({
  selector: 'app-advice-generator',
  templateUrl: './advice-generator.component.html',
  styleUrls: ['./advice-generator.component.css'],
})
export class AdviceGeneratorComponent implements OnInit {
  advice: string = 'Click on the button to get an advice';
  idAdvice: number = 0;

  constructor(private service: AdviceGeneratorService) {}

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.service.getAdvice().subscribe((advice: Advice) => {
      this.advice = advice.slip.advice;
      this.idAdvice = advice.slip.id;
    });
  }
}
