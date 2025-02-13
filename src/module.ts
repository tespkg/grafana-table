import { PanelPlugin } from "@grafana/data";
import { GrafanaTable } from "components/GrafanaTable";
import { TreeOptions } from "types";

export const plugin = new PanelPlugin<TreeOptions>(GrafanaTable).setPanelOptions((builder) => {
  return builder
    .addSelect({
      path: "field",
      name: "Field",
      description: "Choose field for display tree",
      settings: {
        options: [],
        getOptions: async (ctx) => {
          const fields = ctx.data[0]?.fields || [];
          return fields.map((field) => ({ label: field.name, value: field.name }));
        },
      },
    })
    .addTextInput({
      path: "variableName",
      name: "Variable name",
      description: "Name of the variable to set the tree query",
      defaultValue: "treequery",
    })
    .addTextInput({
      path: "defaultValue",
      name: "Default value for variable",
      description: "The default value to set the tree query",
      defaultValue: "True",
    })
    .addBooleanSwitch({
      path: "debug",
      name: "Debug",
      description: "Enable debug mode",
      defaultValue: false,
    });
});
