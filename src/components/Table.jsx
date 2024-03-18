import satData from "./satData";
import styling from './styling.css';

const Table = ({ sat }) => {
  const tableName = sat.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.name}</td>
      </tr>
    );
  });

  const satType = sat.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.type}</td>
      </tr>
    );
  });

  const launchDate = sat.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.launchDate}</td>
      </tr>
    );
  });

  const satStatus = sat.map((data) =>
    data.operational === false ? (
      <tr key={data.id}>
        <td>Inactive</td>
      </tr>
    ) : (
      <tr key={data.id}>
        <td>Active</td>
      </tr>
    )
  );


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <td>{tableName}</td>
        <td>{satType}</td>
        <td>{launchDate}</td>
        <td>{satStatus}</td>
      </tbody>
    </table>
  );
};

export default Table;
