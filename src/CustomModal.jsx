import React, { useState } from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Modal
      </Button>

      {open && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-96 mx-2 rounded-lg relative">
            <CloseIcon
              onClick={handleClose}
              className=" font-extrabold absolute top-2 right-2 cursor-pointer text-gray-500"
            />

            {/* Modal content goes here */}
            
            <div className="flex flex-col items-center mb-6">
              <button className="w-24 h-24 rounded-full border ring ring-red-300 animate-pulse ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="red"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="94"
                  height="94"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <h2 className="text-xl text-center mb-2 font-bold">
              Product from vedrisi already in the cart.
            </h2>
            <p className="text-center mb-2 text-gray-500">
              You can select products from one vendor at a time.
            </p>
            <p className="text-center mb-6 text-gray-500">
              Click below to clear the cart or continue with the added products.
            </p>

            <div className="flex justify-center">
              <Button
                variant="outlined"
                onClick={handleClose}
                style={{ marginRight: "0.5rem" }}
              >
                Clear Cart
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ marginLeft: "0.5rem" }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
