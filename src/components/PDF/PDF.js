import React, { Component } from 'react'
import Banner from '../../images/logo/SPIMA_trans.png'
import Pdf from 'react-to-pdf'
import "./PDF.css";

const myRef = React.createRef();

class PDF extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.myInput = React.createRef()
        this.state = { //state is by default an object
            students: [
                { partNumber: 'PVC', qty: 21, },
                { partNumber: 'PVC', qty: 19, },
                { partNumber: 'PVC', qty: 16, },
                { partNumber: 'PVC', qty: 25, }
            ]
        }
    }

    componentDidMount() {
        console.log('Width', myRef.current.parentElement.clientWidth)
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, partNumber, qty } = student //destructuring
            return (
                <tr key={id}>
                    <td className='tableData'>{partNumber}</td>
                    <td className='tableData'>{qty}</td>
                </tr>
            )
        })
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div className='pdfMain'>
                <div className='refDiv' ref={myRef}>
                    <div className='banner'>
                        <img src={Banner} alt='banner' ></img>
                        <p className='bannerText' >Your partner in Intralogistics solutions</p>
                    </div>
                    <h1 id='title'>List of Parts for Opening 500 x 500</h1>
                    <div className='pdfInner'   >
                        <table id='students'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pdf targetRef={myRef} filename="code-example.pdf" scale={0.8} >
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
        )
    }
}

export default PDF;

