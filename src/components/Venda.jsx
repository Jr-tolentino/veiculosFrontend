import { useState } from "react"
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import styles from './Veiculo.module.css'

function Venda() {
  let [vendas, setVendas] = useState([])
  let [data, setData] = useState('');
  let [formaPagamento, setFormaPagamento] = useState('');
  let [placa, setPlaca] = useState('');
  let [valor, setValor] = useState('');


function salvar(){
  let venda = {
    data: data,
    formaPagamento: formaPagamento,
    placa: placa,
    valor: valor,
  }
  vendas.push(venda)
  limparForm()

}

function excluir(venda) {
  vendas.forEach((v,i)=>{
    if(venda.placa == v.placa){
      vendas.splice(i, 1)
    }
    setVendas([...vendas])
})
}

function limparForm() {
  setData ('')
  setFormaPagamento ('')
  setPlaca ('')
  setValor ('')
}

  return (
    <div className={styles.main}>
      <h1>Vendas</h1>
  
        <Form.Control
          value={data}
          onChange={(e)=>{setData(e.target.value)}}
          placeholder="Data"
          aria-label="Data"
          aria-describedby="basic-addon1"
        />

        <Form.Control
          value={formaPagamento}
          onChange={(e)=>{setFormaPagamento(e.target.value)}}
          placeholder="Forma de Pagamento"
          aria-label="Forma de Pagamento"
          aria-describedby="basic-addon1"
        />

        <Form.Control
          value={placa}
          onChange={(e)=>{setPlaca(e.target.value)}}
          placeholder="Placa"
          aria-label="Placa"
          aria-describedby="basic-addon1"
        />

        <Form.Control
          value={valor}
          onChange={(e)=>{setValor(e.target.value)}}
          placeholder="Valor em R$"
          aria-label="Valor"
          aria-describedby="basic-addon1"
        />

        

      <Button onClick={salvar}>Salvar</Button>
      <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <td>Placa</td>
          <td>Valor</td>
          <td>Forma de Pagamento</td>
          <td>Data</td>
          <td></td>
        </tr>
        </thead>
       

        <tbody>
        {
          vendas.map((venda, i) => {
            return (
              <tr key={i}>
                <td>{venda.data}</td>
                <td>{venda.formaPagamento}</td>
                <td>{venda.placa}</td>
                <td>{venda.valor}</td>
                <td>
                  <Button className="btExcluir" onClick={()=>(excluir(venda))}>X</Button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </div>
  )
}


export default Venda