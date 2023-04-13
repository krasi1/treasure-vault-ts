import Scene from "../core/Scene";
import config from "../config";
import ParallaxBackground from "../prefabs/ParallaxBackground";

export default class Gamig extends Scene {
  name = "Gamig";
  private background: ParallaxBackground | undefined;
  load() {
    this.background = new ParallaxBackground(config.backgrounds.forest);

    this.addChild(this.background);
  }
}
