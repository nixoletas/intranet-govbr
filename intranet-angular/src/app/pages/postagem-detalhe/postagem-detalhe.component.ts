import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OperacoesService } from '../../services/operacoes.service';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'br-postagem-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownComponent],
  templateUrl: './postagem-detalhe.component.html',
  styleUrl: './postagem-detalhe.component.scss'
})
export class PostagemDetalheComponent implements OnInit {
  postagem: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private operacoesService: OperacoesService
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
    this.operacoesService.getOperacaoById(id).subscribe({
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
