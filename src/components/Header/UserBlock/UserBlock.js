import { useState } from 'react';
import { theme } from 'constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import { selectUserName } from 'redux/auth/authSelectors';

import userDark from '../../../images/user-dark.svg';
import userLight from '../../..//images/user-light.svg';
import userViolet from '../../../images/user-violet.svg';
import EditProfileModal from 'components/Modals/EditProfileModal/EditProfileModal';
import BasicModal from 'components/Modals/BasicModal/BasicModal';

import { UserAvatar, UserName, Wrapper } from './UserBlock.styled';

const UserBlock = () => {
  const [open, setOpen] = useState(false);
  const activeTheme = useSelector(selectTheme);
  const userName = useSelector(selectUserName);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const setDefaultAvatar = () => {
    if (theme[activeTheme].name === 'Dark') {
      return userDark;
    } else if (theme[activeTheme].name === 'Light') {
      return userLight;
    } else if (theme[activeTheme].name === 'Violet') {
      return userViolet;
    }
  };

  return (
    <>
      <Wrapper>
        <UserName>{userName}</UserName>

        <UserAvatar
          src={
            // user.avatar ||
            setDefaultAvatar()
          }
          alt="user name"
          onClick={handleOpen}
        />
      </Wrapper>
      <BasicModal
        name="EditProfile"
        open={open}
        closeModal={handleClose}
        children={<EditProfileModal closeModal={handleClose} />}
      />
    </>
  );
};

export default UserBlock;
