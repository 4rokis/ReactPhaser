export class SceneB extends Phaser.Scene {
  public preload(): void {
    this.load.image('SceneB', 'SceneB.jpg');
  }

  public create(): void {
    this.add.image(0, 0, 'SceneB').setOrigin(0, 0);
  }
}
