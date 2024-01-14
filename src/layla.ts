import * as fs from "fs";

export function loadPdf(fileName: string) {
  const fs = require("fs");
  const pdf = require("pdf-parse");

  let dataBuffer = fs.readFileSync(fileName);

  pdf(dataBuffer).then(function (data) {
    console.log(data.numpages);
    console.log(data.numrender);
    console.log(data.info);
    console.log(data.metadata);
    console.log(data.version);
    console.log(data.text);
  });
}

export function deleteEmptyPages() {
  console.log("Hello");
}

export function changePageOrder(
  currentPageNumber: string,
  newPageNumber: string
) {
  console.log(currentPageNumber + " " + newPageNumber);
}

export function getPage(pageNumber: string) {
  console.log(pageNumber);
}

export function deletePage(pageNumber: string) {
  console.log(pageNumber);
}

export function convertToTxt() {
  console.log("Hello");
}

export function savePdf(fileName: string) {
  console.log(fileName);
}
