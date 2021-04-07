import styled from '@emotion/styled'

export const MainContainer = styled.div`

    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgb(35,0,133);
    background: radial-gradient(circle, rgba(35,0,133,1) 7%, rgba(0,0,0,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.h2`

    font-size:${props => props.size};
    font-weight:${props => props.weight};
    margin:${props => props.margin};
    text-align:${props => props.align};
    text-transform:${props => props.transform};
    text-decoration:${props => props.decoration};
    color:${props => props.color};
`;

export const Container = styled.div`

    width:${props => props.width};
    height:${props => props.height};
    margin:${props =>props.margin};
    padding:${props =>props.padding};
    background-color:${props => props.bg};
    border:${props => props.border};
    border-radius:${props => props.radius};
    position:${props => props.position};
    transform:${props => props.transfrom};
    top:${props => props.top};
    z-index:${props => props.zIndex};
    left:${props => props.left};
    display:${props => props.display};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    flex-direction:${props => props.direction};
    flex-wrap:${props => props.wrap};
`;

export const Select = styled.select`

    outline:none;
    font-size:${props => props.size};
    padding:${props => props.padding};
    border-radius:${props => props.radius};
`;

export const Label = styled.label`

    font-size:${props => props.size};
    margin:${props => props.margin};
    font-weight:${props => props.weight};

`;

export const Input = styled.input`

    outline:none;
    font-size:${props => props.size};
    padding:${props => props.padding};
    border-radius:${props => props.radius};
    border:${props => props.border};
`;

export const Form = styled.form`

    width:${props => props.width};
    height:${props => props.height};
    margin:${props =>props.margin};
    padding:${props =>props.padding};
    background-color:${props => props.bg};
    border:${props => props.border};
    border-radius:${props => props.radius};
    display:${props => props.display};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    flex-direction:${props => props.direction};
`;

export const Button = styled.button`

    width:${props => props.width};
    height:${props => props.height};
    background:${props => props.bg};
    padding:${props => props.padding};
    margin:${props => props.margin};
    border:${props => props.border};
    border-radius:${props => props.radius};
    display:${props => props.display};
    font-size:${props => props.fontSize};
    font-family:${props =>props.fontFamily};
    color:${ props => props.color};
    outline:none;
    text-transform:uppercase;

    &:hover {
        transition:${props => props.transition};
        color:${props => props.hover_color};
        background:${props => props.hover_bg};
        outline:none;
        cursor:pointer;
    }

`;


export const Cell = styled.div`

    width:2.5rem;
    height:2.5rem;
    border:1px solid black;
    background:${props => props.bg};
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;

`;