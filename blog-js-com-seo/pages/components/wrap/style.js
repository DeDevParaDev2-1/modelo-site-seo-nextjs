import style from 'styled-components'

const Wrap = style.div`
    background-color: #eee;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    @media(min-width: 700px){
        width: 90%;
    }
`;

export{
    Wrap
}