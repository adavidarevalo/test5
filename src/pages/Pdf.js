import React, {useEffect} from 'react';
import MyCv from '../fileDownload/MyCv.pdf'
import { AiOutlineCloudDownload } from "react-icons/ai"
import HeaderContainer from '../components/Layout/HeaderContainer'
import '../styles/Pdf.scss'

const Pdf = () => {
    useEffect(() => {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        } 
    }, [])
    return (
        <>
        <HeaderContainer/>
        <section className='Pdf-Container'>
            <object
            data={MyCv}
            type="application/pdf"
            width="100%"
            height="105%"
            >
                <div>
                    <img src='https://www.programando.org/blog/2021/06/28/el-camino-del-backend-developer-lenguajes-formales/featured.png' alr='Frontend Developer'/>
                  <a href={MyCv} id="enlaceDescargarPdf"
                  download="David-Arevalo-CV.pdf"
                  >Your device cannot view pdf, Downloading Automatically. <AiOutlineCloudDownload/></a> 
                </div>
            </object>
        </section>
        </>
    );
}

export default Pdf