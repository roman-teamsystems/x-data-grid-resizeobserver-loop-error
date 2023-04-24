import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "XGrid", col2: "is Awesome" },
  { id: 6, col1: "Material-UI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "id" },
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

export default function App() {
  return (
    <div>
      {/** add another DataGrid in dev mode to see ResizeObserver loop warning error popover */}
      <DataGrid rows={rows} columns={columns} />
      <DataGrid rows={rows} columns={columns} />
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
