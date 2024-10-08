const json = {
    emsid: "3243",
    eventtitle: "title one",
    eventfromdate: "2024-10-15",
    eventtodate : "2024-10-17",
    departmentcode: "101013",
    projectcode: "P0045",
    qse: "visiting.card2",
    asx: "VCF@1234"
 }

//  console.log(JSON.stringify(json))
 const base64 = btoa(JSON.stringify(json))
 console.log(base64)
// console.log(btoa(JSON.stringify(json)))
// const base64 = "eyJ0aXRsZSI6IlRlc3QgbWVldGluZyIsIm5hbWUiOiJUZXN0IE5hbWUiLCJjb2RlIjoiQ09ERV8wMDEiLCJkYXRhIjoiMjQtMDktMjAyNCIsInN0YXJ0VGltZSI6IjEwOjAwIiwiZW5kVGltZSI6IjEzOjAwIn0="

console.log(JSON.parse(atob(base64)))