"use client";

import { AttachMoney, Female, Male } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { GridRowsProp, GridValueFormatterParams } from "@mui/x-data-grid";

import { CDataTable } from "@/common/others";
import { ICDataTableColumns } from "@/common/others/CDataTable/types";

import { data } from "./mock";

export type IUser = {
  id: number | string;
  name: string;
  major: string;
  address: string;
  gender: boolean;
  salary: number;
};

export const MDataTable = () => {
  //#region Data
  const columns: ICDataTableColumns<IUser>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      maxWidth: 70,
      align: "center",
    },
    { field: "name", headerName: "Tên", flex: 1, minWidth: 150 },
    { field: "major", headerName: "Chuyên ngành", flex: 1, minWidth: 150 },
    {
      field: "salary",
      headerName: "Lương",
      flex: 1,
      minWidth: 150,
      align: "center",
      valueFormatter(params: GridValueFormatterParams<number>) {
        return params.value.toLocaleString();
      },
      renderCell(params) {
        return (
          <Typography
            display="flex"
            alignItems="center"
            fontFamily="var(--font-protest-riot)"
            color="#888888"
          >
            {params.formattedValue}
            <AttachMoney htmlColor="#00d800" />
          </Typography>
        );
      },
    },
    {
      field: "gender",
      headerName: "Giới tính",
      flex: 1,
      minWidth: 150,
      align: "center",
      renderCell(params) {
        return (
          <Typography display="flex" alignItems="center">
            {params.value ? (
              <>
                Nam
                <Male htmlColor="#4da8ff" />
              </>
            ) : (
              <>
                Nữ
                <Female htmlColor="#ff7b92" />
              </>
            )}
          </Typography>
        );
      },
    },
    { field: "address", headerName: "Địa chỉ", flex: 1, minWidth: 150 },
  ];

  const rows: GridRowsProp<IUser> = data;
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Stack mb={20}>
      <CDataTable columns={columns} rows={rows} />
    </Stack>
  );
  //#endregion
};
