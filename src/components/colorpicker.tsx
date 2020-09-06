import React from "react";
import { Color } from "../model/color";

type Rgb =
    | "red"
    | "green"
    | "blue";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
  targetColor: Rgb;
}

const colorUpdate = (prevColor: Color, targetColor: Rgb, value: string): Color => {
  prevColor[targetColor] = +value;
  return {
    red: prevColor.red,
    green: prevColor.green,
    blue: prevColor.blue,
  }
}

export const ColorPicker = (props: Props) => (
  <li>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color[props.targetColor]}
      onChange={event =>
        props.onColorUpdated(colorUpdate(props.color, props.targetColor, event.target.value))
      }
    />
    {props.targetColor} : {props.color[props.targetColor]}
  </li>
);