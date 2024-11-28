import { AfterViewInit, Component } from '@angular/core';
import { OperacoesService } from '../../services/operacoes.service';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'br-operacoes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.scss'
})
export class OperacoesComponent implements AfterViewInit{
  items: any[] = []
  isLoading = true;

  constructor(
    private operacoesService: OperacoesService,
  ) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
    this.operacoesService.getOperacoes().subscribe({
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
