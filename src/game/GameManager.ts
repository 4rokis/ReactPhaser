import 'phaser';
import { SceneA, SceneB, SceneC } from 'game/scenes';

export type Scene = 'SceneA' | 'SceneB' | 'SceneC';

const WIDTH = 1280;
const HEIGHT = 720;

export class GameManager {
  private game: Phaser.Game;
  private current: Scene;
  hashRouteTo: (scene: Scene) => void

  constructor(hashRouteTo: (scene: Scene) => void) {
    this.hashRouteTo = hashRouteTo;

    this.onClick = this.onClick.bind(this);
  }

  public createGame(root: HTMLDivElement): void {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: WIDTH,
      height: HEIGHT,
      parent: root,
    });
    this.game.scene.add('SceneA', SceneA);
    this.game.scene.add('SceneB', SceneB);
    this.game.scene.add('SceneC', SceneC);

    this.game.events.on('pointerup', this.onClick)
  }

  public onClick() {
    const scenes = ['SceneA', 'SceneB',  'SceneC'].filter(item => item !== this.current);
    const route = scenes[Math.floor(Math.random() * scenes.length)];
    return this.hashRouteTo(route as Scene);
  }

  public startScene(scene: Scene): void {
    if (this.current) {
      this.game.scene.stop(this.current);
    }
    this.game.scene.start(scene);
    this.current = scene;
  }
}
