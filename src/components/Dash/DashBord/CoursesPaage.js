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
import { useHistory } from "react-router-dom"
import { TrainRounded } from "@material-ui/icons";
const { Header, Footer, Sider, Content, manu } = Layout;


const CoursesPaage = () => {
  const hist = useHistory()
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
        position: "relative"

      }}
    >
      <div className="onlyMobile">
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

          <div>


            <Sider
              style={{
                height: "100vh",
                color: "white",
                zIndex: "1",
                background: "#2E3347",
                position: "absolute",
                top: "0px"


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
                    setCourses(true);
                    setReport(false);
                    setPerform(false);
                    setShow(false);
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
            </Sider>{" "}
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

        )}
      </div>

      {
        toggle ?
          <div >
            <Curriculum /><br />
            <CurriculumFiles />
          </div> : null

      }

      <br />

      <br />
      <br />
    </div >
  );
};

export default CoursesPaage;
