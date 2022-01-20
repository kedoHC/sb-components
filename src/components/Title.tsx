import "./mylabel.css";

export interface TitleProps {
  /**
   * Este es el mensaje a mostrar de la etiqueta
   */
  label: string;
  /**
   * Este es el color del titulo
   */
  color?: string;
}

export const Title = ({
  label = "My title component",
  color = "black",
}: TitleProps) => {
  return <h1 style={{ color }}>{label}</h1>;
};

export default Title;
