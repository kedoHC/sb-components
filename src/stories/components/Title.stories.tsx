import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "../../components/Title";

export default {
  title: "Templates/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Basic = Template.bind({});

Basic.args = {};

export const CustomColor = Template.bind({});

CustomColor.args = {
  color: "red",
};
