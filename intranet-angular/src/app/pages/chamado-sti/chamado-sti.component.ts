import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskService, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'br-chamado-sti',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './chamado-sti.component.html',
  providers: [provideNgxMask()]
})
export class ChamadoStiComponent {
  now: string = "";
  feedback = { pg: '', name: '', phone: '', description: '', ramal: '' };
  feedbackSent = false;
  feedbackError = false;
  ranks = ['Sd', 'Cb', '3º Sgt', '2º Sgt', '1º Sgt', 'ST', 'Asp Of', '2º Ten', '1º Ten', 'Cap', 'Maj', 'TC', 'Cel'];

  apiUrl = '';

  feedbackForm: any;

  constructor(private http: HttpClient) { }

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
      ramal: this.feedback.ramal,
      description: this.feedback.description,
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
