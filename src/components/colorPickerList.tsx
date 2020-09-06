import React from "react";
import { Color } from "../model/color";
import { ColorPicker } from "./";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

const updateColor = (props: Props, colorId: keyof Color) => (value: number) => {
    props.onColorUpdated({
      ...props.color,
      [colorId]: value
    });
};

export const ColorPickerList = (props: Props) => (
    <ul>
        <ColorPicker colorName='red' value={props.color.red} onColorUpdated={updateColor(props, 'red')} />
        <ColorPicker colorName='green' value={props.color.green} onColorUpdated={updateColor(props, 'green')} />
        <ColorPicker colorName='blue' value={props.color.blue} onColorUpdated={updateColor(props, 'blue')} />
    </ul>
);
