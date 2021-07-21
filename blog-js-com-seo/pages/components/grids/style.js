import style from 'styled-components'

const Container = style.div`
    margin: 0 auto;
    width: 99%;
    @media(min-width: 700px){
        width: 1080px;
    }
`;

const Row = style.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 700px){
        display: grid;
        align-items: center;
    }
`;

const ItemGrid = style.div`
    margin: 0 15px;
    @media(min-width: 700px){
        min-height: 30px;
    }
`;

export{
    Container,
    ItemGrid,
    Row
}