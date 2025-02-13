import Gio from "gi://Gio";
import GObject from "gi://GObject";

import { settings } from "./util.js";

export default function PanelStyle({ builder }) {
  const button_style = builder.get_object("button_style");
  const panel_style = builder.get_object("panel_style");
  settings.bind(
    "show-style",
    button_style,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  button_style.bind_property(
    "active",
    panel_style,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );
}
