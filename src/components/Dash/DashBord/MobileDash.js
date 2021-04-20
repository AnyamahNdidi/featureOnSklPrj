import React, { useState } from "react";
import Curriculum from "../components/Peter/Curriculum/Curriculum";
import CurriculumFiles from "../components/Peter/Curriculum/CurriculumFiles";
import SampleHoder from "../components/Peter/Curriculum/SampleHoder";
// import HeaderViewer from "../HeaderViewer";
import { Layout, Menu } from "antd";
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
import { AppContext } from "../../GlobalAuth/GlobalAuth";
import ReportPage from "./ReportPage";
import SelectACourse from "./SelectYourCourse";
import ShowTheCourse from "./ShowTheCourse";
import CoursesPaage from "./CoursesPaage";
const { Header, Footer, Sider, Content, manu } = Layout;

const MobileDash = () => {
  const { datause } = React.useContext(AppContext);
  const { current } = React.useContext(AppContext)
  const [toggle, setToggle] = useState(true);
  const [courses, setCourses] = useState(true);
  const [report, setReport] = useState(false);
  const [perform, setPerform] = useState(false);
  const [show, setShow] = useState(false);

  const Toggled = () => {
    setToggle(!toggle);
  };
  return (
    <div
      style={{
        backgroundColor: "#EDF8FF",



      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        {toggle ? (
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
          <div style={{
            position: " absolute",
            top: "80px",

          }}>
            <div style={{

            }} >


              <Sider
                style={{
                  height: "100vh",
                  color: "white",
                  zIndex: "1",
                  background: "#2E3347",
                  position: "relative"



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
                      height: "30px",
                      color: "white",
                      background: "#2E3347",
                      justifyContent: "center"

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
                          margin: "10px 0px",
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
                      setCourses(true);
                      setReport(false);
                      setPerform(false);
                      setShow(false);

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
                      setCourses(false);
                      setReport(true);
                      setPerform(false);
                      setShow(false);
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
                      setCourses(false);
                      setReport(false);
                      setPerform(true);
                      setShow(false);
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
                      setCourses(false);
                      setReport(false);
                      setPerform(false);
                      setShow(true);
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
              {" "}
              <div style={{
                position: "absolute",
                top: "-400",
                zIndex: "-1"
              }}>
                {courses ? (
                  <Content style={{ backgroundColor: "#EDF8FF" }}>
                    <CoursesPaage />
                  </Content>
                ) : report ? (
                  <Content>
                    {" "}
                    <ReportPage />{" "}
                  </Content>
                ) : perform ? (
                  <Content>
                    {" "}
                    <SelectACourse />
                  </Content>
                ) : show ? (
                  <Content>
                    {" "}
                    <ShowTheCourse />
                  </Content>
                ) : null}
              </div>
            </div>
          </div>

        )}
      </div>

      <br />
      <br />
    </div >
  );
};

export default MobileDash;
