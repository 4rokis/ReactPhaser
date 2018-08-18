# Phaser with React and React-Router
React-Router simplifies application updating after URL changes.    
But to use it with Phaser some precautions need to be made, they are explained further in the readme.  
Below is an example of how React-Router configuration looks like.  

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
Combined with Phaser this allows us to update Phaser states/scenes  
according to URL or route to scenes that don't use Phaser at all.  
LogIn page would be a great example, two input fields with submit button is a piece of cake in React.  
When it comes to Phaser/React scenes shouldComponentUpdate() should always return false.  

```
public shouldComponentUpdate(): boolean {
  return false;
}
```

Otherwise React might restart Phaser occasionaly.  
  
The only thing missing is a place to hook up phaser canvas.  

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
Just set it to Phaser parent property.
```
new Phaser.Game({
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  parent: this.gameRoot,
});
```
  
Now you have a fully working Phaser with React and React-Router! Congratulations!  
  
Phaser game can sync with your URL, too!  
```
www.something.com/game#scene1
```
```#scene1``` does the magic here!
It does not trigger rewrite. However, component lifecycle  
method ```componentWillReceiveProps``` will get triggered.  
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
  

