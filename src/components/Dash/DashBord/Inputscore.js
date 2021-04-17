import React, { useState } from 'react'
import { app } from "../../Peter/firebase";
import { Button, Input } from "antd";

const regCourse = app.firestore().collection("user");

function Inputscore() {
  const [attention4, setAttention4] = useState("");
  const [wellUnderstood4, setWellUnderstood4] = useState("");
  const [interesting4, setInteresting4] = useState("");

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(true);
  };

  const postRating4 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating4")
        .doc()
        .set({
          attention: parseInt(attention4),
          wellUnderstood: parseInt(wellUnderstood4),
          interesting: parseInt(interesting4),
        });
    }
  };

  return (
    <div >
      <div style={{ display: "flex", marginLeft: "10px", width: "180px", justifyContent: "space-between", }}>

        <div style={{ fontSize: "12px" }}><p>Attention</p></div>
        <div style={{ fontSize: "12px" }}><p>Understood</p></div>
        <div style={{ fontSize: "12px" }}><p>Intresting</p></div>



      </div>
      <div
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          margin: "40px, 0",
          width: "300px",

          marginBottom: "40px",
          marginRight: "40px",
        }}
      >

        <Input
          disabled={toggle}
          style={{ margin: "0 5px", width: "100px" }}
          type="number"
          placeholder="0"
          value={attention4}
          onChange={(e) => {
            setAttention4(e.target.value);
          }}
        />
        <Input
          disabled={toggle}
          style={{ margin: "0 5px", width: "100px" }}
          type="number"
          placeholder="0"
          value={wellUnderstood4}
          onChange={(e) => {
            setWellUnderstood4(e.target.value);
          }}
        />
        <Input
          disabled={toggle}
          style={{ margin: "0 5px", width: "100px" }}
          type="number"
          placeholder="0"
          value={interesting4}
          onChange={(e) => {
            setInteresting4(e.target.value);
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            postRating4();
            onToggle();
            console.log("this is one");
          }}
        >
          Submit
</Button>
      </div>
    </div>
  )
}

export default Inputscore
