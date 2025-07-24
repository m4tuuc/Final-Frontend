import { useState } from 'react';
import Formulario from '../components/Formulario';
import Tabla from '../components/Tabla';
import './App.css';

function App() {
  //lista de clientes
  const [clientes, setClientes] = useState([]);
  const [clienteAEditar, setClienteAEditar] = useState(null);
  const agregarCliente = (cliente) => {
    setClientes([...clientes, { ...cliente, id: Date.now() }]);
  };

  const actualizarCliente = (clienteActualizado) => {
    setClientes(
      clientes.map((cliente) =>
        cliente.id === clienteActualizado.id ? clienteActualizado : cliente
      )
    );
    setClienteAEditar(null);
  };

 
  const eliminarCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Banco</h1>
      <p>Esta aplicacion web permitira crear una cuenta para un cliente de banco.</p>
      <div className="main-content">
        <div className="form-section">
          <h2>Formulario</h2>
          <Formulario
            agregarCliente={agregarCliente}
            actualizarCliente={actualizarCliente}
            clienteAEditar={clienteAEditar}
            setClienteAEditar={setClienteAEditar}
          />
        </div>
        <div className="table-section">
          <h2>Clientes</h2>
          <Tabla
            clientes={clientes}
            setClienteAEditar={setClienteAEditar}
            eliminarCliente={eliminarCliente}
          />
        </div>
      </div>
    </div>
  );
}

export default App;