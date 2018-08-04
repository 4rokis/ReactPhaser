import { Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { History } from 'history';
import createBrowserHistory from 'history/createBrowserHistory';
import { Game } from 'scenes/Game';

export class App extends React.Component {
  private history: History;

  constructor(props: any) {// tslint:disable-line:no-any
    super(props);
    this.history = createBrowserHistory();

    this.getGame = this.getGame.bind(this);
    this.hashRouteTo = this.hashRouteTo.bind(this);
  }

  public render(): JSX.Element {
    return (
      <Router history={this.history} >
        <Switch>
          <Route path='/' component={this.getGame} />
        </Switch>
      </Router>
    );
  }

  private getGame(): JSX.Element {
    return (
      <Game
        hashRouteTo={this.hashRouteTo}
        path={this.history.location.hash.slice(1)}
      />
    );
  }

  private hashRouteTo(route: string): void {
    this.history.push(`${this.history.location.pathname}#${route}`);
  }
}
