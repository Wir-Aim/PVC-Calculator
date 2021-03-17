import SliderComponent from "../Slider";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Dashboard.css";
import img1 from '../../images/pvc-images/PVC-ANTISTATIC-GREEN.jpg';
import img2 from '../../images/pvc-images/PSCL1M3003P.jpg';
import img3 from '../../images/pvc-images/PSCL1M3003.jpg';
import img4 from '../../images/pvc-images/PSCL1M3005P.jpg';
import img5 from '../../images/pvc-images/PSCL1M3005.jpg';
import img6 from '../../images/pvc-images/PSCL1M2002AM.jpg';
import img7 from '../../images/pvc-images/PSCL1M2002.jpg';
import img8 from '../../images/pvc-images/PSCL1M4004.jpg';
import img9 from '../../images/Pvc-grades/pvc-opaque-colours.jpg';
import img10 from '../../images/Pvc-grades/pvc-perforated.jpg';
import img11 from '../../images/Pvc-grades/pvc-polar.jpg';
import img12 from '../../images/Pvc-grades/pvc-standard-clear.jpg';
import img13 from '../../images/Pvc-grades/pvc-translucent-colours.jpg';
import img14 from '../../images/Pvc-grades/pvc-welding.jpg';
import headLogo from '../../images/logo/SPIMA.webp';
import { useState } from "react";
import { NavLink } from 'react-router-dom'

const overlapOptions = [{ value: "50", label: "50 mm" }, { value: "95", label: "95 mm" }, { value: "135", label: "135 mm" }];
const stripOptions = [
  { value: 300, label: "PVC 300x3mm Anti Static Green" },
  { value: '300', label: "PVC 300x3mm Clear polar" },
  { value: 300, label: "PVC 300x3mm Clear standard" },
  { value: '300', label: "PVC 300x5mm Clear ribbed polar" },
  { value: 300, label: "PVC 300x5mm Clear ribbed" },
  { value: '200', label: "PVC 200x3mm Anti Static Green" },
  { value: 200, label: "PVC 200x2mm Clear standard" },
  { value: 400, label: "PVC 400x4mm Clear standard" },
];
const gradeOptions = [
  { value: 1, label: 'Anti-Insect' },
  { value: 2, label: 'Anti-Microbial Perforated' },
  { value: 3, label: 'Anti-Microbial Standard' },
  { value: 4, label: 'Anti-Static' },
  { value: 5, label: 'Doubled Ripped' },
  { value: 6, label: 'Doubled Ripped Polar' },
  { value: 7, label: 'Frosted' },
  { value: 8, label: 'Glowstrip' },
  { value: 9, label: 'Opaque Colours' },
  { value: 10, label: 'Perforated' },
  { value: 11, label: 'Polar' },
  { value: 12, label: 'Standard Clear' },
  { value: 13, label: 'Translucent Colours' },
  { value: 14, label: 'Welding' },
]
const defaultOverlapOption = overlapOptions[0].value
const defaultStripOption = stripOptions[0].label

function Dashboard() {
  const [PvcImg, setPvcImage] = useState(img1);
  const [WidthUpdate, setWidthUpdate] = useState([500]);
  const [HeightUpdate, setHeightUpdate] = useState([500]);
  const [WidthValues, setWidthValues] = useState([500]);
  const [HeightValues, setHeightValues] = useState([500]);
  const [OverlapValues, setOverlapValues] = useState(overlapOptions[0].value);
  const [StripValues, setStripValues] = useState(stripOptions[0].value);
  const [LabelValues, setLabelValues] = useState(
    Math.ceil(WidthValues / (StripValues - OverlapValues))
  );

  const [Label2Values, setLabel2Values] = useState(
    Math.ceil((HeightValues * LabelValues) / 1000)
  );

  const onGradeChange = (value) => {
    console.log('kiya Mila', value.value)
    value.value === 1 ? setPvcImage(img1)
      : value.value === 2 ? setPvcImage(img2)
        : value.value === 3 ? setPvcImage(img3)
          : value.value === 4 ? setPvcImage(img4)
            : value.value === 5 ? setPvcImage(img5)
              : value.value === 6 ? setPvcImage(img6)
                : value.value === 7 ? setPvcImage(img7)
                  : value.value === 8 ? setPvcImage(img8)
                    : value.value === 9 ? setPvcImage(img9)
                      : value.value === 10 ? setPvcImage(img10)
                        : value.value === 11 ? setPvcImage(img11)
                          : value.value === 12 ? setPvcImage(img12)
                            : value.value === 13 ? setPvcImage(img13)
                              : value.value === 14 ? setPvcImage(img14)
                                : setPvcImage(img1)
  }

  const onWidthUpdate = (update) => {
    setWidthUpdate(update);
    setLabelValues(Math.ceil(update / (StripValues - OverlapValues)));
    setLabel2Values(
      Math.ceil(
        (HeightValues * Math.ceil(update / (StripValues - OverlapValues))) / 1000
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
    value.label === "PVC 300x3mm Anti Static Green" ? setPvcImage(img1)
      : value.label === "PVC 300x3mm Clear polar" ? setPvcImage(img2)
        : value.label === "PVC 300x3mm Clear standard" ? setPvcImage(img3)
          : value.label === "PVC 300x5mm Clear ribbed polar" ? setPvcImage(img4)
            : value.label === "PVC 300x5mm Clear ribbed" ? setPvcImage(img5)
              : value.label === "PVC 200x3mm Anti Static Green" ? setPvcImage(img6)
                : value.label === "PVC 200x2mm Clear standard" ? setPvcImage(img7)
                  : value.label === "PVC 400x4mm Clear standard" ? setPvcImage(img8)
                    : setPvcImage(img1)
  };


  return (
    <>
      <div className="mainDiv">
        <div className="imageBlur">
          <div className='mainHeader' >
            <img src={headLogo} alt='dashboardlogo' />
            <div className='headerText'>
              <p>Your partner in Intralogistics solutions</p>
            </div>
            <div className='header2Text'>
              <p>Online Tools</p>
            </div>
          </div>
          <div className='main-body'>
            <div className="main-head">
              <NavLink exact activeClassName='headerActive' to='/' className="header">PVC Strip Curtain Calculator</NavLink>
              <NavLink exact activeClassName='headerActive' to='/dockleveller' className="header">Dock Leveller</NavLink>
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
                  value={defaultOverlapOption}
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
                  value={defaultStripOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="select-dropdown">
                <Dropdown
                  options={gradeOptions}
                  onChange={onGradeChange}
                  // className='main-dropdown'
                  controlClassName="select-dropdown-inner"
                  arrowClassName="dropdown-arrow"
                  placeholderClassName="dropdown-placeholder"
                  menuClassName="dropdown-list"
                  placeholder="Select PVC Grade"
                // value={defaultStripOption}
                />
                <div className='pvc-img-div' >
                  <img className='pvc-img' src={PvcImg} alt='pvcimages' />
                </div>
              </div>
              <div>
                <p className="label-text">{LabelValues} Strips Needed</p>
                <p className="label-text">Total Length: {Label2Values}m</p>
              </div>
              {/* <PDF /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
