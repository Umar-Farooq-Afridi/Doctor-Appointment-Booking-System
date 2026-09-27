import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to={"/admin-dashboard"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.home_icon} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink
            to={"/all-appointments"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.appointment_icon} />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to={"/add-doctor"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.add_icon} />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink
            to={"/doctor-list"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.people_icon} />
            <p className="hidden md:block">Doctor List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to={"/doctor-dashboard"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.home_icon} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink
            to={"/doctor-appointments"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.appointment_icon} />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to={"/doctor-profile"}
            className={({
              isActive,
            }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w72 cursor-pointer 
            ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
          >
            <img src={assets.people_icon} />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
