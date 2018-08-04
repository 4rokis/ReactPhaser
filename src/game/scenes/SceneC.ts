export class SceneC extends Phaser.Scene {
  public preload(): void {
    this.load.image('SceneC', 'SceneC.jpg');
  }

  public create(): void {
    this.add.image(0, 0, 'SceneC').setOrigin(0, 0);
  }
}
