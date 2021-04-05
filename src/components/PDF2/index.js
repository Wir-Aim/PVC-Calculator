import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    page: {
        flexDirection: "row"
    },
    section: {
        flexGrow: 1
    },
    viewStyle: {
        border: "1px solid #4a4a4a"
    }
});

const MyDocument = () => {
    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Hello World!</Text>
                </View>
                <View style={styles.section}>
                    <Text>We're inside a PDF!</Text>
                </View>
            </Page>
        </Document>
    )
};

function PDF2() {
    return (
        <>
            <MyDocument />

            <PDFDownloadLink
                document={
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.viewStyle} >
                                <View style={styles.section}>
                                    <Text>Hello World!</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text>Hello World!</Text>
                                </View>
                            </View>
                            <View style={styles.section}>
                                <Text>We're inside a PDF!</Text>
                            </View>
                        </Page>
                    </Document>}
                fileName="movielist.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a"
                }}
            >
            </PDFDownloadLink>
        </>
    );
};



export default PDF2;