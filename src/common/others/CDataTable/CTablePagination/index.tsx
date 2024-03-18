import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import {
  gridPageCountSelector,
  gridPaginationModelSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { CSize } from "./CSize";

export const CTablePagination = () => {
  //#region Data
  const gridApiRef = useGridApiContext();
  const pagination = useGridSelector(gridApiRef, gridPaginationModelSelector);
  const pages = useGridSelector(gridApiRef, gridPageCountSelector);
  const total = useGridSelector(gridApiRef, gridRowCountSelector);
  //#endregion

  //#region Event
  const onPrev = () => {
    gridApiRef.current.setPage(pagination.page - 1);
  };

  const onNext = () => {
    gridApiRef.current.setPage(pagination.page + 1);
  };
  //#endregion

  //#region Render
  return (
    <Stack direction="row" gap="10px" alignItems="center" mr={1}>
      <Typography>{`Total: ${total}`}</Typography>

      <CSize />

      <Typography>{`Page: ${pagination.page + 1}`}</Typography>

      <Stack direction="row">
        <IconButton
          size="small"
          disabled={pagination.page === 0}
          onClick={onPrev}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          size="small"
          disabled={pagination.page + 1 === pages}
          onClick={onNext}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Stack>
    </Stack>
  );
  //#endregion
};
