import { UploadButton } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

export function ImageUploader() {
  return (
    <UploadButton
      className="poppins"
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
