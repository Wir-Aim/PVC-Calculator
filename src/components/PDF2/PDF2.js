import React, { Component, useContext, useState } from 'react'
import Banner from '../../images/logo/SPIMA_trans.png'
import Pdf from 'react-to-pdf'
import { PdfValues } from '../Dashboard/Dashboard'
import "./PDF2.css";

const myRef = React.createRef();

function PDF2(props) {

  const values = props.location.state;

  const students = [
    { partNumber: values.part1, qty: values.qty1, },
    { partNumber: values.part2, qty: values.qty2, },
    { partNumber: values.part3, qty: values.qty3, },
  ]
  const pdfvalue = useContext(PdfValues)

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
          <img src={Banner} alt='banner' ></img>
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
          <h4>Please e-mail this PDF to info@spima.com.cy for a quotation</h4>
        </div>
      </div>
      <Pdf targetRef={myRef} filename={`${values.WidthUpdate[0]}x${values.HeightUpdate[0]}mm.pdf`} scale={0.8}  >
        {({ toPdf }) => <button className='btn' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
  );

}

export default PDF2;
