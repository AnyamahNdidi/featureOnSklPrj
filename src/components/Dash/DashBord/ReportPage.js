import { Button, Input } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { app } from "../../Peter/firebase";
import { AppContext } from "../../GlobalAuth/GlobalAuth";
import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import MUModal from "../../Dash/components/Peter/ModalNav/MUmodal";
import {
  HeaderFile,
  FolderOpenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BulbOutlined,
  BarChartOutlined,
  SolutionOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router-dom"
import Inputscore from "./Inputscore";
const { Header, Footer, Sider, Content, manu } = Layout;

const regCourse = app.firestore().collection("studentreg");
const courseSelection = app.firestore().collection("studentreg");

const ReportPage = () => {

  const hist = useHistory()
  const { datause } = React.useContext(AppContext);
  const { current } = React.useContext(AppContext)

  const [courses, setCourses] = useState(true);
  const [report, setReport] = useState(false);
  const [perform, setPerform] = useState(false);
  const [show, setShow] = useState(false);
  const [alltoggle, allsetToggle] = useState(true);


  /////this is it

  const [visible, setVisible] = useState(true);
  const [beginer, setBeginer] = useState(false);
  const [intermediate, setIntermediate] = useState(false);
  const [advance, setAdvance] = useState(false);

  const [advanceData, setAdvanceData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [beginersData, setBeginersData] = useState([]);

  const [readUserData, setReadUserData] = React.useState([])
  const [readUserData5, setReadUserData5] = React.useState([])
  const [readUserData6, setReadUserData6] = React.useState([])

  const [readUserDatajs1, setReadUserDatajs1] = React.useState([])
  const [readUserDatajs2, setReadUserDatajs2] = React.useState([])
  const [readUserDatajs3, setReadUserDatajs3] = React.useState([])

  const [readUserDatass1, setReadUserDatass1] = React.useState([])
  const [readUserDatass2, setReadUserDatass2] = React.useState([])
  const [readUserDatass3, setReadUserDatass3] = React.useState([])

  const [data, setData] = useState([]);


  const { newCurrent } = useContext(AppContext);



  const [toggle, setToggle] = useState(false);
  const Toggled = () => {
    allsetToggle(!alltoggle);
  };
  const onToggle = () => {
    setToggle(true);
  };


  /// this is dthe function


  const readTask = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr4")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData(item)
          })
      console.log(readUserData)
    }

  }

  const readTask5 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr5")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData5(item)
          })
      console.log(readUserData5)
    }

  }

  const readTask6 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr6")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData6(item)
          })
      console.log(readUserData5)
    }

  }

  /// this is for jss class

  const readTaskjs1 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js1")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs1(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskjs2 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js2")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs2(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskjs3 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js3")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs3(item)
          })
      console.log(readUserData5)
    }

  }


  // this is for the ss class

  const readTaskss1 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss1")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass1(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskss2 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss2")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass2(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskss3 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss3")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass3(item)
          })
      console.log(readUserData5)
    }

  }



  React.useEffect(() => {
    readTask()
    readTask5()
    readTask6()
    readTaskjs1()
    readTaskjs2()
    readTaskjs3()
    readTaskss1()
    readTaskss2()
    readTaskss3()

  }, []);

  return (
    <div>

      <div className="onlyMobile">
        {alltoggle ? (
          <MenuUnfoldOutlined
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px 25px",
              cursor: "pointer",

            }}
            onClick={Toggled}
          />
        ) : (

          <div>


            <Sider
              style={{
                height: "100vh",
                color: "white",
                zIndex: "1",
                background: "#2E3347",
                position: "absolute",
                top: "80px"


              }}

              collapsed={toggle}
            >

              <Menu style={{
                background: '#2E3347'
              }} mode="inline" defaultSelectedKeys={["1"]}>

                <Menu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "30px",
                    color: "white",
                    background: "#2E3347"
                  }}
                  onClick={() => {
                    Toggled()
                  }}
                  key="0"
                  icon={
                    <CloseOutlined
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",

                        cursor: "pointer",

                      }}
                    />
                  }
                >

                </Menu.Item>
                <Menu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "30px 0",
                    height: "60px",
                    color: "white",
                    background: "red"
                  }}
                  onClick={() => {
                    hist.push("/coursepages")
                    Toggled()
                  }}
                  key="1"
                  icon={
                    <UserOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        margin: "10px 0px",
                        cursor: "pointer",

                      }}
                    />
                  }
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginLeft: "10px",
                      textTransform: "uppercase",

                    }}
                  >
                    Course
              </div>
                </Menu.Item>

                <Menu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "30px 0",
                    height: "60px",
                    color: "white"
                  }}
                  onClick={() => {
                    Toggled()

                  }}
                  key="2"
                  icon={
                    <VideoCameraOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        margin: "10px 0px",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginLeft: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Report
              </div>
                </Menu.Item>

                <Menu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "30px 0",
                    height: "60px",
                    color: "white"
                  }}
                  onClick={() => {
                    hist.push("/select")
                    Toggled()
                    console.log(perform);
                  }}
                  key="3"
                  icon={
                    <UploadOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        margin: "10px 0px",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginLeft: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Performance
              </div>
                </Menu.Item>

                <Menu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "30px 0",
                    height: "60px",
                    color: "white"
                  }}
                  onClick={() => {
                    hist.push("/show")
                    Toggled()
                    console.log(perform);
                  }}
                  key="4"
                  icon={
                    <FolderOpenOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        margin: "10px 0px",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginLeft: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Show
              </div>
                </Menu.Item>
              </Menu>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {current ? (
                  <img
                    src={datause && datause.avatar}
                    alt="Avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid white",
                      objectFit: "cover",
                    }}
                  />
                ) : null}
              </div>
              <div>
                {current ? (
                  <h3
                    style={{
                      color: "white",
                      lineHeight: "1",
                      fontSize: "12px",
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    {datause && datause.name}{" "}
                  </h3>
                ) : null}
              </div>
            </Sider>
          </div>

        )}
      </div>
      <center>The Report Page</center>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          textWeight: "bold",
          marginBottom: "30px",
          marginLeft: "10px",
          
        }}
      >
        <div
          style={{
            width: "20%",
          }}
        >
          week
        </div>
        <div
          style={{
            width: "20%",
          }}
        >
          Topic
        </div>
        <div
          style={{
            width: "60%",
          }}
        >
          Cast a rating
        </div>
      </div> */}

      <div className="allcoursecon">


        <div className="courseDataall">





          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserData.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>




                  </div>
                </div>

              </div>
            ))}

            {readUserData.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserData.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div

            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserData5.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserData5.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserData5.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserData6.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserData6.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserData6.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>




          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatajs1.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserDatajs1.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatajs1.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatajs2.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserDatajs2.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatajs2.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatajs3.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserDatajs3.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatajs3.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>




          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatass1.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>

                  </div>
                </div>

              </div>
            ))}

            {readUserDatass1.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatass1.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatass2.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserDatass2.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatass2.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readUserDatass3.map(({ id, sub1, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub1.Image} alt="pix1" className="image" />
                    <h3>{sub1.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}

            {readUserDatass3.map(({ id, sub2, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub2.Image} alt="pix1" className="image" />
                    <h3>{sub2.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}
            {readUserDatass3.map(({ id, sub3, }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={sub3.Image} alt="pix1" className="image" />
                    <h3>{sub3.title} </h3>
                    <div className="course__side">
                      {/* <p> {level}</p> */}
                      <div className="course__sideInner">
                        <LaptopOutlined />

                      </div>
                    </div>
                    <div style={{

                      width: "100%"

                    }}>
                      <Inputscore />

                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
        </div>
      </div>


    </div>
  );
};

export default ReportPage;

// {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div
// ))}

// {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       >
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Attention: 0 - 5"
//           value={attention}
//           onChange={(e) => {
//             setAttention(e.target.value);
//           }}
//         />
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Well Understood: 0 - 5"
//           value={wellUnderstood}
//           onChange={(e) => {
//             setWellUnderstood(e.target.value);
//           }}
//         />
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Interesting: 0 - 5"
//           value={interesting}
//           onChange={(e) => {
//             setInteresting(e.target.value);
//           }}
//         />
//         <Button
//           type="primary"
//           onClick={(id) => {
//             console.log(id);
//             console.log("I am pressed");
//           }}
//         >
//           Submit
//         </Button>
//       </div>
//     </h3>
//   </div>
// ))}

// {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// <center>
// {myCourse1.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse9.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}
// </center>

// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Attention: 0 - 5"
// value={attention}
// onChange={(e) => {
//   setAttention(e.target.value);
// }}
// />
// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Well Understood: 0 - 5"
// value={wellUnderstood}
// onChange={(e) => {
//   setWellUnderstood(e.target.value);
// }}
// />
// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Interesting: 0 - 5"
// value={interesting}
// onChange={(e) => {
//   setInteresting(e.target.value);
// }}
// />
// <Button type="primary">Submit</Button>


{/* <div
style={{
  height: "40px",
  display: "flex",
  alignItems: "center",
  margin: "40px, 0",
  marginTop: "40px",
  marginBottom: "40px",
  marginRight: "40px",
}}
>
<Input
  disabled={toggle}
  style={{ margin: "0 5px", width: "80px" }}
  type="number"
  placeholder="Attention: 0 - 5"
  value={attention4}
  onChange={(e) => {
    setAttention4(e.target.value);
  }}
/>
<Input
  disabled={toggle}
  style={{ margin: "0 5px", width: "80px" }}
  type="number"
  placeholder="Well Understood: 0 - 5"
  value={wellUnderstood4}
  onChange={(e) => {
    setWellUnderstood4(e.target.value);
  }}
/>
<Input
  disabled={toggle}
  style={{ margin: "0 5px", width: "80px" }}
  type="number"
  placeholder="Interesting: 0 - 5"
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
</div> */}