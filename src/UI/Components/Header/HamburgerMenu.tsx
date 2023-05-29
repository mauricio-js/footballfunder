import React from "react";
import { Search } from "UI/Components";

import { HamburgerSignInButton } from "UI/Components/Header/HamburgerSignInButton";
import { HamburgerList } from "UI/Components/Header/HamburgerList";
import HeaderMenuLogo from "Assets/images/svg/logo/hamburger-menu-logo.svg";
import WhiteCloseIcon from "Assets/images/svg/button/close-icon-white.svg";

type hamburgerMenuProps = {
  isShowMobielMenu: () => void;
};

export const HamburgerMenu: React.FC<hamburgerMenuProps> = ({
  isShowMobielMenu,
}) => {
  return (
    <div>
      <div className="w-full bg-green-70">
        <div className="ns:w-[430px] mx-auto p-5">
          <div className="flex flex-row justify-between">
            <img src={HeaderMenuLogo} alt="Hamburger-logo" />
            <button onClick={isShowMobielMenu}>
              <img src={WhiteCloseIcon} alt="close-button" />
            </button>
          </div>
          <div className="mt-[30px]">
            <Search />
          </div>
          {/* Part - Sign in / Sign Up Button */}
          <div className="mt-[15px]">
            <HamburgerSignInButton />
          </div>
          {/* Part -  Hamburger List */}
          <div className="mt-[30px]">
            <HamburgerList />
          </div>
        </div>
      </div>
    </div>
  );
};