const json = {
    "title": "Test meeting",
    "name": "Test Name",
    "code": "CODE_001",
    "data":"24-09-2024",
    "startTime": 10,
    "endTime": 13
}

console.log(btoa(JSON.stringify(json)))
const base64 = "eyJ0aXRsZSI6IlRlc3QgbWVldGluZyIsIm5hbWUiOiJUZXN0IE5hbWUiLCJjb2RlIjoiQ09ERV8wMDEiLCJkYXRhIjoiMjQtMDktMjAyNCIsInN0YXJ0VGltZSI6IjEwOjAwIiwiZW5kVGltZSI6IjEzOjAwIn0="

console.log(JSON.parse(atob(base64)).startTime)