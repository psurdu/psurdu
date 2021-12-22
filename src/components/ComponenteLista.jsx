import { React, useState } from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {
  const [done, setDone] = useState(props.done);
  let claseLista = '';
  setElementClass();
  function setElementClass() {
    claseLista = props.prioridad;
    if (done) {
      claseLista += ' el-done';
    } else {
      claseLista += ' el-undone';
    }
  }

  function setTaskStatus() {
    setDone(!done);
    setElementClass();
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" defaultChecked={done} onChange={changeStatus} />
      {props.texto}
    </li>
  );
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
  done: false,
};
