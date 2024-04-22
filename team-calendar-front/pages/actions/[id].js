import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, {Fragment, useEffect, useState} from "react";
import {registerPlugin} from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import {useRouter} from "next/router";
import {editAction, getAction,} from "@/shared/services/actionApis";
import {getAllUsers} from "@/shared/services/userApis";
import {getAllActionTypes,} from "@/shared/services/actionTypeApis";

const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const EditAction = () => {
  const [files, setFiles] = useState([]);
  const [files1, setFiles1] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => {
    // Ensure date is defined before setting it
    if (date) {
      setStartDate(date);
    }
  };

  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const [user, setUser] = useState(1);
  const [actionType, setActionType] = useState(1);

  const [users, setUsers] = useState([{}]);
  const [actionTypes, setActionTypes] = useState([{}]);

  const navigate = useRouter();
  const { id } = navigate.query;

  const getActionById = () => {
    getAction(id).then(
      (response) => {
        setUser(response.data.user.id);
        setActionType(response.data.type.id);
        setDate(new Date(response.data.date).toISOString().substr(0, 10));
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  function getUsers() {
    getAllUsers().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }

  function getActionTypes() {
    getAllActionTypes().then(
      (response) => {
        setActionTypes(response.data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }

  const editActionById = (e) => {
    e.preventDefault();
    const data = {
      id_user: user,
      id_type: actionType,
      date: date,
    };

    editAction(id, data).then(
      (response) => {
        console.log(response);
        navigate.push("/actions");
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  useEffect(() => {
    getActionById();
    getUsers();
    getActionTypes();
  }, []);

  return (
    <Fragment>
      <Seo title={"Add a new action"} />
      <Pageheader
        currentpage="Add a new action"
        activepage="Actions"
        mainpage="Add an actoin"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12  col-span-12">
          <div className="box">
            <form onSubmit={editActionById}>
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
EditAction.layout = "Contentlayout";

export default EditAction;
