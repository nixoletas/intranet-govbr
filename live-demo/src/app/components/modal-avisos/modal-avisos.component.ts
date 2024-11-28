import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { AniversariantesService } from '../aniversariantes/aniversariantes.service';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import BRModal from '@govbr-ds/core/dist/components/modal/modal';
import { AvisosService } from '../../services/avisos.service';

@Component({
  selector: 'br-modal-avisos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-avisos.component.html',
  styleUrl: './modal-avisos.component.scss',
  providers: [DatePipe]
})
export class ModalAvisosComponent implements AfterViewInit {
  @ViewChild('avisosRef', {static: false}) avisosRef: ElementRef | any;

  instance: any;
  allItems: any[] = []
  isLoading = signal(true);

  constructor(private avisosService: AvisosService) { }

  ngAfterViewInit(): void {
    this.instance = new BRModal('.br-menu-avisos', document.querySelector('.br-menu-avisos'));
    this.fetchData();
  }

  fetchData(): void {
    this.avisosService.getAvisos().subscribe({
      next: (response) => {
        this.allItems = response.data;
        this.isLoading.set(false);
      }
    });
  };

  close() {
    this.avisosRef.nativeElement.style.display = 'none';
  }
}
