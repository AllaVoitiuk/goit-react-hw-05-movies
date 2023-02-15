import styled from 'styled-components';

export const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
min-height: 64px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: #fff;
background-color:#00CED1;
`;

export const Form = styled.form`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
`;

export const Button = styled.button`
display: inline-block;
width: 48px;
height: 48px;
border: 0;
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
`;

export const Hr = styled.hr`
box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Logo = styled.logo`
width: 16px;
height: 16px;
border: 0;
`;

export const Input = styled.input`
display: inline-block;
width: 100%;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
    `;
    
// export const Backdrop = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
// `;

// export const ModalWindow = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: antiquewhite;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 500px;
//   min-height: 100px;
//   padding: 20px;
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   gap: 16px;
// `;