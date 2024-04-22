import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "@/shared/services/userApis";

const Index = () => {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setListData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (idToRemove) => {
    deleteUser(idToRemove).then(
      (response) => {
        console.log(response);
        navigate.reload();
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  };

  let navigate = useRouter();

  const RouteChange = () => {
    let path = "/users/new-user";
    navigate.push(path);
  };

  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // Create a state variable to track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle the "Select All" checkbox click event
  const handleSelectAllClick = () => {
    setSelectAllChecked(!selectAllChecked);

    // Update the state of individual checkboxes in the tbody
    if (selectAllChecked) {
      setSelectedItems([]);
    } else {
      const allIds = ListData.map((item) => item.id);
      setSelectedItems(allIds);
    }
  };

  // Function to handle individual checkbox clicks
  const handleCheckboxClick = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }

    // Check if all individual checkboxes are selected and update the "Select All" checkbox accordingly
    const allSelected = selectedItems.length === ListData.length;
    setSelectAllChecked(allSelected);
  };

  return (
    <Fragment>
      <Seo title={"Users List"} />
      <Pageheader
        currentpage="Users List"
        activepage="Users"
        mainpage="Users List"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Users List</div>
            </div>
            <div className="box-body">
              <div className="sm:flex items-center justify-end flex-wrap">
                <button
                  type="button"
                  onClick={RouteChange}
                  className="ti-btn bg-blue text-white !font-medium m-1"
                >
                  New User
                </button>
              </div>
              <div className="table-responsive mb-4">
                <table className="table whitespace-nowrap table-bordered min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="!text-start">
                        <input
                          className="form-check-input check-all"
                          onChange={handleSelectAllClick}
                          checked={selectAllChecked}
                          type="checkbox"
                          id="all-products"
                          value=""
                          aria-label="..."
                        />
                      </th>
                      <th scope="col" className="!text-start">
                        Name
                      </th>
                      <th scope="col" className="text-start">
                        Username
                      </th>
                      <th scope="col" className="text-start">
                        Email
                      </th>
                      <th scope="col" className="text-start">
                        Role
                      </th>
                      <th scope="col" className="text-start">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ListData.map((idx) => (
                      <tr className="product-list" key={Math.random()}>
                        <td className="product-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={idx.id.toString()}
                            value=""
                            aria-label="..."
                            onChange={() => handleCheckboxClick(idx.id)}
                            checked={selectedItems.includes(idx.id)}
                          />
                        </td>
                        <td>{idx?.name}</td>
                        <td>{idx?.username}</td>
                        <td>{idx?.email}</td>
                        <td>{idx?.role.name}</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                            <Link
                              aria-label="anchor"
                              href={`/users/${idx.id}`}
                              className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                            >
                              <i className="ri-pencil-line"></i>
                            </Link>
                            <Link
                              aria-label="anchor"
                              href="#!"
                              onClick={() => handleDelete(idx.id)}
                              className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="sm:flex items-center justify-between flex-wrap">
                {/*<nav aria-label="Page navigation" className="">
                  <ul className="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
                    <li className="page-item disabled">
                      <Link
                        className="page-link !py-[0.375rem] !px-[0.75rem]"
                        href="#!"
                      >
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link
                        className="page-link !py-[0.375rem] !px-[0.75rem]"
                        href="#!"
                      >
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link !py-[0.375rem] !px-[0.75rem]"
                        href="#!"
                      >
                        2
                      </Link>
                    </li>
                    <li className="page-item sm:block hidden ">
                      <Link
                        className="page-link !py-[0.375rem] !px-[0.75rem]"
                        href="#!"
                      >
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]"
                        href="#!"
                      >
                        next
                      </Link>
                    </li>
                  </ul>
                </nav>*/}
                {/*<button
                  type="button"
                  className="ti-btn bg-danger text-white !font-medium m-1"
                >
                  Delete All
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Index.layout = "Contentlayout";

export default Index;
