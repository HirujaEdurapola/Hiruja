#!/usr/bin/env node

import boxen from 'boxen';
import chalkAnimation from 'chalk-animation';


let hiruja = `

    ██╗  ██╗██╗██████╗ ██╗   ██╗     ██╗ █████╗ 
    ██║  ██║██║██╔══██╗██║   ██║     ██║██╔══██╗
    ███████║██║██████╔╝██║   ██║     ██║███████║
    ██╔══██║██║██╔══██╗██║   ██║██   ██║██╔══██║
    ██║  ██║██║██║  ██║╚██████╔╝╚█████╔╝██║  ██║
    ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝
    
    Name: Hiruja Edurapola
    Email: videohiruja@gmail.com
    `


const rainbow = chalkAnimation.rainbow(boxen(hiruja, {padding: 1})); // Animation starts

// setTimeout(() => {
//     rainbow.stop(); // Animation stops
// }, 1000);

// setTimeout(() => {
//     rainbow.start(); // Animation resumes
// }, 2000);

// chalkAnimation.rainbow('Lorem ipsum');
