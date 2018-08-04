import * as React from 'react';
import { GameManager, Scene } from 'game/GameManager';

export type Props = {
  path: string;
  hashRouteTo(route: string): void;
};

const INIT: Scene = 'SceneA';

export class Game extends React.Component<Props> {
  private gameRoot: React.RefObject<HTMLDivElement>;
  private gameManager: GameManager;

  constructor(props: Props) {
    super(props);
    const { hashRouteTo } = this.props;
    this.gameManager = new GameManager(hashRouteTo);
  }

  public componentWillMount(): void {
    this.gameRoot = React.createRef();
  }

  public shouldComponentUpdate(): boolean {
    return false;
  }

  public componentWillReceiveProps(nextProps: Props): void {
    const { path, hashRouteTo } = nextProps;
    this.gameManager.startScene(path as Scene);
    if (path.length === 0) {
      hashRouteTo(INIT);
    }
  }

  public componentDidMount(): void {
    const { path, hashRouteTo } = this.props;
    this.gameManager.createGame(this.gameRoot.current as HTMLDivElement);
    if (path.length === 0) {
      hashRouteTo(INIT);
    } else {
      this.gameManager.startScene(path as Scene);
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <div ref={this.gameRoot} />
        <div role='button' className='button' onClick={this.gameManager.onClick}>Switch</div>
      </div>
    );
  }
}
