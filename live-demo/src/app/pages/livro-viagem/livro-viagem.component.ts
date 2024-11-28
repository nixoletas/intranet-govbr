import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import BRDateTimePicker from '@govbr-ds/core/dist/components/datetimepicker/datetimepicker'


@Component({
  selector: 'br-livro-viagem',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './livro-viagem.component.html',
  providers: [provideNgxMask()]
})
export class LivroViagemComponent implements AfterViewInit {
  @ViewChild('datetimepicker') carousel: ElementRef | undefined;
  now: string = "";
  instance: any;
  feedback = { pg: '', name: '', phone: '', destination: '', ramal: '', reason: '', period: '', emergencyphone: '', emergencydegree: '', emergencyname: ''};
  feedbackSent = false;
  feedbackError = false;
  ranks = ['Sd', 'Cb', '3º Sgt', '2º Sgt', '1º Sgt', 'ST', 'Asp Of', '2º Ten', '1º Ten', 'Cap', 'Maj', 'TC', 'Cel'];

  apiUrl = '';

  feedbackForm: any;

  constructor(private http: HttpClient, private brDateTimePicker: ElementRef) { }

  ngAfterViewInit(): void {
    this.instance = new BRDateTimePicker('.br-datetimepicker', this.brDateTimePicker.nativeElement.querySelector('.br-datetimepicker'))
  }

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    const now = new Date();
    this.now = now.toLocaleString(); // Formata a data e a hora como string
  }



  onSubmit() {

    const payload = {
      pg: this.feedback.pg,
      name: this.feedback.name.toUpperCase(),
      phone: this.feedback.phone,
      destination: this.feedback.destination,
      period: this.feedback.period,
      emergencydegree: this.feedback.emergencydegree,
      emergencyname: this.feedback.emergencyname.toUpperCase(),
      emergencyphone: this.feedback.emergencyphone,
      reason: this.feedback.reason
    };

    this.http.post(this.apiUrl, payload)
      .subscribe(response => {
        this.feedbackSent = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, error => {
        this.feedbackError = true;
        this.feedbackSent = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => { this.feedbackError = false }, 2000)
      });
  }

}
