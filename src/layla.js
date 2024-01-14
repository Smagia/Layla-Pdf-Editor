"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePdf = exports.convertToTxt = exports.deletePage = exports.getPage = exports.changePageOrder = exports.deleteEmptyPages = exports.loadPdf = void 0;
function loadPdf(fileName) {
    //   const pdf = require("pdf-parse");
    //   fs.readFile(fileName, "utf8", (err, data) => {
    //     if (err) {
    //       console.error(`Error reading file ${fileName}:`, err);
    //       return;
    //     }
    //     pdf(data)
    //       .then((data) => {
    //         const textContent = data.text;
    //         // Split the text content into lines
    //         const lines = textContent.split("\n");
    //         // Print each line
    //         lines.forEach((line, index) => {
    //           console.log(`Line ${index + 1}: ${line}`);
    //         });
    //       })
    //       .catch((err) => {
    //         console.error(`Error parsing PDF file ${fileName}:`, err);
    //       });
    //   });
    var fs = require("fs");
    var pdf = require("pdf-parse");
    var dataBuffer = fs.readFileSync(fileName);
    pdf(dataBuffer).then(function (data) {
        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text);
    });
}
exports.loadPdf = loadPdf;
function deleteEmptyPages() {
    console.log("Hello");
}
exports.deleteEmptyPages = deleteEmptyPages;
function changePageOrder(currentPageNumber, newPageNumber) {
    console.log(currentPageNumber + " " + newPageNumber);
}
exports.changePageOrder = changePageOrder;
function getPage(pageNumber) {
    console.log(pageNumber);
}
exports.getPage = getPage;
function deletePage(pageNumber) {
    console.log(pageNumber);
}
exports.deletePage = deletePage;
function convertToTxt() {
    console.log("Hello");
}
exports.convertToTxt = convertToTxt;
function savePdf(fileName) {
    console.log(fileName);
}
exports.savePdf = savePdf;
