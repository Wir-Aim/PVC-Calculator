import React from "react";
import Banner from "../../images/logo/SPIMA_trans.webp";
// import Pdf from "react-to-pdf";
import "./PDF.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
  page: {
    flexDirection: "row",
  },
  section: {
    flexGrow: 1,
  },
  viewStyle: {
    borderWidth: 1,
  },
  imageStyle: {
    // height: 200,
    width: 600,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  banner: {
    display: "flex",
    width: 600,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    borderBottom: 1,
  },
  table: {
    width: 500,
    borderWidth: 2,
  },
  tableHeadRow: {
    height: 35,
    flexDirection: "row",
    backgroundColor: "#4caf50",
    borderBottom: 1,
  },
  tableHead: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
  },
  tableHeadText: {
    color: "white",
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 1,
    height: 30,
  },
  tableData: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
  },
  tableDataText: {
    fontSize: 14,
  },
  bottomText: {
    marginTop: 10,
    fontSize: 14,
  },
  downloadBtn: {
    textDecoration: "none",
    color: "#4a4a4a",
    padding: 2,
    backgroundColor: "#f2f2f2",
    border: "1px solid #4a4a4a",
  },
});

function PDF(props) {
  var values = props.location.state;

  const students = [
    { partNumber: values.part1, qty: values.qty1 },
    { partNumber: values.part2, qty: values.qty2 },
    { partNumber: values.part3, qty: values.qty3 },
  ];

  const PDFDocument = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View className="refDiv">
            <View style={styles.banner}>
              <Image style={styles.imageStyle} source={"intactBanner.png"} />
            </View>
            <View style={styles.body}>
              <Text id="title" style={styles.title}>
                List of Parts for Opening {values.WidthUpdate[0]} x{" "}
                {values.HeightUpdate[0]}
              </Text>
              <View style={styles.table}>
                <View style={styles.tableHeadRow}>
                  <View style={[styles.tableHead, { borderRightWidth: 1 }]}>
                    <Text style={styles.tableHeadText}>PART NUMBER</Text>
                  </View>
                  <View style={styles.tableHead}>
                    <Text style={styles.tableHeadText}>QTY</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={[styles.tableData, { borderRightWidth: 1 }]}>
                    <Text style={styles.tableDataText}>{values.part1}</Text>
                  </View>
                  <View style={styles.tableData}>
                    <Text style={styles.tableDataText}>{values.qty1}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={[styles.tableData, { borderRightWidth: 1 }]}>
                    <Text style={styles.tableDataText}>{values.part2}</Text>
                  </View>
                  <View style={styles.tableData}>
                    <Text style={styles.tableDataText}>{values.qty2}</Text>
                  </View>
                </View>
                <View style={[styles.tableRow, { borderBottom: 0 }]}>
                  <View style={[styles.tableData, { borderRightWidth: 1 }]}>
                    <Text style={styles.tableDataText}>{values.part3}</Text>
                  </View>
                  <View style={styles.tableData}>
                    <Text style={styles.tableDataText}>{values.qty3}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.bottomText}>
                Please e-mail this PDF to info@spima.com.cy for a quotation.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  const renderTableHeader = () => {
    let header = Object.keys(students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return students.map((student, index) => {
      const { id, partNumber, qty } = student; //destructuring
      return (
        <tr key={id}>
          <td className="tableData">{partNumber}</td>
          <td className="tableData">{qty}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="pdfMain">
        <div className="refDiv">
          <div className="banner">
            <img className="headLogo" src={Banner} alt="banner"></img>
            <p className="bannerText">
              Your partner in Intralogistics solutions
            </p>
          </div>
          <div className="body">
            <h1 id="title">
              List of Parts for Opening {values.WidthUpdate[0]} x{" "}
              {values.HeightUpdate[0]}
            </h1>
            <div className="pdfInner">
              <table id="students">
                <tbody>
                  <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
                </tbody>
              </table>
            </div>
            <h4 className="bottomText">
              Please e-mail this PDF to info@spima.com.cy for a quotation.
            </h4>
            <PDFDownloadLink
              document={PDFDocument()}
              fileName={`${values.WidthUpdate[0]}x${values.HeightUpdate[0]}mm.pdf`}
              // style={styles.downloadBtn}
              className="downloadBtn"
            >
              Download Pick List
            </PDFDownloadLink>
          </div>
        </div>
        {/* <Pdf
          targetRef={myRef}
          filename={`${values.WidthUpdate[0]}x${values.HeightUpdate[0]}mm.pdf`}
          options={options}
        >
          {({ toPdf }) => (
            <button className="btn" onClick={toPdf}>
              Download Pick List
            </button>
          )}
        </Pdf> */}
      </div>
    </>
  );
}

export default PDF;
