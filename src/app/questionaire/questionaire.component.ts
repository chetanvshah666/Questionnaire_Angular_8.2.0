import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class QuestionaireComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  dataResp: any;
  showHide = false;
  answerArray = [];
  submitted = false;
  result = {};
  mandatoryFilled = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRespData();
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  getRespData() {
    let localUrl = '';
    localUrl = './assets/json/Data.json';
    this.dataResp = [];
    this.subscription = this.http.get(localUrl).subscribe((response: any) => {
      this.dataResp = response;
      this.setDefaultValue();
    },
      (error) => {
        console.log(error);
      }
    );
  }

setDefaultValue() {
  for (let index = 0; index < this.dataResp.quiz.length; index++) {
    const element = this.dataResp.quiz[index];
    this.answerArray[index] = null;
  }

}

  submitClick() {

    // alert(this.answerArray);
    // alert(this.answerArray.length);
    this.submitted = true;

    if (this.countResult()) {
      this.showHide = true;
    } else {
      this.showHide = false;
    }



  }

  resetClick() {

    this.answerArray = [];
    this.showHide = false;
    this.submitted = false;
    this.result = {};
    this.setDefaultValue();
  }



  getQuestionCss(data, ans) {

    if (this.mandatoryFilled && this.showHide) {

      if (data == ans) {
        return 'correctCss';

      } else if (data != ans) {
        return 'incorrectCss';

      }
    } else if (this.submitted && !data) {
      return '';

    }
  }

  getDropdownCss(data, ans) {

    if (this.mandatoryFilled && this.showHide) {

      if (data == ans) {
        return 'correctDropDownCss';

      } else if (data != ans) {
        return 'incorrectDropDownCss';

      }
    } else if (this.submitted && !data) {
      return 'incorrectDropDownCss';

    }


  }

  countResult() {
    let correctCount = 0;
    let incorrectCount = 0;

    if (this.dataResp.quiz.length != this.answerArray.length) {
      return false;
    } else {
      for (let index = 0; index < this.dataResp.quiz.length; index++) {
        const element = this.dataResp.quiz[index];

        if (this.answerArray[index]) {

          if (this.answerArray[index] == element.answer) {
            correctCount++;
          } else {
            incorrectCount++;
          }

        } else {
          return false;
        }
      }
      this.result["correct"] = correctCount;
      this.result["incorrect"] = incorrectCount;
      // alert(JSON.stringify(this.result));
      this.mandatoryFilled = true;
      return true;


    }



  }

}
