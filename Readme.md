# Phaser with React and React-Router

## Overview  
### Phaser  
A beautifull game engine that uses power on web Canvas/WebGl.  

### React
Library dedicated to SPA applications.
Specializing in maintanable UI with little effort.  

### React-Router
Library harvesting the power on URL to sync UI/Components with current state.

## Intro
I assume you have basic knowledge React, Phaser and React-Router. Links to this libraries are
provided in the Overview section. Unfortunatelly, without the basic knowledge you wont be able to fully understand this article.

## Phaser
Phaser is a powerfull tool. However, as I got further into developement i have started to miss few things.
As the game, I am currectly working on, is greatly dependent on UI. I have started to hit the wall with Phaser.
Don't get me wrong, Phaser can be used to create UI, but the code is quickly getting out of hand. And even
if you are able toget past it. There is a huge drawback, that there is no input field in Canvas. Yes! You can
write your own, or import some of the canvas implementation. However, in the lights of your needs and fear that the library 
will get out dated, you have to decide.... What to do...

## HTML
HTML is basically a tool for creating UI elements. Input fields and more are there! Time tested!
With React and its component lifecycle. One can create fast and highly maintanable code!

## React-Router
We are used to browser URL cababilities. If you click back, you are expecting to get
where you have been lastly. Bookmark of the page is expected to get you to same or simmilar
state of the page as when you bookmarked it. Phaser has no such capabilities built in. So one must
help himself.
  
Router give us posibillity to specify routes that are trigerred as soon as URL is in expected state.

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
You are then able to easily specify the pages that do not explicitly needs Phaser.
LogIn page is great example. Two input fields with submit button is piece of a cake in React.

As for the routes that use Phaser.
```
public shouldComponentUpdate(): boolean {
  return false;
}
```
Is a need.

Only thing next, is the place where to put phaser canvas.

```
public render(): JSX.Element {
  return (
    <div>
      <div ref={this.gameRoot} />
    </div>
  );
}
```
Simple div with reference does the trick!
  
And now you have fully working Phaser with React and React-Router! Congratulations!

Want something more?!
What if I tell you that you can sync you game state with URL as well!
```
www.something.com/game#scene1
```
```#scene1``` is the magic here!
It do not trigger rewrite. However, components componentWillReceiveProps will be triggered.
You can the use it to change state of your game!
```
public componentWillReceiveProps(nextProps: Props): void {
  const { path } = nextProps;
  this.gameManager.startScene(path as Scene);
}
```

Now we are done! Thanks for your attection!

Example can be found on Github
https://github.com/S4n60w3n/ReactPhaser

Check us on social pages!
https://www.instagram.com/aegerinteractive/
https://www.facebook.com/AegerInteractive/
https://twitter.com/AegerInteracti1
https://twitter.com/54n60w3n


