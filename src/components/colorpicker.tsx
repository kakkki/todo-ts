import React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
  colorId: keyof Color;
}

const colorUpdate = (props: Props) => (value: number) => {
  props.onColorUpdated({
    ...props.color,
    [props.colorId]: value
  });
};

export const ColorPicker = (props: Props) => (
  <li>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color[props.colorId]}
      onChange={event => colorUpdate(props)(+event.target.value) }
    />
    {props.colorId} : {props.color[props.colorId]}
  </li>
);