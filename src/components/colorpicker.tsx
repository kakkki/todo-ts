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

export const ColorPicker = (props: Props) => (
  <li>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.red}
      onChange={event =>
        props.onColorUpdated({
          red: +event.target.value,
          green: props.color.green,
          blue: props.color.blue
        })
      }
    />
    {props.targetColor} : {props.color[props.targetColor]}
  </li>
);