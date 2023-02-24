import { useEffect, useState } from 'react';
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'
import styled from '@emotion/styled'
import Error from './Error';

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover{
    background-color: #7A7BFE;
    cursor: pointer;
  }
`

export const Formulario = ({setMonedas}) => {
  
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  
  
  const [moneda, SelectCoins] = useSelectCoins('Elige tu Moneda', coins);
  const [criptomoneda, SelectCriptomoneda] = useSelectCoins('Elige tu Criptomoneda', criptos);

  useEffect(() => {
    const getApi = async() => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

      const resp = await fetch(url)
      const result = await resp.json()
      
      const arrayCriptos = result.Data.map(cripto => {
        
        const object = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return object        
      })      
      setCriptos(arrayCriptos)      
    }
    getApi()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if([moneda, criptomoneda].includes("")){
      setError(true)
      return
    }
    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }
  
  
  return (
    <>
      {error && <Error>Todos los Campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >

        <SelectCoins/>
        <SelectCriptomoneda/>

        <InputSubmit 
          type="submit" 
          value='cotizar' 
        />
      </form>
    </>
    );
};
