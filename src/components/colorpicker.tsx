import React from "react";
import { Color } from "../model/color";

interface Props {
  colorName: keyof Color;
  value: number;
  onColorUpdated: (value: number) => void;
}

export const ColorPicker = (props: Props) => (
  <li>
    <input
      type="range"
      min="0"
      max="255"
      value={props.value}
      onChange={event => props.onColorUpdated(+event.target.value) }
    />
    {props.colorName} : {props.value}
  </li>
);
