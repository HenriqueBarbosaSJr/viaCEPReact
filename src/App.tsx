
import { useState } from 'react';
import './App.css'
import api from './services/api'

function App() {

  const [ searchCep, setSearchCep] = useState('');
  const [ cep, setCep] = useState('');
  const [ uf, setUf] = useState('');
  const [ log, setLog] = useState('');
  const [ bairro, setBairro] = useState('');


  async function search(){
    const resp = await api.get(searchCep + '/json/');
    console.log(resp.data.bairro);
    setCep(resp.data.cep);
    setUf(resp.data.uf);
    setLog(resp.data.logradouro);
    setBairro(resp.data.bairro);
  }

  return (
    <>
      <p>Consulta ViaCEP - Aula React</p>
      <input type="text" onChange={e => setSearchCep(e.target.value)} /><br/><br/>
      <button onClick={search}>Consultar CEP</button>
      <p>CEP: {cep}</p>
      <p>UF: {uf}</p>
      <p>Logradouro: {log}</p>
      <p>Bairro: {bairro}</p>
    </>
  )
}

export default App
