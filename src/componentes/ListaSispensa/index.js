import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item, index) => {
          return (
            <option required={props.obrigatorio} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
