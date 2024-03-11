import { faGear, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Notifications } from "@mui/icons-material";
import { Avatar, ButtonBase, IconButton, Stack } from "@mui/material";

import { AVATAR_IMAGES } from "@/common/constants/options";

export const CToolbar = () => {
  return (
    <Stack direction="row" alignItems="center" gap={1.25}>
      <IconButton>
        <Notifications />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon width={24} icon={faUsers} />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon width={24} spin icon={faGear} />
      </IconButton>
      <ButtonBase
        sx={{
          borderRadius: "50%",
          background: "rgb(168 168 168 / 15%)",
          padding: "2px",
        }}
      >
        <Avatar
          variant="circular"
          sx={{ border: "2px solid white", height: 36, width: 36 }}
        >
          <img src={AVATAR_IMAGES[9]} alt="" />
        </Avatar>
      </ButtonBase>
    </Stack>
  );
};
