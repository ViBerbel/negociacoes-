class ListaNegociacoes{
  constructor(){
    this._negociacoes = []
  }

  adiciona(negociacao){
    this._negociacoes.push(negociacao)
  }

  get Negociacoes(){
    //evita que alterem a lista
    return [].concat(this._negociacoes)
  }
}