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
    { id: 1, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/1', status: "Inactivo" },
    { id: 2, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/2', status: "Inactivo" },
    { id: 3, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/3', status: "Activo" },
    { id: 4, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/4', status: "Activo" },
    { id: 5, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/5', status: "Activo" },
    { id: 6, direccion: 'Calle xx #xx-xx', reclamante: null, status: "Inactivo" },
    { id: 7, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/7', status: "Activo" },
    { id: 8, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/8', status: "Inactivo" },
    { id: 9, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/9', status: "Activo" },
    { id: 10, direccion: 'Calle xx #xx-xx', reclamante: 'IPS/10', status: "Activo" },
];