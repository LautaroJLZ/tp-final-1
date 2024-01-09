import React from 'react';
import mi_curriculumm from '../../assets/mi_curriculumm.pdf'

function ResumenDownloadButton() {

  return (
    <a 
    href={mi_curriculumm} 
    download 
    className="button mt-10 md:w-48 w-full text-center md:mx-0 hover:p-3 transition-all">
      Descargar Currículum
    </a>
  );
}

export default ResumenDownloadButton;