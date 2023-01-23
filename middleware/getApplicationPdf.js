const pdfDocument = require('pdfkit');
const fs = require('fs');
const doc = require('pdfkit');


const getApplicationPdf = ({data}) => {


 const document = new pdfDocument();





 document.pipe(fs.createWriteStream(`pdf.pdf`));
    
    document.fillColor('blue').text('Appointment Details', 100, 100, {
        link: 'http://google.com/',
        underline: true,
        align: 'center'
        }
        );
document.fontSize(15).text(`Appointment Id: ${data.idappointment}`);
document.fontSize(15).text(`Doctor Name: ${data.name}`);
document.fontSize(15).text(`Patient Name: ${data.name_patient}`);
document.fontSize(15).text(`Patient Id: ${data.idpatient}`);
document.fontSize(15).text(`Patient Age: ${data.age}`);
document.fontSize(15).text(`gender: ${data.gender === 2 ? "male":"female"}`);   
document.fontSize(15).text(`Date: ${data.date}`);
document.fontSize(15).text(`Shift: ${data.shift}`);
document.fontSize(15).text(`Disease: ${data.disease}`);
document.fontSize(15).text(`Status: ${data.status}`);


    document.end();
    

// return document;

}

module.exports = {
    getApplicationPdf}