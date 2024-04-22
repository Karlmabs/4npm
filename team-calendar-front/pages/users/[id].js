import { Addproduct } from "@/shared/data/ecommerce/addproductsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useState } from "react";
import { registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import { register } from "@/shared/services/AuthApis";
import { useRouter } from "next/router";
import { editUser, getUser } from "@/shared/services/userApis";
import { getAllRoles } from "@/shared/services/roleApis";

const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const EditUser = () => {
  const [files, setFiles] = useState([]);
  const [files1, setFiles1] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => {
    // Ensure date is defined before setting it
    if (date) {
      setStartDate(date);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);

  const [roles, setRoles] = useState([{}]);

  const navigate = useRouter();
  const { id } = navigate.query;

  const getUserById = () => {
    console.log(name, email, username, password);

    getUser(id).then(
      (response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role.id);
        setUsername(response.data.username);
        setPassword(response.data.password);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  const getRoles = () => {
    getAllRoles().then(
      (response) => {
        setRoles(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  const editUserById = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      role: role,
      password: password,
      username: username,
    };

    editUser(id, data).then(
      (response) => {
        console.log(response);
        navigate.push("/users");
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  useEffect(() => {
    getRoles();
    getUserById();
  }, []);

  return (
    <Fragment>
      <Seo title={"Edit user"} />
      <Pageheader
        currentpage="Edit user"
        activepage="Users"
        mainpage="Edit user"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12  col-span-12">
          <div className="box">
            <form onSubmit={editUserById}>
              <div className="box-body add-products !p-0">
                <div className="p-6">
                  <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                          <label
                            htmlFor="product-name-add"
                            className="form-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control w-full !rounded-md"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="product-category-add"
                            className="form-label"
                          >
                            Role
                          </label>
                          <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full !rounded-md"
                          >
                            {roles.map((role) => (
                              <option key={role.id} value={role.id}>
                                {role.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                          <label
                            htmlFor="product-actual-price"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control w-full !rounded-md"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            required
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="product-actual-price"
                            className="form-label"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control w-full !rounded-md"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                  <button
                    type="submit"
                    className="ti-btn ti-btn-primary !font-medium m-1"
                  >
                    Edit User<i className="bi bi-plus-lg ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
EditUser.layout = "Contentlayout";

export default EditUser;
