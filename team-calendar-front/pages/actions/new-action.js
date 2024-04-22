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
import { createAction } from "@/shared/services/actionApis";
import { getAllUsers } from "@/shared/services/userApis";
import { getAllActionTypes } from "@/shared/services/actionTypeApis";

const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const NewUser = () => {
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
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const [user, setUser] = useState(1);
  const [actionType, setActionType] = useState(1);

  const [users, setUsers] = useState([{}]);
  const [actionTypes, setActionTypes] = useState([{}]);

  let navigate = useRouter();

  const getUsers = () => {
    getAllUsers().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  const getActionTypes = () => {
    getAllActionTypes().then(
      (response) => {
        setActionTypes(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  useEffect(() => {
    getUsers();
    getActionTypes();
  }, []);

  const newAction = (e) => {
    e.preventDefault();
    console.log(name, email, username, password);
    createAction({
      id_user: user,
      id_type: actionType,
      date,
    }).then(
      (response) => {
        if (response.status === 201) {
          console.log(response.data);
          navigate.push("/actions");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Fragment>
      <Seo title={"Register a new user"} />
      <Pageheader
        currentpage="Add a new action"
        activepage="Actions"
        mainpage="Add an actoin"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12  col-span-12">
          <div className="box">
            <form onSubmit={newAction}>
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
                            User
                          </label>
                          <select
                            className="form-control w-full !rounded-md"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                          >
                            {users.map((user) => (
                              <option value={user.id}>{user.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-span-12">
                        <label
                          htmlFor="product-name-add"
                          className="form-label"
                        >
                          Action type
                        </label>
                        <select
                          className="form-control w-full !rounded-md"
                          value={actionType}
                          onChange={(e) => setActionType(e.target.value)}
                          required
                        >
                          {actionTypes.map((type) => (
                            <option value={type.id}>{type.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                          <label
                            htmlFor="product-actual-price"
                            className="form-label"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            className="form-control w-full !rounded-md"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="email"
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
                    Add Action<i className="bi bi-plus-lg ms-2"></i>
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
NewUser.layout = "Contentlayout";

export default NewUser;
