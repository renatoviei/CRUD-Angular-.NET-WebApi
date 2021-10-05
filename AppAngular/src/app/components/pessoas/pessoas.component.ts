import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Pessoa';
import { PessoasService } from 'src/app/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  pessoas : Pessoa[];

  visibilidadeTabela : boolean = true;
  visibilidadeFormulario : boolean = false; 

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {

    this.pessoasService.PegarTodos().subscribe(resultado => {
      this.pessoas = resultado;
    });

    
  }

  ExibirFormularioCadastro():void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Nova Pessoa';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });    
  }

  EnviarFormulario(): void{
    const pessoa : Pessoa = this.formulario.value;

    this.pessoasService.SalvarPessoa(pessoa).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Pessoa inserida com sucesso');
      this.pessoasService.PegarTodos().subscribe((registros) => {
        this.pessoas = registros;
      });
    });
  }

  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

}
