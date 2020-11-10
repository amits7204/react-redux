import Style from "styled-components";

const Navbar = Style.div`
    padding: 10px;
    background: #FFFFFF;
    height: 52px;
    position: relative;
`;

const ProfileNavbar = Style.div`
    padding: 10px;
    background: #263f46;
    height: 40px;
    position: relative;
`;

const ProfileContainer = Style.body`
    background-color: #ececec;
    height: 100vh;
`;

const PostContainer = Style.div`
    width: 554px;
    height: auto;
    border: 1px solid grey;
    border-radius: 4px;
`;

const CreatePostContainer = Style.div`
    width: 554px;
    height: auto;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 2px;
`;

const Posts = Style.div`
    width: 554px;
    height: auto;
    border: 1px solid grey;
    border-radius: 4px;
    margin-bottom: 8px;
`;

const ProfileStuff = Style.div`
    width: 218px;
    height: 350px;
    border-radius: 4px;
    border: 0.5px solid #969fa1;
    background: #FFFFFF;
`;
const Banner = Style.img`
    height: 54px;
`;

const CovidNavbar = Style.div`
    padding: 10px;
    background: #E9E5DF;
    height: 42px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
`;
const CovidPara = Style.p`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    margin-left: 4%;
`;

const CommunityPara = Style.p`
    width: 626px;
    height: 120px;
    color: #2977c9;
    top: 5%;
    margin-left: 8%;
    font-size: 3.1rem;
    text-align: left;
`;

const Box = Style.div`
    box-shadow: 0 8px 6px -6px grey;
    width: 408px;
    height: 59px;
    border: 1px solid grey;
    margin-left: 8%;
    border-radius: 4px;
    margin-bottom: 3%;
    position: relative;
`;

const BoxPara = Style.p`
    position: absolute;
    top: 15%;
    left: 5%;
    transform: translate(0, -50%);
    font-weight: normal;
    font-size: 22px;
`;

const LinkedInStuff = Style.div`
    display: flex;
    gap: 2px;
`;

const Logo = Style.img`
    height: 32px;
    width: 136px;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(0, -50%);
    
`;

const LearnMore = Style.p`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    
`;

const LinkButton = Style.button`
    border: 1px solid #1B73B1;
    border-radius: 2px;
    height: 41px;
    width: 101px;
    color: #1B73B1;
    background: #FFFFFF;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0, -50%);
    font-weight: bold;
    font-size: 14px;
`;

const H4 = Style.h4`
    color: #666666;
    position: absolute;
    top: 25%;
    right: 15%;
    transform: translate(0, -50%);
`;

const SignUpContainer = Style.body`
    background-color: #F3F2EF;
    height: 105vh;
    padding-top: 15px;
`;
const SignInContainer = Style.body`
    background-color: #FFFFFF;
    height: 105vh;
    padding-top: 15px;
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
  Navbar,
  Logo,
  LinkButton,
  H4,
  CovidNavbar,
  CovidPara,
  LearnMore,
  CommunityPara,
  LinkedInStuff,
  Box,
  BoxPara,
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
  SignUpContainer,
  SignInContainer,
  ProfileContainer,
  ProfileNavbar,
  ProfileStuff,
  Banner,
  PostContainer,
  CreatePostContainer,
  Posts,
};
