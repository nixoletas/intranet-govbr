import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PopService } from '../pop/pop.service';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'br-pop-detalhe',
  standalone: true,
  imports: [CommonModule, MarkdownModule, RouterModule],
  templateUrl: './pop-detalhe.component.html',
  styleUrl: './pop-detalhe.component.scss'
})
export class PopDetalheComponent {
  postagem: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private popService: PopService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchPostagem(id);
      }
    });
  }

  fetchPostagem(id: string): void {
    this.popService.getPopById(id).subscribe({
      next: (response) => {
        this.postagem = response.data;
        this.isLoading = false;
        console.log(this.postagem)
      }
    });
  }

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
