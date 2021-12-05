import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
  }

  function salvarCliente(cliente: Cliente) {
    repo.salvar(cliente)

  }

  function criarCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario
  }

  return {
      cliente,
      clientes,
      criarCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      tabelaVisivel,
      exibirTabela
  }
}