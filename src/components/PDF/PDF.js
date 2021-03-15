import React, { Component } from 'react'
import Banner from '../../images/intactBanner.PNG'
import Pdf from 'react-to-pdf'
import "./PDF.css";

const ref = React.createRef();
const options = {
    orientation: 'portrait',
    unit: 'px',
    format: [969, 1920]
};

class PDF extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            students: [
                { productNumber: 'PVC', qty: 21, },
                { productNumber: 'PVC', qty: 19, },
                { productNumber: 'PVC', qty: 16, },
                { productNumber: 'PVC', qty: 25, }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, productNumber, qty } = student //destructuring
            return (
                <tr key={id}>
                    <td className='tableData'>{productNumber}</td>
                    <td className='tableData'>{qty}</td>
                </tr>
            )
        })
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div className='pdfMain' ref={ref}>
                <div>
                    <img className='banner' src={Banner} ></img>
                </div>
                <h1 id='title'>List of Parts for Opening {window.innerWidth} x {window.innerHeight}</h1>
                <div className='pdfInner' >
                    <table id='students'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <Pdf targetRef={ref} filename="code-example.pdf" options={options} >
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
            </div>
        )
    }
}

export default PDF;

