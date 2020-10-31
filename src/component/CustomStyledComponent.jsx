import Style from "styled-components";

const Container = Style.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin: 50px;
    justify-content: center;
`;
const LoginContainer = Style.div`
border-radius: 6px;
width: 350px;
position: absolute;
top: 38%;
left: 38%;
margin: -25px 0 0 -25px;
padding: 10px;
box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.425),
   3px 4px 3px 0px rgba(88, 88, 88, 0.425); 
`;
const FormDiv = Style.div`
   border-radius: 6px;
   height: auto;
   width: auto;
   padding: 10px;
   box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.425),
      3px 4px 3px 0px rgba(88, 88, 88, 0.425);
   `;
const CustomInput = Style.input`
    height: 35px;
    width: 300px;
    border: 1px solid #417dc1;
    border-radius: 8px;
`;
const AddButton = Style.button`
height: 35px;
width: 100%;
border: 1px solid #417dc1;
border-radius: 8px;
color: #417dc1
`;
const Select = Style.select`
height: 35px;
width: 100%;
border: 1px solid #417dc1;
border-radius: 8px;
color: #417dc1
`;
const CodeContainer = Style.div`
    display: flex;
    height: 25px;
    border: 1px solid #417dc1;
    border-Radius: 8px;
    margin: 20px;
    justify-content: center;
`;
const Para = Style.p`
    color: #417dc1;
    margin: auto;
`;
const Para1 = Style.p`
    color: #b22222;
    margin: auto;
`;
const CityPara = Style.p`
    color: #417dc1;
    margin: auto;
    width: 100px
`;
const DeleteButton = Style.button`
    border: 1px solid #b22222;
    border-Radius: 6px; 
    height: 35px;
    color: #b22222;
`;
const EditButton = Style.button`
    border: 1px solid #417dc1;
    border-Radius: 6px; 
    height: 35px;
    color: #417dc1;
`;
export {
  Container,
  FormDiv,
  CustomInput,
  AddButton,
  Select,
  CodeContainer,
  Para,
  Para1,
  CityPara,
  DeleteButton,
  EditButton,
  LoginContainer,
};
