import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, {Fragment, useState} from "react";
import {registerPlugin} from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import {useRouter} from "next/router";
import {createActionType} from "@/shared/services/actionTypeApis";

const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const NewActionType = () => {
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

  const addActionType = (e) => {
    e.preventDefault();
    console.log(name, email, username, password);
    createActionType({
      name,
    }).then(
      (response) => {
        if (response.status === 201) {
          console.log(response.data);
          navigate.push("/action-types");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Fragment>
      <Seo title={"Add a new action type"} />
      <Pageheader
        currentpage="Add a new action type"
        activepage="Action Types"
        mainpage="Add an action type"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12  col-span-12">
          <div className="box">
            <form onSubmit={addActionType}>
              <div className="box-body add-products !p-0">
                <div className="p-6">
                  <div className="grid grid-cols-6 md:gap-x-[3rem] gap-0">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                  <button
                    type="submit"
                    className="ti-btn ti-btn-primary !font-medium m-1"
                  >
                    Add action type<i className="bi bi-plus-lg ms-2"></i>
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
NewActionType.layout = "Contentlayout";

export default NewActionType;
