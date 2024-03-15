import {
  DataGridProps,
  GridAlignment,
  GridColDef,
  GridValidRowModel,
} from "@mui/x-data-grid";

export interface ICDataTableProps extends DataGridProps {
  emptyHeight?: number;
  emptyText?: string;
}

export interface ICDataTableColumns<R extends GridValidRowModel = any>
  extends Omit<GridColDef<R>, "align" | "headerAlign"> {
  align?: GridAlignment;
}
