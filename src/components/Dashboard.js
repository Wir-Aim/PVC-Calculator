import SliderComponent from "./Slider";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Dashboard.css";
import { useState } from "react";

const overlapOptions = [{ value: "50", label: "50 mm" }, { value: "95", label: "95 mm" }, { value: "135", label: "135 mm" }];
const stripOptions = [{ value: "200", label: "200 mm" }, { value: "300", label: "300 mm" }, { value: "400", label: "400 mm" }];
// const stripOptions = ["200", "300", "400"];
// const overlapOptions = ["50", "95", "135"];
// const stripValueOptions = ["200", "300", "400"];
// const overlapValueOptions = ["50", "95", "135"];
const defaultOverlapOption = overlapOptions[0].value
const defaultStripOption = stripOptions[0].value

function Dashboard() {
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
  };

  return (
    <>
      <div className="mainDiv">
        <div className="imageBlur">
          <div className="main">
            <p className="mainHead">PVC Strip Curtain Calculator</p>
          </div>
          <div className="main-content">
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
              <p className="dropdown-text">Strip Width</p>
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
            <div>
              <p className="label-text">{LabelValues} strips needed</p>
              <p className="label-text">Total length: {Label2Values} m</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
