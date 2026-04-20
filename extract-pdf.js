const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const pdfPath = './public/PNG-UOT KGSSA 2ST CONSTITUTION DRAFT 2026.pdf';

const extractText = async () => {
  try {
    const data = fs.readFileSync(pdfPath);
    const pdfParse = new PDFParse();
    const result = await pdfParse.parse(data);
    console.log('=== PDF CONTENT ===\n');
    console.log(result.text);
    console.log('\n=== END OF PDF ===');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
};

extractText();
