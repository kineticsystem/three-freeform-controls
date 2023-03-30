import { DEFAULT_OCTAHEDRON_RADIUS } from "../utils/constants";
import { ColorModelString, DoubleSide, Mesh, MeshBasicMaterial, OctahedronGeometry } from "three";

export default class Octahedron extends Mesh {
  constructor(color: string) {
    super();
    this.geometry = new OctahedronGeometry(DEFAULT_OCTAHEDRON_RADIUS, 0);
    this.material = new MeshBasicMaterial({
      color: color as ColorModelString,
      depthTest: false,
      transparent: true,
      side: DoubleSide,
    });
  }
}
