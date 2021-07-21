import style from 'styled-components'

const TopoContainer = style.div`
    background-color: #673ab7;
    box-shadow: 1px 3px 6px 0 #0000000f;
    .container{
        margin: 0 auto;
    }
`;
const Age = style.h2`
    color: #fff;
    font-size: 1.2em;
    font-weight: 400;
`;
const City = style.h2`
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
`;
const Email = style.h2`
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
`;
const Name = style.h1`
    color: #fff;
    font-size: 2em;
`;
const TitleGroup = style.div`
    line-height: 10px;
`;
export{
    Age,
    City,
    Email,
    Name,
    TitleGroup,
    TopoContainer
}