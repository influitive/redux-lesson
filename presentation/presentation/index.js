// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  tree: require("../assets/tree.jpg"),
  action: require("../assets/action.jpg"),
  pure: require("../assets/pure.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  egghead: require("../assets/egghead.jpg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Redux
            </Heading>
            <Heading size={1} fit caps>
              A Predictable State Container
            </Heading>
            <br/>
            <Link href="https://github.com/reactjs/redux">
              <Text bold caps textColor="secondary">View on Github</Text>
            </Link>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.tree.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Single Object Tree
            </Heading>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.action.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              All changes are actions!
            </Heading>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.pure.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              All mutations are described by pure functions!
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>simple counter example</li><li>without react bindings</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/counter.example")}
              margin="-100px 0 0"
            />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="black" notes="<ul><li>simple counter example</li><li>without react bindings</li></ul>">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              The Reducer
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/counter-reducer.example")}
              margin="20px 0"
            />
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.egghead.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Link href="https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree">
              <Heading size={1} caps textColor="primary" textFont="primary">
                Videos
              </Heading>
            </Link>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="use thunk to fire actions when your request promises finish">
            <Heading size={4} caps textColor="black" textFont="primary">
              Redux-Thunk
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/thunk-async.example")}
              margin="20px 0 0"
            />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="use think to check some state before firing actions">
            <Heading size={4} caps textColor="black" textFont="primary">
              Conditional Actions
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/thunk-cond.example")}
              margin="20px 0 0"
            />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="this is how you enable middleware in redux">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/thunk-middleware.example")}
              margin="-100px 0 0"
            />
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
