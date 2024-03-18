"use client";

import { useMemo } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import classNames from "classnames";

import { CEmptyRow } from "./CEmptyRow";
import { CTablePagination } from "./CTablePagination";
import { ICDataTableProps } from "./types";

import "./styles.scss";

export const CDataTable: React.FC<ICDataTableProps> = ({
  columns,
  rows,
  autoHeight = true,
  emptyHeight = 300,
  emptyText,
  disableColumnMenu = true,
  disableRowSelectionOnClick = true,
  loading,
  slots,
  sx,
  ...props
}) => {
  //#region Data
  // const gridApiRef = useGridApiRef();

  const _columns = useMemo<GridColDef[]>(() => {
    return columns.map((col) => ({
      ...col,
      headerAlign: col?.align,
    }));
  }, [columns]);
  //#endregion

  //#region Render
  return (
    <DataGrid
      // apiRef={gridApiRef}
      loading={loading}
      className={classNames("c-datatable")}
      autoHeight={autoHeight}
      columns={_columns}
      rows={rows}
      disableColumnMenu={disableColumnMenu}
      disableRowSelectionOnClick={disableRowSelectionOnClick}
      initialState={{
        pagination: {
          paginationModel: {
            page: 0,
            pageSize: 10,
          },
        },
      }}
      slots={{
        noRowsOverlay: () => <CEmptyRow emptyText={emptyText} />,
        pagination: CTablePagination,
        ...slots,
      }}
      sx={{ "--DataGrid-overlayHeight": `${emptyHeight}px`, ...sx }}
      {...props}
    />
  );
  //#endregion
};
