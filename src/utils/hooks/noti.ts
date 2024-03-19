import { enqueueSnackbar } from "notistack";

export const useNoti = () => {
  const noti = {
    success: (message: string) => {
      enqueueSnackbar(message, { variant: "success" });
    },
    error: (message: string) => {
      enqueueSnackbar(message, { variant: "error" });
    },
  };
  return { noti };
};
