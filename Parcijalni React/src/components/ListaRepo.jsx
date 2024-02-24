const ListaRepo = ({ repo }) => {
  return (
    <div className="lista-repozitorija">
      {repo.map((repozitorij) => (
        <p key={repozitorij.id} className="repozitorij">
          {repozitorij.name}
        </p>
      ))}
    </div>
  );
};

export default ListaRepo;
