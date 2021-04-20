import React, { useState } from 'react'
import { app } from "../../Peter/firebase";
import { Button, Input } from "antd";

const regCourse = app.firestore().collection("studentreg");

function Inputscore() {
  const [attention4, setAttention4] = useState("");
  const [wellUnderstood4, setWellUnderstood4] = useState("");
  const [interesting4, setInteresting4] = useState("");
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(false);
  const [rating, setRating] = useState()

  const onToggle = () => {
    setToggle(true);
  };
  const postRating4 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("pythonwk1rating")
        .doc()
        .set({
          attention: parseInt(attention4),
          wellUnderstood: parseInt(wellUnderstood4),
          interesting: parseInt(interesting4),
          show
        });
    }
  };


  const readTask = async () => {
    const getTask = await app.auth().currentUser

    if (getTask) {
      await
        regCourse.doc(getTask.uid)
          .collection("pythonwk1rating")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setRating(item)
          })
      console.log(setRating)
    }

  }
  const faseButton = async () => {
    const userPresent = await app.auth().currentUser;
    if (userPresent) {
      regCourse.doc(userPresent.uid).collection("pythonwk1rating")
        .doc().update({
          show: toggle
        })
    }
  }

  React.useEffect(() => {
    readTask()
  }, [])

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
          disabled={show}
          onClick={() => {
            postRating4()
            faseButton()
            setToggle(true);
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
