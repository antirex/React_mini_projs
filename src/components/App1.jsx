import React, {useState} from "react";
import emojipedia from "../emojipedia";
import Heading from "./Heading";
import Emoji from "./Emoji";



function createEmoji(emojipedia) {
  return (
    <Emoji
      key={emojipedia.id}
      emoji_img={emojipedia.emoji}
      name={emojipedia.name}
      desc={emojipedia.meaning}
    />
  );
}

function App1() {
  return (
    <div>
      <Heading />
      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App1;
