import {Component, OnInit} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";
import {Empresa} from "../../../interface/empresa";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  empresas?: Empresa[]
  notExist?: boolean = false;

  constructor(private empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.empresaService.getAllEmpresa().subscribe(
      r => {
        if (r.datas?.length! <= 0){
          this.notExist = true;
        }else {
          console.log(r.datas?.length)
          this.empresas = r.datas
          console.log(this.empresas)
        }
      }
    )
  }

  clickMe(){
    console.log(this.empresas)
  }

}
