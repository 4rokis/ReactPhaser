export class SceneA extends Phaser.Scene {
  public preload(): void {
    this.load.image('SceneA', 'SceneA.jpg');
  }

  public create(): void {
    this.add.image(0, 0, 'SceneA').setOrigin(0, 0);
  }
}
