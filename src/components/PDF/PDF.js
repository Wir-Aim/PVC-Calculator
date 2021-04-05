import React, { useEffect } from 'react'
import Banner from '../../images/logo/SPIMA_trans.webp'
import Pdf from 'react-to-pdf'
import "./PDF.css";

const myRef = React.createRef();
let popEventListnerAdded = false;

function PDF(props) {

  useEffect(() => {
    if (!popEventListnerAdded) {

      // window.addEventListener('popstate', (event) => {
      //   alert("You message");
      //   popEventListnerAdded = true;
      // let part1 = `${CurtainType.slice(0, 3)} ${CurtainType.slice(12)}`
      // let qty1 = `${Label2Values} m`
      // let part2 = 'PVC-RAIL-985'
      // let qty2 = `${Math.ceil(WidthUpdate / 985)} Pcs`
      // let part3 = `PVC-PLATE-${CurtainPlate}-SS`
      // let qty3 = `${LabelValues} Pcs`
      // props.history.push("/pdf", {
      //   WidthUpdate, HeightUpdate, part1, part2, part3, qty1, qty2, qty3
      // });
      // });
    }
  });

  const values = props.location.state;

  const students = [
    { partNumber: values.part1, qty: values.qty1, },
    { partNumber: values.part2, qty: values.qty2, },
    { partNumber: values.part3, qty: values.qty3, },
  ]

  const renderTableHeader = () => {
    let header = Object.keys(students[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return students.map((student, index) => {
      const { id, partNumber, qty } = student //destructuring
      return (
        <tr key={id}>
          <td className='tableData'>{partNumber}</td>
          <td className='tableData'>{qty}</td>
        </tr>
      )
    })
  }

  return (
    <div className='pdfMain'>
      <div className='refDiv' ref={myRef}>
        <div className='banner'>
          <img className='headLogo' src={Banner} alt='banner' ></img>
          <p className='bannerText' >Your partner in Intralogistics solutions</p>
        </div>
        <div className='body' >
          <h1 id='title'>List of Parts for Opening {values.WidthUpdate[0]} x {values.HeightUpdate[0]}</h1>
          <div className='pdfInner'   >
            <table id='students'>
              <tbody>
                <tr>
                  {renderTableHeader()}
                </tr>
                {renderTableData()}
              </tbody>
            </table>
          </div>
          <h4 className='bottomText'>Please e-mail this PDF to info@spima.com.cy for a quotation.</h4>
        </div>
      </div>
      <Pdf targetRef={myRef} filename={`${values.WidthUpdate[0]}x${values.HeightUpdate[0]}mm.pdf`} scale={1.2}  >
        {({ toPdf }) => <button className='btn' onClick={toPdf}>Download Pick List</button>}
      </Pdf>
    </div>
  );

}

export default PDF;
