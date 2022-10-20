import React, { useState } from 'react';
import './Estilos/style.css'

function Citas() {

    //Funcion para imprmir la cita con boton
    function imprimirCita() {
        window.print();
    }

    //FUNCION PARA OBTENER FECHA Y HORA DE IMPRESION
    let fecha = new Date();
    let hora = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let mes2 = mes + 1;
    let anio = fecha.getFullYear();
    let horaactual = hora.toLocaleTimeString();
    //if (dia < 10)
    //  dia = '0' + dia; //agrega cero si el menor de 10
    //if (mes < 10)
    //    mes2 = '0' + mes2 //agrega cero si el menor de 10
    let fechaactual = anio + "-" + mes2 + "-" + dia;

    //Obteniendo fecha seleccionada y formateandola en dd/mm/aaaa

    const [date, setDate] = useState(fechaactual);
    console.log(date);
    let date2 = date;

    function convertDateFormat(string) {
        var info = string.split('-');
        return info[2] + '/' + info[1] + '/' + info[0];
    }
    let dateString = convertDateFormat(date2);
    console.log(dateString)

    return (
        <>
            <div className='divpadre'>
                <div className='oculto-impresion div-oculto'>
                    <p>.</p>
                </div>
                <div className='divhijo'>
                    <div className='caja'>
                        <div className='head'>
                            <p className='headp'>EsSalud</p>
                            <p className=''>H.N. EDGARDO REBAGLIATI MARTINS</p>
                            <p className=''>DEPARTAMENTO DE PATOLOGIA CLINICA</p>
                        </div>
                        <div className='cuerpo'>
                            <h3>*****CITA DE LABORATORIO*****</h3>
                            <p className='texto1'>Fecha de Cita:    <input className='oculto-impresion' id='fechero' type="date" onChange={e => setDate(e.target.value)} /><br /></p>
                            <p className='texto2'>{dateString}</p>
                            <p className='texto1'>Horario:</p>
                            <p className='texto2'>6:00 - 9:00am</p>
                            <p className='texto1'>Lugar:</p>
                            <p className='texto3'>Toma de Muestra
                            Puerta N°7 Hospital Rebagliati
                            </p>
                            <p className='texto4'>
                                (Estacionamiento Emergencia Pediatrica, Av. Salaverry)
                            </p>
                            <br />
                        </div>
                        <div className='boton'>
                            <button className='oculto-impresion boton' onClick={imprimirCita}>Imprimir</button>
                        </div>
                        
                        <div className='footer muestro-impresion'>
                            Fecha y hora impresion: {dia}/{mes2}/{anio} {horaactual}
                        </div>
                    </div>
                </div>
                <div className='soporte oculto-impresion'>
                    <p className='texto-soporte'>
                        Hospital Nacional Edgardo Rebagliati Martins -
                        Departamento de Patología Clínica
                        <br />
                        Soporte : roberto.durand@essalud.gob.pe
                        / jose.azana@essalud.gob.pe
                        <br />
                        2022
                        </p>
                </div>

            </div>
        </>
    )
}

export default Citas;