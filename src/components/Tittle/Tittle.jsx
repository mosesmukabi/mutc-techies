import "./Tittle.css";

function Tittle({ mainTittle }) {
  return (
    <div className="Tittle">
      <h1 className="Tittle__main">{mainTittle}</h1>
    </div>
  );
}

export default Tittle;
