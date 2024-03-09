// when creating a node
import { defineNode, NodeInterface } from "@baklavajs/core";
import { setType } from "@baklavajs/interface-types";
import { functionType } from "../interfaceTypes.js";
import { SliderInterface } from "baklavajs";
 
// Output limit 0-32767
export const Bladeangle = defineNode({
    title: "Bladeangle",
    type: "Bladeangle",
    inputs: {  
    },
    outputs: {
        output: () => new SliderInterface("angle", 0, 0, 32767), // How to make it integer?
    },
});