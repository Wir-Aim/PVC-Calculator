import React from "react";
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
  title: {},
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
    alignItems: "center",
    flexDirection: "row",
    borderBottom: 1,
  },
  bannerText: {
    fontSize: 15,
    color: "#3bb678",
  },
  table: {
    width: 400,
    borderWidth: 2,
  },
  tableHeadRow: {
    flexDirection: "row",
    backgroundColor: "#4caf50",
  },
  tableHead: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 25,
  },
  tableHeadText: {
    color: "white",
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableData: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 20,
  },
  tableDataText: {
    fontSize: 14,
  },
});

const PDFDocument = () => {
  return (
    //<PDFViewer>
    <Document>
      <Page size="A4" style={styles.page}>
        <View className="refDiv">
          <View style={styles.banner}>
            <Image style={styles.imageStyle} source={"intactbanner.png"} />
          </View>
          <View style={styles.body}>
            <Text id="title" style={styles.title}>
              List of Parts for Opening 500 x 500
            </Text>
            <View style={styles.table}>
              <View style={styles.tableHeadRow}>
                <View style={styles.tableHead}>
                  <Text style={styles.tableHeadText}>PART NUMBER</Text>
                </View>
                <View style={styles.tableHead}>
                  <Text style={styles.tableHeadText}>QTY</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableData}>
                  <Text style={styles.tableDataText}>
                    PVC Anti Static Green
                  </Text>
                </View>
                <View style={styles.tableData}>
                  <Text style={styles.tableDataText}>123 m</Text>
                </View>
              </View>
            </View>
            <Text className="bottomText">
              Please e-mail this PDF to info@spima.com.cy for a quotation.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
    //</PDFViewer>
  );
};

function PDF2() {
  return (
    <>
      <PDFDocument />

      <PDFDownloadLink
        document={PDFDocument()}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a",
        }}
      >
        Download Pdf
      </PDFDownloadLink>
    </>
  );
}

export default PDF2;
