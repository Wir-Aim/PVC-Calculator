import React, { Component, useContext } from 'react'
import Banner from '../../images/logo/SPIMA_trans.png'
import Pdf from 'react-to-pdf'
import {PdfValues} from '../Dashboard/Dashboard'
// import "./PDF.css";

const myRef = React.createRef();

function PDF2() {
  const pdfvalue = useContext(PdfValues)
  
  return (
    <div className='pdfMain'>
      <div className='refDiv' ref={myRef}>
        <div className='banner'>
          <img src={Banner} alt='banner' ></img>
          <p className='bannerText' >Your partner in Intralogistics solutions</p>
        </div>
        <h1 id='title'>List of Parts for Opening 500{pdfvalue} x 500</h1>
        <div className='pdfInner'   >
          <table id='students'>
            <tbody>
              <tr>
                {/* {this.renderTableHeader()} */}
              </tr>
              {/* {this.renderTableData()} */}
            </tbody>
          </table>
        </div>
      </div>
      <Pdf targetRef={myRef} filename="code-example.pdf" scale={0.8} >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
  );

}

export default PDF2;
