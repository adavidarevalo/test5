import React from 'react';

const Pdf = () => {

/*     if(typeof window.orientation !== "undefined"){
        document.getElementById('enlaceDescargarPdf').click();
        window.close();
    } */
    return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
            <object
            data={require('../CV/David-Arevalo_CV.pdf')}
            type="application/pdf"
            width="100%"
            height="100%"
            >
               {/*  <br />
                <a href={require('../CV/DavidCv.pdf')} id="enlaceDescargarPdf"
                download="ReactJS.pdf"
                >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a> */}
            </object>
        </div>
    );
}

export default Pdf