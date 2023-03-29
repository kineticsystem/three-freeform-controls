import { DEFAULT_CONTROLS_OPACITY } from "../utils/constants";
import { BufferGeometry, ColorModelString, LineLoop, MeshBasicMaterial } from "three";

export default class Line extends LineLoop {
  constructor(color: string, geometry: BufferGeometry) {
    super();
    this.geometry = geometry;
    this.material = new MeshBasicMaterial({ color: color as ColorModelString, depthTest: true });
    this.material.transparent = true;
    this.material.opacity = DEFAULT_CONTROLS_OPACITY;
  }
}
