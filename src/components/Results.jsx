import styled from "@emotion/styled";

const Container = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 10px;
`

const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 30px;
  span{
    font-weight: 700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 150px;
`


export const Results = ({resultado}) => {

  const {PRICE, IMAGEURL, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado


  return (
    <Container>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto"/>
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>última Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Container>
  )
};
