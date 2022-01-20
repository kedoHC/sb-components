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
  /**
   * Caption
   */
  caption?: string;
}

export const Title = ({
  label = "My title component",
  color = "black",
  caption = "Título caption",
}: TitleProps) => {
  return (
    <h1 style={{ color }}>
      {label}--
      <span style={{ fontSize: 12 }}>{caption}</span>
    </h1>
  );
};

export default Title;
