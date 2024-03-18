import satData from "./satData";

const Table = ({ sat }) => {

const tableName = sat.map(data => {
  return <div key={data.id}>
    <td>{data.name}</td>
  </div>
})

const satType = sat.map(data => {
  return <div key={data.id}>
    <td>{data.type}</td>
  </div>
})

const launchDate = sat.map(data => {
  return <div key={data.id}>
    <td>{data.launchDate}</td>
  </div>
})


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
     <tr>
      {tableName}
      {satType}
      {launchDate}
     </tr>
     </tbody>
   </table>
  );
};

export default Table;