import "./Grid.scss";
const Grid = ({ columns, data }) => {
  const TableHeader = () => {
    return columns?.map((item, index) => (
      <th key={index} className="G-header" style={{ width: `${item.width}` }}>
        {item.title}
      </th>
    ));
  };

  const TableRows = () => {
    return data?.map((row, index) => (
      <tr key={index}>
        {columns?.map((column, ind) => (
          <td key={ind} style={{ width: `${column.width}` }}>
            {row[column.field]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="Grid">
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
