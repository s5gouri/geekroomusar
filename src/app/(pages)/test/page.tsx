"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function Page() {
  return (
    <div>
      <CldUploadWidget
        uploadPreset="just trying"
        onSuccess={(results) => {
          console.log("Uploaded Image URL:", results);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()}>Upload an Image</button>
        )}
      </CldUploadWidget>
    </div>
  );
}
