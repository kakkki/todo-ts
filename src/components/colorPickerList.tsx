import React from "react";
import { Color } from "../model/color";
import { ColorPicker } from "./";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

export const ColorPickerList = (props: Props) => (
    <ul>
        <ColorPicker color={props.color} onColorUpdated={props.onColorUpdated} colorId={"red"}/>
        <ColorPicker color={props.color} onColorUpdated={props.onColorUpdated} colorId={"green"}/>
        <ColorPicker color={props.color} onColorUpdated={props.onColorUpdated} colorId={"blue"}/>
    </ul>
)