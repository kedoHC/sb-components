/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar de la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Este es el tamaño de la etiqueta
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, backgroundColor, }: MyLabelProps) => JSX.Element;
