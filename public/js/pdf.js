function getPDF(){
    var doc=new jsPDF();

    doc.formHTML($('#main').get(0),20,20,{
        'width':500
    });

    doc.save('Test.pdf')
}