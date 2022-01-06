import React, { createContext } from "react";
import { ActionType } from "../types";

export const FontContext = createContext({font :{font : 'patrick'}, setFont: (font : ActionType) => {}});