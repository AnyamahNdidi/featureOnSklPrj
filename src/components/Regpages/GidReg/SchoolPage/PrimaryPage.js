import React from "react";
import "./pry.css";
import { motion } from "framer-motion";
import { Button } from "antd";
import pics from "../img/mob.png";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../../GlobalAuth/GlobalAuth"
import { app } from "../../../Peter/firebase"

const courseSelection = app.firestore().collection("studentreg");

function PrimaryPage() {
  const hist = useHistory();
  // const { current } = React.useContext()

  const pr4 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr1").doc().set({
        sub1: "Scratch",
        sub2: "app inventor",
        sub3: "introduction to python"
      })

    }
    hist.push("/")
  }

  const pr5 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr2").doc().set({
        sub1: "python",
        sub2: "build box",
        sub3: "Kodu"
      })

    }
    hist.push("/")
  }

  const pr6 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr3").doc().set({
        sub1: "python",
        sub2: "buildbox",
        sub3: "javascript"
      })

    }
    hist.push("/")
  }







  return (
    <>
      <motion.div
        className="backdrop2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
      // className="thin1"
      >
        <div className="backdrop_content2">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "20px",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <h4>Final Step</h4>
            <div style={{ width: "90%" }} className="pre1">
              Please choose your preffered class
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}

                onClick={pr4}
              >
                PRIMARY 4
              </Button>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}
                onClick={pr5}
              >
                PRIMARY 5
              </Button>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}
                onClick={pr6}
              >
                PRIMARY 6
              </Button>
            </div>

            <div className="my_button3">
              <LeftOutlined
                onClick={() => {
                  hist.push("/course");
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default PrimaryPage;
