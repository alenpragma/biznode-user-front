import Cookies from "js-cookie";

export const handleLogout = async () => {
    Cookies.remove("biznode_token");
    localStorage.removeItem("user-storage");
    window.location.reload();
    window.location.href = "/";
};
