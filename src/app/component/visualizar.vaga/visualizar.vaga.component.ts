import {Component, OnInit} from '@angular/core';
import {VagaService} from "../../service/vaga.service";
import {Vaga} from "../../interface/vaga";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-visualizar.vaga',
  templateUrl: './visualizar.vaga.component.html',
  styleUrls: ['./visualizar.vaga.component.css']
})
export class VisualizarVagaComponent implements OnInit {
  vagas!: Vaga[]
  notExist?: boolean = false;
  page = new FormGroup({
  pagina: new FormControl(['1'])
  })

  constructor(private router: Router ,private vagaService: VagaService) {
  }

  ngOnInit(): void {
    this.vagaService.getAll(0).subscribe(
      r => {
        if (r.datas?.length! <= 0) {
          this.notExist = true;
        } else {
          console.log(r.datas?.length)
          this.vagas = r.datas!
          console.log(this.vagas)
        }
      }
    )
  }

  detalhar(id?: any){
    this.router.navigate(["candidatar", id]).then(r => console.log(r))
  }
}
