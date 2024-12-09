import { useState } from "react";
import LoginModal from "./LoginModal";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useRoomStore } from "../store/useRoomStore";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { logout, authUser } = useAuthStore();
  const { leaveRoom } = useRoomStore();
  const navigate = useNavigate();

  // logout
  const onLogoutClick = () => {
    logout();
    leaveRoom();
    navigate("/");
  };

  const onLogoClick = () => {
    leaveRoom();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center py-5 px-2 md:px-8">
      <div className="font-russo_one cursor-pointer" onClick={onLogoClick}>
        Kawaii Logo
      </div>
      <nav>
        {authUser ? (
          <button onClick={onLogoutClick} className="text-md font-semibold">
            LOG OUT
          </button>
        ) : (
          <button onClick={openModal} className="text-md font-semibold">
            LOG IN
          </button>
        )}
      </nav>
      {isModalOpen && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
