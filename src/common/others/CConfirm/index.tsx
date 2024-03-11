import { useCallback } from "react";
import { confirmable, ConfirmDialog as ConfirmType } from "react-confirm";

import { ErrorOutline } from "@mui/icons-material";
import { Paper, Stack, Typography, Zoom } from "@mui/material";

import { ConfirmButton, ConfirmDialog } from "./StyledComponent";
import { ICConfirm } from "./types";

import "./styles.scss";

const CConfirm: ConfirmType<ICConfirm, any> = ({
  show,
  proceed,
  title,
  content,
  cancelText,
  okText,
}) => {
  //#region Data
  //#endregion

  //#region Event
  const onClose = useCallback(() => {
    proceed(false);
  }, [proceed]);

  const onAccept = useCallback(() => {
    proceed(true);
  }, [proceed]);
  //#endregion

  //#region Render
  return (
    <ConfirmDialog
      className="c-confirm-dialog"
      open={show}
      onClose={onClose}
      TransitionComponent={Zoom}
    >
      <Paper>
        <Stack p={3} alignItems="center" spacing={2}>
          <ErrorOutline className="dialog-icon" />

          <Typography
            fontSize={24}
            fontFamily="var(--font-raleway)"
            fontWeight={600}
            className="dialog-title"
          >
            {title ? title : "Confirm?"}
          </Typography>

          <Typography className="dialog-content">
            {content ? content : "Are you sure to do this action?"}
          </Typography>

          <Stack direction="row" alignItems="center" gap={2}>
            <ConfirmButton
              variant="outlined"
              className="cancel-button"
              onClick={onClose}
            >
              {cancelText ? cancelText : "Cancel"}
            </ConfirmButton>
            <ConfirmButton
              variant="contained"
              className="accept-button"
              onClick={onAccept}
            >
              {okText ? okText : "OK"}
            </ConfirmButton>
          </Stack>
        </Stack>
      </Paper>
    </ConfirmDialog>
  );
  //#endregion
};

export default confirmable(CConfirm);
