import React from 'react';
import AllProjects from './AllProjects';
import JSProjects from './JSProjects';
import HtmlProjects from './HtmlProjects';
import TailwindProject from './TailwindProject';
import FigmaProjects from './FigmaProjects';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    return (
        <Accordion >
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading >
                    <AccordionItemButton style={{backgroundColor:"rgb(29, 29, 29)", color:"rgb(19, 185, 185)", fontSize:"30px"}}>
                       React JS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       <AllProjects/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"rgb(29, 29, 29)", color:"rgb(19, 185, 185)", fontSize:"30px"}}>
                     JavaScript
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    <JSProjects/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem  >
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"rgb(29, 29, 29)", color:"rgb(19, 185, 185)", fontSize:"30px"}}>
                    HTML/CSS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        <HtmlProjects/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"rgb(29, 29, 29)", color:"rgb(19, 185, 185)", fontSize:"30px"}}>
                     Tailwind
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        <TailwindProject/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"rgb(29, 29, 29)", color:"rgb(19, 185, 185)", fontSize:"30px"}}>
                     Figma
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        <FigmaProjects/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}