// when creating a node
import { defineNode, NodeInterface } from "@baklavajs/core";
import { setType } from "@baklavajs/interface-types";
import { functionType } from "../interfaceTypes.js";
import { NumberInterface } from "baklavajs";

 
export const Int = defineNode({
    title: "Int",
    type: "Int",
    inputs: { 
        // value: () => new NumberInterface("Number", 1), 
    },
    outputs: {
        output: () => new NumberInterface("Number", 1), 
    },
});