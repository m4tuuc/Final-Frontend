function Tabla({ clientes, setClienteAEditar, eliminarCliente }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>CUIT</th>
          <th>Direccion de email</th>
          <th>Direccion</th>
          <th>Tipo de cuenta</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.cuit}</td>
              <td>{cliente.email}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.tipoCuenta}</td>
              <td>{cliente.telefono}</td>
              <td>
                <button className="edit-btn" onClick={() => setClienteAEditar(cliente)}>Editar</button>
                <button className="delete-btn" onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No hay clientes registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Tabla;