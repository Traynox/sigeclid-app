export const types = {

    login: '[auth] Login',
    logout: '[auth] Logout',
    setAuth: '[auth] setAuth',
    setLogged:'[auth] setLogged',
    
    setPacientes: '[clientes] setClientes',
    pacienteSelected: '[clientes] clienteSelected',
    pacienteUpdate: '[clientes] clienteUpdate',
    pacienteShow: '[clientes] clienteShow',
    pacienteDestroy: '[clientes] clienteDestroy',
    
    setEmpleados: '[empleados] setEmpleados',
    empleadoSelected: '[empleados] empleadoSelected',
    empleadoUpdate: '[empleados] empleadoUpdate',
    empleadoShow: '[empleados] empleadoShow',
    empleadoDestroy: '[empleados] empleadoDestroy',

    setTratamientos: '[tratamientos] setTratamientos',
    tratamientoSelected: '[tratamientos] tratamientoSelected',
    tratamientoUpdate: '[tratamientos] tratamientoUpdate',
    tratamientoShow: '[tratamientos] tratamientoShow',
    tratamientoDestroy: '[tratamientos] tratamientoDestroy',

    setMiPerfil: '[configuracion] setMiPerfil',
    setMiClinica: '[configuracion] setMiClinica',
    setMiActive: '[configuracion] setMiActive',

    modalStore: '[ui] modalStore',
    modalUpdate: '[ui] modalUpdate',
    setSearch: '[ui] setSearch',
    setMode: '[ui] setMode',
}