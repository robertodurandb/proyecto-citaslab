import React, { useState } from 'react';
import './Estilos/style.css'
import Orina from './Components/Orina';
import Urocultivo from './Components/Urocultivo';
import Ayunas from './Components/Ayunas';
import Orina24 from './Components/Orina24';
import Esputo from './Components/Esputo';
import Heces from './Components/Heces';

function Citas() {

    const [checkOrina, setCheckOrina] = useState(false); //state del checkbox
    const [checkUro, setCheckUro] = useState(false);
    const [checkAyunas, setCheckAyunas] = useState(true);
    const [checkOrina24, setCheckOrina24] = useState(false);
    const [checkEsputo, setCheckEsputo] = useState(false);
    const [checkHeces, setCheckHeces] = useState(false);

    //Funcion para imprmir la cita con boton
    function imprimirCita() {
        window.print();
    }
    const handleChangeOrina = (event) => {
        if (event.target.checked) {
            setCheckOrina(true)
        } else {
            setCheckOrina(false)
        }
    };
    const handleChangeUro = (event) => {
        if (event.target.checked) {
            setCheckUro(true)
        } else {
            setCheckUro(false)
        }
    };
    const handleChangeAyunas = (event) => {
        if (event.target.checked) {
            setCheckAyunas(true)
        } else {
            setCheckAyunas(false)
        }
    };
    const handleChangeOrina24 = (event) => {
        if (event.target.checked) {
            setCheckOrina24(true)
        } else {
            setCheckOrina24(false)
        }
    };
    const handleChangeEsputo = (event) => {
        if (event.target.checked) {
            setCheckEsputo(true)
        } else {
            setCheckEsputo(false)
        }
    };
    const handleChangeHeces = (event) => {
        if (event.target.checked) {
            setCheckHeces(true)
        } else {
            setCheckHeces(false)
        }
    };



    //FUNCION PARA OBTENER FECHA Y HORA DE IMPRESION
    let fecha = new Date();
    let hora = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let mes2 = mes + 1;
    let anio = fecha.getFullYear();
    let horaactual = hora.toLocaleTimeString();
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
                            <p className='texto4 muestro-impresion'>Horario:</p>
                            <p className='texto5 muestro-impresion'>6:00 - 9:00 a.m.</p>
                            <p className='texto4 muestro-impresion'>Lugar:</p>
                            <p className='texto3 muestro-impresion'>Toma de Muestra
                            Puerta N°7 Hospital Rebagliati
                            </p>
                            <p className='texto4 muestro-impresion'>
                                (Estacionamiento Emergencia Pediatrica, Av. Salaverry)
                            </p>
                            <br />
                        </div>
                        <div className='indicaciones'>
                            <h3>*****INDICACIONES*****</h3>
                            <fieldset className='oculto-impresion'>
                                <legend>Indicaciones</legend>
                                <input type="checkbox" id="chk0" name="ayunas" value="ayunas" defaultChecked="true"
                                    onChange={handleChangeAyunas} />
                                <label for="orina">&nbsp;Ayunas</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="chk1" name="orina" value="orina"
                                    onChange={handleChangeOrina} />
                                <label for="orina">&nbsp;Orina simple</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="chk2" name="urocultivo" value="urocultivo"
                                    onChange={handleChangeUro} />
                                <label for="urocultivo">&nbsp;Urocultivo</label>
                                <br/><br/>
                                <input type="checkbox" id="chk3" name="orina24" value="orina24" 
                                    onChange={handleChangeOrina24}/>
                                <label for="orina24">&nbsp;Orina 24 Horas</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="chk4" name="bkesputo" value="bkesputo" 
                                    onChange={handleChangeEsputo}/>
                                <label for="orina">&nbsp;Esputo</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="chk5" name="heces" value="heces" 
                                    onChange={handleChangeHeces}/>
                                <label for="orina">&nbsp;Heces</label>
                                
                                
                            </fieldset>
                            <div className='lista'>
                                <ul>
                                    {checkAyunas ? <li><Ayunas /></li> : undefined}
                                    {checkOrina ? <li><Orina /></li> : undefined}
                                    {checkUro ? <li><Urocultivo /></li> : undefined}
                                    {checkOrina24 ? <li><Orina24 /></li> : undefined}
                                    {checkEsputo ? <li><Esputo /></li> : undefined}
                                    {checkHeces ? <li><Heces /></li> : undefined}
                                </ul>
                            </div>
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