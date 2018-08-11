# Phaser with React and React-Router
Router gives us posibillity to specify routes that are trigerred, based on URL.

```
<Router history={this.history} >
  <Switch>
    <Route exact path='/' component={Root} />
    <Route path='/Login' component={LogIn} />
    <Route path='/GameList' component={GameList} />
    <Route path='/Game' component={Game} />
    <Route path='/Achievements' component={Achievements} />
    <Route path='/Credits' component={Credits} />
  </Switch>
</Router>
```
You are then able to specify scenes that do not explicitly need Phaser.
LogIn page is a great example.
Two input fields with submit button is a piece of cake in React.

As for the scenes that use Phaser.
```
public shouldComponentUpdate(): boolean {
  return false;
}
```
Is a need.

Only thing missing is a place to hook up phaser canvas.

```
public render(): JSX.Element {
  return (
    <div>
      <div ref={this.gameRoot} />
    </div>
  );
}
```
This simple div with reference does the trick!
  
Now you have a fully working Phaser with React and React-Router! Congratulations!

Want something more?!
Phaser game can sync with your URL, too!!!
```
www.something.com/game#scene1
```
```#scene1``` do the magic here!
It does not trigger rewrite. However, components ```componentWillReceiveProps``` will be triggered.
You can the use it to change state of your game!
```
public componentWillReceiveProps(nextProps: Props): void {
  const { path } = nextProps;
  this.gameManager.startScene(path as Scene);
}
```

If you have any questions, ask via twitter or here on github.

Check us on social pages!
https://www.instagram.com/aegerinteractive/
https://www.facebook.com/AegerInteractive/
https://twitter.com/AegerInteracti1
https://twitter.com/54n60w3n


