import * as React from "react";
import { TreeOptions } from "types";
import { cx } from "@emotion/css";
import { PanelProps } from "@grafana/data";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";
import "./style.css";

interface Props extends PanelProps<TreeOptions> {}

export const GrafanaTable = ({ options, data, width, height, replaceVariables, timeRange }: Props) => {
  /** Renderer */
  return (
    <ReduxProvider store={store}>
      <div className={cx("grafanaTable")}>Grafana Table Component</div>
    </ReduxProvider>
  );
};
