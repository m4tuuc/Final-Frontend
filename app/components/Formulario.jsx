import { useState, useEffect } from 'react';


function Formulario({ agregarCliente, actualizarCliente, clienteAEditar, setClienteAEditar }) {
  const [formData, setFormData] = useState({
    nombre: '',
    cuit: '',
    direccion: '',
    telefono: '',
    email: '',
    tipoCuenta: 'Cuenta corriente',
  });

  useEffect(() => {
    if (clienteAEditar) {
      setFormData(clienteAEditar);
    } else {
      // limpia formulario
      setFormData({
        nombre: '',
        cuit: '',
        direccion: '',
        telefono: '',
        email: '',
        tipoCuenta: 'Cuenta Corriente',
      });
    }
  }, [clienteAEditar]);

  // para inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clienteAEditar) {
      actualizarCliente(formData);
    } else {
      agregarCliente(formData);
    }
    // con esto limpiamos el formulario
    setClienteAEditar(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tipo de cuenta:</label>
      <select name="tipoCuenta" value={formData.tipoCuenta} onChange={handleChange}> // se usa onChange para actualizar el estado cada vez que escribimos algo.
        <option value="Cuenta Corriente">Cuenta corriente</option>
        <option value="Cuenta Sueldo">Cuenta sueldo</option>
        <option value="Caja de Ahorro">Caja de ahorro</option>
        <option value="Cuenta unica">Cuenta</option>
      </select>

      <label>Nombre y Apellido:</label>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre y Apellido"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <label>CUIT:</label>
      <input
        type="text"
        name="cuit"
        placeholder="CUIT"
        value={formData.cuit}
        onChange={handleChange}
        required
      />

      <label>Direccion:</label>
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formData.direccion}
        onChange={handleChange}
        required
      />

      <label>Teléfono:</label>
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <button type="submit">{clienteAEditar ? 'Aceptar' : 'Agregar'}</button>
    </form>
  );
}

export default Formulario;
