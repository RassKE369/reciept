
    function downloadPDF() {
      const element = document.getElementById("receipt");
      html2pdf().from(element).set({
        margin: 10,
        filename: 'Olesegere_House_Receipt.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).save();
    }
  