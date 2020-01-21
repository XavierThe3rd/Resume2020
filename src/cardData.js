//import {useState } from "react";

const dts = 1650 
let ltl = window.innerWidth > 1350;
let lts = window.innerWidth > 1150;

export  const cardData= [        
    {
    image: '../images/Xaragosa.png',
    title: 'Xaragosa \n the Dragon',
    desc: "A college graphic design project created in photoshop",
    project: "Art Piece",
    type: "PS",
    color: "#00c8ff",
    width: lts ? 600 : 545,
    top: -60,
    left: -150 
    },
    {
    image: '../images/TypeDictionary.png',
    title: 'Type \n Dictionary',
    desc: "A college booklet dictionary project created in indesign",
    project: "Booklet Piece",
    type: "ID",
    color: "#ff3f94",
    width: 395,
    top: -40,
    left: -25 
    },
    {
    image: '../images/Heelys.png',
    title: 'Heely’s\n Comeback',
    desc: "A college webpage design project created in react",
    project: "Web App",
    type: "JS",
    color: "#ffca28",
    width: 395,
    top: 0,
    left: 0 
    }
]

