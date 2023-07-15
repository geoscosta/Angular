import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FornecedorService } from '../services/fornecedor.service';
import { StringUtils } from './../../utils/string-utils';
import { CepConsulta } from './../models/endereco';
import { FornecedorBaseComponent } from '../fornecedor-form.base.componet';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})
export class NovoComponent extends FornecedorBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  textoDocumento: string = "CPF (requerido)";
  cep: string;

  constructor(private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private toastr: ToastrService) { super(); }

  ngOnInit() {

    this.fornecedorForm = this.fb.group({
      nome: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      ativo: ['', [Validators.required]],
      tipoFornecedor: ['', [Validators.required]],

      endereco: this.fb.group({
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      })
    });

    this.fornecedorForm.patchValue({ tipoFornecedor: '1', ativo: true});
  }

  ngAfterViewInit(): void {
    this.tipoFornecedorForm().valueChanges
      .subscribe(() => {
        super.configurarValidacaoFormulario(this.formInputElements)
        super.validarFormulario(this.fornecedorForm);
      });

      super.configurarValidacaoFormulario(this.formInputElements)
  }

  // trocarValidacaoDocumento() {

  //   if(this.tipoFornecedorForm().value === "1") {
  //     this.documento().clearValidators();
  //     this.documento().setValidators([Validators.required,]);
  //   }
  //   else {

  //   }
  // }

  tipoFornecedorForm(): AbstractControl {
    return this.fornecedorForm.get('tipoFornecedor');
  }

  documento(): AbstractControl {
    return this.fornecedorForm.get('documento');
  }

  buscarCep() {

    this.cep = StringUtils.somenteNumeros(this.cep);
    if(this.cep.length < 8) return;

    this.fornecedorService.consultarCep(this.cep)
      .subscribe(
        cepRetorno => this.preencherEnderecoConsulta(cepRetorno),
        erro => this.errors.push(erro)
      );
  }

  preencherEnderecoConsulta(cepConsulta: CepConsulta) {
    this.fornecedorForm.patchValue({
      endereco: {
        cep: cepConsulta.cep,
        logradouro: cepConsulta.logradouro,
        complemento: cepConsulta.complemento,
        bairro: cepConsulta.bairro,
        cidade: cepConsulta.localidade,
        estado: cepConsulta.uf,
      }
    });
  }

   adicionarFornecedor() {
    if (this.fornecedorForm.dirty && this.fornecedorForm.valid) {
      this.fornecedor = Object.assign({}, this.fornecedor, this.fornecedorForm.value);

      this.fornecedor.endereco.cep = StringUtils.somenteNumeros(this.fornecedor.endereco.cep);

      this.fornecedorService.novoFornecedor(this.fornecedor)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );
    }
  }

  processarSucesso(response: any) {
    this.fornecedorForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;

    let toast = this.toastr.success('Fornecedor cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/fornecedores/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
