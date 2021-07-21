import Head from 'next/head'
import { Container, ItemGrid, Row } from '../grids/style'
//Grids
import {
    Age,
    City,
    Email,
    Name, 
    TitleGroup, 
    TopoContainer
} from './style'


export default function Topo(props) {
    return (
      <>
        <TopoContainer>
            <Container>
                <Row>
                    <ItemGrid>
                        <TitleGroup>
                            <Name>{props.name}</Name>
                            <Age>Idade: {props.age}</Age>
                            <City>Cidade: {props.city}</City>
                            <Email>Email: {props.email}</Email>
                        </TitleGroup>
                    </ItemGrid>
                </Row>
            </Container>
        </TopoContainer>
      </>
    )
  }
  