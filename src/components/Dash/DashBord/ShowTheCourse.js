import React, { useContext, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AppContext } from "../../GlobalAuth/GlobalAuth";
import { app } from "../../Peter/firebase";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
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
const { Header, Footer, Sider, Content, manu } = Layout;

const regCourse = app.firestore().collection("studentreg");
const ShowTheCourse = () => {
  const { current } = useContext(AppContext);
  const { datause } = React.useContext(AppContext);


  const [courses, setCourses] = useState(true);
  const [report, setReport] = useState(false);
  const [perform, setPerform] = useState(false);
  const [show, setShow] = useState(false);
  const [alltoggle, allsetToggle] = useState(true);

  const [myCourse1, setMyCourse1] = React.useState([]);
  const [myCourse2, setMyCourse2] = React.useState([]);
  const [myCourse3, setMyCourse3] = React.useState([]);
  const [myCourse4, setMyCourse4] = React.useState([]);
  const [myCourse5, setMyCourse5] = React.useState([]);
  const [myCourse6, setMyCourse6] = React.useState([]);
  const [myCourse7, setMyCourse7] = React.useState([]);
  const [myCourse8, setMyCourse8] = React.useState([]);
  const [myCourse9, setMyCourse9] = React.useState([]);
  const hist = useHistory();

  const Toggled = () => {
    allsetToggle(!alltoggle);
  };

  const myRegCourse1 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry4")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse1(i);
        });
    }
  };

  const myRegCourse2 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry5")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse2(i);
        });
    }
  };

  const myRegCourse3 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry6")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse3(i);
        });
    }
  };

  const myRegCourse4 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js1")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse4(i);
        });
    }
  };

  const myRegCourse5 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js2")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse5(i);
        });
    }
  };

  const myRegCourse6 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js3")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse6(i);
        });
    }
  };

  const myRegCourse7 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss1")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse7(i);
        });
    }
  };

  const myRegCourse8 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss2")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse8(i);
        });
    }
  };

  const myRegCourse9 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss3")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse9(i);
        });
    }
  };

  React.useEffect(() => {
    myRegCourse1();
    myRegCourse2();
    myRegCourse3();
    myRegCourse4();
    myRegCourse5();
    myRegCourse6();
    myRegCourse7();
    myRegCourse8();
    myRegCourse9();
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

              collapsed={alltoggle}
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
                    hist.push("/report")

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
      <br />
      <center>Here is our Study Screen Courses page</center>
      <br />
      <center>
        <Button>
          <Link to="report">View Report</Link>
        </Button>
      </center>
      <br />
      <br />
      <center>
        <h1 style={{ textTransform: "uppercase" }}>
          {current && current.name}
        </h1>
      </center>

      <center>
        {myCourse1.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse9.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}
      </center>
    </div>
  );
};

export default ShowTheCourse;
