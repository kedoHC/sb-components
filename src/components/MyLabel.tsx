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
}

const MyLabel = ({ label = "My label", size = "normal" }: MyLabelProps) => {
  return <span className={`label ${size}`}>{label}</span>;
};

export default MyLabel;
