// Create the types. It is recommended to define them
// in a separate file and import them when creating the nodes.
import { NodeInterfaceType } from "@baklavajs/interface-types";
import "./interfaceTypes.css";

export const stringType = new NodeInterfaceType("string");
export const numberType = new NodeInterfaceType("number");
export const booleanType = new NodeInterfaceType("boolean");
export const functionType = new NodeInterfaceType("function");
export const layerType = new NodeInterfaceType("layer");
export const colorType = new NodeInterfaceType("color");
export const transitionType = new NodeInterfaceType("transition");


// stringType.addConversion(numberType, (v) => parseFloat(v));
// numberType.addConversion(stringType, (v) => (v !== null && v !== undefined && v.toString()) || "0");
// booleanType.addConversion(stringType, (v) => (typeof v === "boolean" ? v.toString() : "null"));