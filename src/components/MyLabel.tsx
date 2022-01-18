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

export const MyLabel = ({
  label = "My label",
  size = "normal",
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span style={{ backgroundColor }} className={`label ${size}`}>
      {label}
    </span>
  );
};

export default MyLabel;
