import style from "styled-components";

export const Button = style.button`
background-color: ${({ theme }) => (theme === "a" ? "blue" : "white")};   
color: ${({ theme }) => (theme === "a" ? "white" : theme === "e" ? "blue" : "black")};
height:5vw;
width:20%;
font-size: medium;
font-weight: 600;
margin-top:10px;
border: 1px dashed black;
border:${({ theme }) =>
  theme === "c"
    ? "1px dashed black"
    : theme === "a" || theme === "b"
    ? "1px solid black"
    : "none"};
  cursor: pointer;
  text-decoration: none;
`;

