import { FormGroup } from "@angular/forms";
import { Fornecedor } from "./models/fornecedor";
import { FormBaseComponent } from "../base-components/form-base.component";
import { ElementRef } from "@angular/core";
import { Endereco } from "./models/endereco";

export abstract class FornecedorBaseComponent extends FormBaseComponent {
  errors: any[] = [];
  fornecedorForm: FormGroup;
  fornecedor: Fornecedor = new Fornecedor();

  errorsEndereco: any[] = [];
  enderecoForm: FormGroup;
  endereco: Endereco = new Endereco();

  constructor() {
    super();

    this.validationMessages = {
      nome: {
        required: 'Informe o Nome',
      },
      documento: {
        required: 'Informe o Documento'
      },
      logradouro: {
        required: 'Informe o Logradouro',
      },
      numero: {
        required: 'Informe o Número',
      },
      bairro: {
        required: 'Informe o Bairro',
      },
      cep: {
        required: 'Informe o CEP'
      },
      cidade: {
        required: 'Informe a Cidade',
      },
      estado: {
        required: 'Informe o Estado',
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
    super.configurarValidacaoFormularioBase(formInputElements, this.fornecedorForm)
  }
}
