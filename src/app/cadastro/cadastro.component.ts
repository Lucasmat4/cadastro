import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: ''
  };

  onSubmit() {
    console.log('Usuário cadastrado:', this.usuario);
  }
}
  