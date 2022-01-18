import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title: "Templates/MyLabel",
  component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  size: "normal",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: "normal",
  backgroundColor: "red",
};
export const CustomBackgroundColorBlue = Template.bind({});
CustomBackgroundColorBlue.args = {
  size: "normal",
  backgroundColor: "blue",
};
export const CustomBackgroundColorGreen = Template.bind({});
CustomBackgroundColorGreen.args = {
  size: "normal",
  backgroundColor: "green",
};
