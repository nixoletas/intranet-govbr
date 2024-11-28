import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Component, OnInit } from '@angular/core';
import { AniversariantesService } from './aniversariantes.service';

registerLocaleData(localePt);

@Component({
  selector: 'br-aniversariantes',
  templateUrl: './aniversariantes.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./aniversariantes.component.scss'],
  providers: [DatePipe]
})
export class AniversariantesComponent implements OnInit {
  data: any[] = [];
  currentMonth: string;

  constructor(private aniversariantesService: AniversariantesService, private datePipe: DatePipe) {
    this.currentMonth = this.datePipe.transform(new Date(), 'MMMM', undefined, 'pt-BR') || '';
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.aniversariantesService.getAllData().subscribe({
      next: (response) => {
        const currentMonth = new Date().getMonth(); // Mês atual (0-11)

        // Filtra os dados para exibir apenas os aniversariantes do mês corrente
        this.data = response.filter((item: any) => {
          const birthdate = new Date(item.attributes['data_aniversario']);

          return birthdate.getMonth() === currentMonth;
        });

        // Ordena pela data de aniversário, priorizando o aniversário de hoje
        this.data.sort((a, b) => {
          const birthdateA = new Date(a.attributes['data_aniversario']);
          const birthdateB = new Date(b.attributes['data_aniversario']);

          const isTodayA = this.isBirthdayToday(a.attributes['data_aniversario']);
          const isTodayB = this.isBirthdayToday(b.attributes['data_aniversario']);

          if (isTodayA && !isTodayB) {
            return -1; // Aniversário de hoje vem primeiro
          } else if (!isTodayA && isTodayB) {
            return 1; // Aniversário de hoje vem primeiro
          } else {
            return birthdateA.getDate() - birthdateB.getDate();
          }
        });
      }
    });
  }


  // Verifica se a data de aniversário é hoje
  isBirthdayToday(birthdate: string): boolean {
    const today = new Date();
    const birthDate = new Date(birthdate);

    return today.getUTCDate() === birthDate.getUTCDate() &&
           today.getUTCMonth() === birthDate.getUTCMonth();
  }
}
