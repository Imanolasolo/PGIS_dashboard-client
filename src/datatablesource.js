export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "reclamante", headerName: "Reclamante", width: 230 },
    { field: 'direccion', headerName: 'Direccion', width: 230 },
    { 
        field: 'status',
        headerName: 'Estado',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
                </div>
            );
        },
    },
    {
    field: 'services',
    headerName: 'Servicios',
    description: 'here should be services',
    sortable: false,
    width: 200,
    renderCell: (params) => {
      return (
        <>
        <span>{params.row.reclamante} </span>
        <p>{params.row.direccion}</p>
        </>
      )
    },
  },
]

export const userRows = [
    { id: 1, numero1: 6016026847, numero2: '6016059999 Ext 302', horario: 'Abierto las 24 horas', direccion: 'Autopista Norte No. 106 -31', reclamante: 'CLINICA VASCULAR NAVARRA', status: "Activo" },
    { id: 2, numero1: '6016449201 Ext. 205', numero2: null, horario: 'Lun - Vie 7:00 - 19:00 Sab 8:00 - 13:00 Dom Cerrado', direccion: 'Carrera 16A No 82 38', reclamante: 'IMAGENES DIAGNOSTICAS DEL COUNTRY', status: "Inactivo" },
    { id: 3, numero1: 6017443333, numero2: null, horario: 'Abierto las 24 horas', direccion: 'Carrera 12 D No. 32 44', reclamante: 'FUNDACION HOSPITAL SAN CARLOS', status: "Inactivo" },
    { id: 4, numero1: null, numero2: null, horario: 'Abierto las 24 horas', direccion: 'Calle 78 B No. 69 240', reclamante: 'HOSPITAL PABLO TOBON URIBE', status: "Inactivo" },
    { id: 5, numero1: '6044477085 Opc. 1', numero2: null, horario: 'Abierto las 24 horas', direccion: 'Calle 69 No. 51C 24', reclamante: 'IPS UNIVERSITARIA CLINICA LEON XIII', status: "Inactivo" },
    { id: 6, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'ESE HOSPITAL LA MERCED', status: "Inactivo" },
    { id: 7, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'ESE HOSPITAL SANTA MARGARITA', status: "Inactivo" },
    { id: 8, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'KAMEX FISIOTERAPIA', status: "Inactivo" },
    { id: 9, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'CLINICA DE OCCIDENTE', status: "Inactivo" },
    { id: 10, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'HOSPITAL ISAIAS DUARTE CANCINO ESE', status: "Inactivo" },
    { id: 11, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'REHABILITACION FISICA INTEGRAL IPS EU', status: "Inactivo" },
    { id: 12, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'CLINICA PORTOAZUL SA SIGLA CPA', status: "Inactivo" },
    { id: 13, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'IPS UNIDAD MEDICA ETICA EU', status: "Inactivo" },
    { id: 14, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'CLINICA GIRON ESE', status: "Inactivo" },
    { id: 15, numero1: null, numero2: null, horario: null, direccion: 'Autopista Norte No. 106 -31', reclamante: 'CENTRO DE ATENCION Y DIAGNOSTICO DE ENFERMEDADES INFECCIOSAS CDI SA ', status: "Inactivo" },

];
/* 
/*
const FUNDACION_HOSPITAL_SAN_CARLOS 4.57102, -74.1072    
const HOSPITAL_PABLO_TOBON_URIBE 6.27723, -75.57980 HOSPITAL PABLO TOBÓN URIBE  
const IPS_UNIVERSITARIA_CLINICA_LEON_XIII 6.26675, -75.56442 IPS UNIVERSITARIA CLÍNICA LEÓN XIII Calle 69 No. 51C 24 6044477085 Opc. 1 Ext. 32395 32321 32563 Abierto las 24 horas
const ESE_HOSPITAL_LA_MERCED = 5.84615, -76.00930 6048411182 Abierto las 24 horas
const ESE_HOSPITAL_SANTA_MARGARITA = 6.34533, -75.51664 Carrera 64 No.48 80 6044000770 Abierto las 24 horas
const KAMEX_FISIOTERAPIA 3.42708, -76.53271 Carrera 32 No.10 35 6024456969 Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado
const CLINICA_DE_OCCIDENTE 3.46059, -76.53013 Calle 18 Norte No. 5 34 6025248505 Abierto las 24 horas 
const HOSPITAL_ISAIAS_DUARTE_CANCINO_ESE 3.41163, -76.48473 calle 96 28 E3 02 6024140707 Ext. 133 Lun - Vie 7:00  - 17:30 Sab - Dom Abierto las 24 horas 
const REHABILITACION_FISICA_INTEGRAL_IPS_EU 3.53398, -76.29692 Carrera 27 No. 37 34 6022740470 Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado 
const CLINICA_PORTOAZUL_SA_SIGLA_CPA 11.01668, -74.84599 Carrera 30 Corredor Universitario No. 1  851 6053597533 6053672600 Abierto las 24 horas
const IPS_UNIDAD_MEDICA_ETICA_EU 10.98973, -74.95579 Calle 5 No. 8 39 6053096329 Abierto las 24 horas
const CLINICA_GIRON_ESE 7.06974, -73.16930 Calle 33 No. 25 36 6076531312Lun - Vie 7:00  - 19:00 Sab - Dom Cerrado
const CENTRO_DE_ATENCION_Y_DIAGNOSTICO_DE_ENFERMEDADES_INFECCIOSAS_CDI_SA 7.11386, -73.10769 Carrera 37 No. 51 126 6076431666 Ext. 101 Lun - Vie 7:00  - 19:00 Sab 8:00 - 13:00 Dom Cerrado  */