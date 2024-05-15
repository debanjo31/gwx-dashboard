import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="shadow z-10">
      <div className="w-5/6 mx-auto flex justify-between p-2">
        <div></div>
        <h3 className="text-[#F39C12] font-bold">GWX DASHBOARD</h3>
        <div className="">
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="text-white bg-[#F39C12] py-1 px-4 rounded-lg inline-flex cursor-pointer">
                User
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 mt-[0.5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            )}
          >
            <div className="py-6 px-12">
              <Dropdown.Item>
                <Link to={"/customer"}>Customer</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/manager"}>Manager</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/super-admin"}>Super Admin</Link>
              </Dropdown.Item>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
