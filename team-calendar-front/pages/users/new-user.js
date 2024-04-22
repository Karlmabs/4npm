import {Addproduct} from "@/shared/data/ecommerce/addproductsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, {Fragment, useState} from "react";
import {registerPlugin} from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import {register} from "@/shared/services/AuthApis";
import {useRouter} from "next/router";

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

  let navigate = useRouter();

  const addUser = (e) => {
    e.preventDefault();
    console.log(name, email, username, password);
    register({
      name,
      mail: email,
      username,
      password,
    }).then(
      (response) => {
        if (response.status === 201) {
          console.log(response.data);
          navigate.push("/users");
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
        currentpage="Register a new user"
        activepage="Users"
        mainpage="Add a user"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12  col-span-12">
          <div className="box">
            <form onSubmit={addUser}>
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
                          <Select
                            id="product-category-add"
                            name="product-category-add"
                            options={Addproduct}
                            className="w-full !rounded-md"
                            isSearchable
                            menuPlacement="auto"
                            classNamePrefix="Select2"
                            placeholder="Category"
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="product-name-add"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control w-full !rounded-md"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
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
                    Add User<i className="bi bi-plus-lg ms-2"></i>
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
