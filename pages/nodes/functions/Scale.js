// when creating a node
import { defineNode, NodeInterface } from "@baklavajs/core";
import { setType } from "@baklavajs/interface-types";
import { functionType } from "../interfaceTypes.js";

 
export const Scale = defineNode({
    title: "Scale",
    type: "Scale",
    inputs: {
        f: () => new NodeInterface("FunctionF", 0).use(setType, functionType),
        a: () => new NodeInterface("FunctionA", 0).use(setType, functionType),
        b: () => new NodeInterface("FunctionB", 0).use(setType, functionType),
    },
    outputs: {
        output: () => new NodeInterface("outputs", 0).use(setType, functionType),
    },
});