import { Component } from '@angular/core';
import { PopService } from './pop.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'br-pop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pop.component.html',
  styleUrl: './pop.component.scss'
})
export class PopComponent {
  items: any[] = []
  isLoading = true;

  constructor(
    private popService: PopService,
  ) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
    this.popService.getPop().subscribe({
      next: (response) => {
        this.items = response.data;
        this.isLoading = false;
      }
    });
  };

  formatDate(dateString: string): { day: string, month: string, year: string } {
    const date = new Date(dateString);

    // Configurando o formatador para o fuso horário "America/Campo_Grande"
    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Campo_Grande',
      day: '2-digit',
      month: '2-digit', // Formato abreviado (ex: "set")
      year: '2-digit',
    });

    // Aplicando a formatação completa para dia, mês e hora
    const formattedDate = dateFormatter.format(date);

    // Quebra o resultado em partes (dia, mês, horário)
    const [day, month, year] = formattedDate.split(' ');

    return { day, month, year };
  }

}
