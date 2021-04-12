import SliderComponent from "../Slider";
import React, { createContext, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Dashboard.css";
import { HiDownload } from "react-icons/hi";
import headLogo from "../../images/logo/SPIMA.webp";
import { NavLink, useHistory } from "react-router-dom";

import img1 from "../../images/pvc-images/PVC-ANTISTATIC-GREEN.jpg";
import img2 from "../../images/pvc-images/PSCL1M3003P.jpg";
import img3 from "../../images/pvc-images/PSCL1M3003.jpg";
import img4 from "../../images/pvc-images/PSCL1M3005P.jpg";
import img5 from "../../images/pvc-images/PSCL1M3005.jpg";
import img6 from "../../images/pvc-images/PSCL1M2002AM.jpg";
import img7 from "../../images/pvc-images/PSCL1M2002.jpg";
import img8 from "../../images/pvc-images/PSCL1M4004.jpg";

// let widthget;
// let heightget;

const overlapOptions = [
  { value: "50", label: "50 mm" },
  { value: "95", label: "95 mm" },
  { value: "135", label: "135 mm" },
];

const partNumbers = [
  "PVC-ANTISTATIC-GREEN",
  "PSCL1M3003P",
  "PSCL1M3003",
  "PSCL1M3005P",
  "PSCL1M3005",
  "PSCL1M2002AM",
  "PSCL1M2002",
  "PSCL1M4004",
];
const stripOptions = [
  {
    value: "300.01",
    label: "PVC 300x3mm Anti Static Green",
  },
  { value: "300.02", label: "PVC 300x3mm Clear Polar" },
  { value: "300.03", label: "PVC 300x3mm Clear Standard" },
  {
    value: "300.04",
    label: "PVC 300x5mm Clear Ribbed Polar",
  },
  { value: "300.", label: "PVC 300x5mm Clear Ribbed" },
  {
    value: "200.01",
    label: "PVC 200x3mm Anti Static Green",
  },
  { value: "200", label: "PVC 200x2mm Clear Standard" },
  { value: "400", label: "PVC 400x4mm Clear Standard" },
];

// const defaultOverlapOption = overlapOptions[0].label
// const defaultStripOption = stripOptions[0].label

const PdfValues = createContext();

function Dashboard(props) {
  const history = useHistory();
  const [CurtainPlate, setCurtainPlate] = useState("300");
  const [CurtainType, setCurtainType] = useState(partNumbers[0]);
  const [PvcImg, setPvcImage] = useState(img1);
  const [WidthUpdate, setWidthUpdate] = useState([500]);
  const [HeightUpdate, setHeightUpdate] = useState([500]);
  const [WidthValues, setWidthValues] = useState([500]);
  const [HeightValues, setHeightValues] = useState([500]);
  const [OverlapValues, setOverlapValues] = useState(overlapOptions[0].value);
  const [StripValues, setStripValues] = useState(400);
  const [LabelValues, setLabelValues] = useState(
    Math.ceil(WidthValues / (StripValues - OverlapValues))
  );

  const [Label2Values, setLabel2Values] = useState(
    Math.ceil((HeightValues * LabelValues) / 1000)
  );

  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return localStorage.clear();
    });
    // if (updateLocal) {
    // widthget = localStorage.getItem("width", WidthValues);
    // heightget = localStorage.getItem("height", HeightValues);
    // const overlapget = localStorage.getItem("overlap", OverlapValues);
    // const labelget = localStorage.getItem("label", Label2Values);
    // const stripget = localStorage.getItem("strip", StripValues);
    // changeWidthAndHeight([widthget], [heightget], labelget);
    // onGetOverlap(overlapget);
    // onGetStrip(stripget);
    // }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("overlap", OverlapValues);
    localStorage.setItem("strip", StripValues);
    localStorage.setItem("height", HeightValues);
    localStorage.setItem("width", WidthValues);
    localStorage.setItem("label", Label2Values);
    let part1 = `${CurtainType}`;
    let qty1 = `${Label2Values} m`;
    let part2 = "PVC-RAIL-985";
    let qty2 = `${Math.ceil(WidthUpdate / 985)} Pcs`;
    let part3 = `PVC-PLATE-${CurtainPlate}-SS`;
    let qty3 = `${LabelValues} Pcs`;
    history.push("/pdf", {
      WidthUpdate,
      HeightUpdate,
      part1,
      part2,
      part3,
      qty1,
      qty2,
      qty3,
    });
  };

  const onWidthUpdate = (update) => {
    setWidthUpdate(update);
    setLabelValues(Math.ceil(update / (StripValues - OverlapValues)));
    setLabel2Values(
      Math.ceil(
        (HeightValues * Math.ceil(update / (StripValues - OverlapValues))) /
          1000
      )
    );
  };

  const onHeightUpdate = (update) => {
    setHeightUpdate(update);
    setLabel2Values(Math.ceil((update * LabelValues) / 1000));
  };

  const onWidthChange = (value) => {
    setWidthValues(value);
    setLabelValues(Math.ceil(value / (StripValues - OverlapValues)));
    setLabel2Values(
      Math.ceil(
        (HeightValues * Math.ceil(value / (StripValues - OverlapValues))) / 1000
      )
    );
  };

  const onHeightChange = (value) => {
    setHeightValues(value);
    setLabel2Values(Math.ceil((value * LabelValues) / 1000));
  };

  // const changeWidthAndHeight = (value1, value2, value3) => {
  //   if (value1[0] && value2[0] && value3 !== null) {
  //     setWidthUpdate(value1);
  //     setWidthValues(value1);
  //     setHeightUpdate(value2);
  //     setHeightValues(value2);
  //     setTimeout(() => {
  //       setLabel2Values(Math.ceil(value3));
  //     }, 100);
  //   }
  // };

  // const onGetOverlap = (value) => {
  //   value === "50"
  //     ? changeOverlap(overlapOptions[0])
  //     : value === "95"
  //     ? changeOverlap(overlapOptions[1])
  //     : value === "135"
  //     ? changeOverlap(overlapOptions[2])
  //     : changeOverlap(overlapOptions[0]);
  // };

  // const onGetStrip = (value) => {
  //   value === "300.01"
  //     ? changeStrip(stripOptions[0])
  //     : value === "300.02"
  //     ? changeStrip(stripOptions[1])
  //     : value === "300.03"
  //     ? changeStrip(stripOptions[2])
  //     : value === "300.04"
  //     ? changeStrip(stripOptions[3])
  //     : value === "300."
  //     ? changeStrip(stripOptions[4])
  //     : value === "200.01"
  //     ? changeStrip(stripOptions[5])
  //     : value === "200"
  //     ? changeStrip(stripOptions[6])
  //     : value === "400"
  //     ? changeStrip(stripOptions[7])
  //     : changeStrip(stripOptions[0]);
  // };

  // const changeOverlap = (value) => {
  //   onOverlapChange(value);
  // };
  // const changeStrip = (value) => {
  //   onStripWidthChange(value);
  // };

  const onOverlapChange = (value) => {
    setOverlapValues(value.value);
    setLabelValues(Math.ceil(WidthValues / (StripValues - value.value)));
    setLabel2Values(
      Math.ceil(
        (HeightValues * Math.ceil(WidthValues / (StripValues - value.value))) /
          1000
      )
    );
  };

  const onStripWidthChange = (value) => {
    setStripValues(value.value);
    setLabelValues(Math.ceil(WidthValues / (value.value - OverlapValues)));
    setLabel2Values(
      Math.ceil(
        (HeightValues *
          Math.ceil(WidthValues / (value.value - OverlapValues))) /
          1000
      )
    );
    setCurtainPlate(Math.floor(value.value));
    value.label === "PVC 300x3mm Anti Static Green"
      ? changeImageAndPartnumber(img1, partNumbers[0])
      : value.label === "PVC 300x3mm Clear Polar"
      ? changeImageAndPartnumber(img2, partNumbers[1])
      : value.label === "PVC 300x3mm Clear Standard"
      ? changeImageAndPartnumber(img3, partNumbers[2])
      : value.label === "PVC 300x5mm Clear Ribbed Polar"
      ? changeImageAndPartnumber(img4, partNumbers[3])
      : value.label === "PVC 300x5mm Clear Ribbed"
      ? changeImageAndPartnumber(img5, partNumbers[4])
      : value.label === "PVC 200x3mm Anti Static Green"
      ? changeImageAndPartnumber(img6, partNumbers[5])
      : value.label === "PVC 200x2mm Clear Standard"
      ? changeImageAndPartnumber(img7, partNumbers[6])
      : value.label === "PVC 400x4mm Clear Standard"
      ? changeImageAndPartnumber(img8, partNumbers[7])
      : changeImageAndPartnumber(img1, partNumbers[0]);
  };

  const changeImageAndPartnumber = (v1, v2) => {
    setPvcImage(v1);
    setCurtainType(v2);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="imageBlur">
          <div className="mainHeader">
            <img className="headLogo" src={headLogo} alt="dashboardlogo" />
            <div className="headerText">
              <p>Your partner in Intralogistics solutions</p>
            </div>
            <div className="header2Text">
              <p>Online Tools</p>
            </div>
          </div>
          <div className="main-body">
            <div className="main-head">
              <NavLink
                exact
                activeClassName="headerActive"
                className="header1"
                to="/"
              >
                PVC Strip Curtain Calculator
              </NavLink>
              <NavLink
                exact
                activeClassName="headerActive"
                className="header2"
                to="/dock"
              >
                Dock Leveller
              </NavLink>
            </div>
            <div className="body-content">
              <div className="slider">
                <p className="slider-text">Opening Width {WidthUpdate} mm</p>
                <SliderComponent
                  value={WidthValues}
                  onChange={onWidthChange}
                  onUpdate={onWidthUpdate}
                />
              </div>
              <div className="slider">
                <p className="slider-text">Opening Height {HeightUpdate} mm</p>
                <SliderComponent
                  value={HeightValues}
                  onChange={onHeightChange}
                  onUpdate={onHeightUpdate}
                />
              </div>
              <div className="dropdown">
                <p className="dropdown-text">Overlap</p>
                <Dropdown
                  options={overlapOptions}
                  onChange={onOverlapChange}
                  // className="main-dropdown"
                  controlClassName="dropdown-inner"
                  arrowClassName="dropdown-arrow"
                  placeholderClassName="dropdown-placeholder"
                  menuClassName="dropdown-list"
                  value={OverlapValues}
                  placeholder="Select an option"
                />
              </div>
              <div className="dropdown">
                <p className="dropdown-text">Select PVC Type and Width</p>
                <Dropdown
                  options={stripOptions}
                  onChange={onStripWidthChange}
                  // className='main-dropdown'
                  controlClassName="dropdown-inner"
                  arrowClassName="dropdown-arrow"
                  placeholderClassName="dropdown-placeholder"
                  menuClassName="dropdown-list"
                  value={StripValues}
                  placeholder="Select an option"
                />
              </div>
              <div className="pvc-img-div">
                <img className="pvc-img" src={PvcImg} alt="pvcimages" />
              </div>
              <div className="bottom-label">
                <div className="label-head">
                  <p className="label-text">LIST OF PARTS:</p>
                  {/* <button
                    onClick={handleSubmit}
                    className='genBtn' > */}
                  <span onClick={handleSubmit}>
                    {/* <img className='downImg' src={downImg} alt='Download Image' /> */}
                    <HiDownload className="genLink" size={50} />
                    {/* Generate PDF */}
                  </span>
                  {/* <NavLink target='_blank' onClick={() => props.history.push("/pdf2", { name: "sarim" })} className='genLink' exact to="/pdf2" >Generate PDF</NavLink> */}
                  {/* </button> */}
                </div>
                <p className="part-label-text">
                  {CurtainType} : {Label2Values} m
                </p>
                <p className="part-label-text">
                  PVC-RAIL-985: {Math.ceil(WidthUpdate / 985)} Pcs
                </p>
                <p className="part-label-text">
                  PVC-PLATE-{CurtainPlate}-SS: {LabelValues} Pcs
                </p>
                {/* <p className="label-text">Total Length: {Label2Values}m</p>
                  <p className="part-label-text">{LabelValues} Strips Needed</p> */}
              </div>
              {/* <PDF /> */}
              {/* <button className='genBtn' >
                <NavLink className='genLink' exact to='/pdf' >Generate PDF</NavLink>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
export { PdfValues };
