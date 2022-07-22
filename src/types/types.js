export const types = {

    login: '[auth] Login',
    logout: '[auth] Logout',

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

    
    modalStore: '[ui] modalStore',
    modalUpdate: '[ui] modalUpdate',
    setSearch: '[ui] setSearch',
    setMode: '[ui] setMode',
    
    
    modalCita: '[ui] modalCita',

    setCitas: '[citas] setCitas',

    setEvents: '[events] setEvents',

    loadEvents: '[events] loadEvents',
    eventAddNew: '[event] Add new',

    eventSetActive: '[event] Set active',
    

    eventClearActiveEvent: '[event] Clear active',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',
}