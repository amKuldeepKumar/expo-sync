import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BackupIcon from "@mui/icons-material/Backup";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useMemo, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { VENDORS_DATA } from "../constants/dataConstant";

const docTypeOptions = [
  { label: "Adhaar", value: "aadharcardimage" },
  { label: "GST", value: "gstinimage" },
];

export const VendorView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [gstFiles, setgstFiles] = useState({});

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [openUploadModal, setOpenUploadModal] = useState(false);

  const [docType, setDocType] = useState(docTypeOptions[0]);
  const [previewFile, setPreviewFile] = useState(null);

  const vendorDetails = useMemo(() => {
    const id = searchParams.get("vendorId");
    const data = VENDORS_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  // const [selection, setSelection] = useState({
  //   aadhar: false,
  //   gstin: false,
  // });

  const [uploadedFiles, setUploadedFiles] = useState({
    aadharcardimage: null,
    gstinimage: null,
  });

  // const handleSelection = (event) => {
  //   const { name, checked } = event.target;
  //   setSelection((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  // };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const docType = event.target.name; // "aadhar" or "gstinimage"

    if (docType === "gstinimage") {
      const readFiles = Array.from(files).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({
              name: file.name,
              data: e.target?.result,
              size: file.size,
              type: file.type,
            });
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readFiles).then((filesArray) => {
        setUploadedFiles((prev) => ({
          ...prev,
          gstinimage: filesArray,
        }));
      });
    } else {
      // Aadhar allows only one file
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles((prev) => ({
          ...prev,
          [docType]: {
            name: file.name,
            data: e.target?.result,
            size: file.size,
            type: file.type,
          },
        }));
      };

      reader.readAsDataURL(file);
    }
  };
  console.log(uploadedFiles);

  const taskColumnsVendors = [
    {
      field: "taskName",
      headerName: "Task Name",
      width: 250,
      editable: false,
    },
    {
      field: "client",
      headerName: "Client",
      width: 190,
      editable: false,
    },
    {
      field: "event",
      headerName: "Event",
      width: 130,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: false,
    },
    {
      field: "allocationDate",
      headerName: "Allocation Date",
      width: 190,
      editable: false,
    },
    {
      field: "deliveryDate",
      headerName: "Delivery Date",
      width: 130,
      editable: false,
    },
  ];

  const employeesColumn = [
    {
      field: "name",
      headerName: "Vendor Name",
      width: 170,
      editable: false,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 130,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
  ];

  const operationalCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Surat",
    "Chandigarh",
    "Gurgaon",
    "Noida",
    "Indore",
    "Nashik",
    "Nagpur",
    "Baramulla",
    "Kulgam",
    "PehalGam",
    "Ghaziabad",
    "Faridabad",
  ];

  console.log(gstFiles);

  const ImageModal = () => {
    return (
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: 24,
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* {/ Title Section with Close Button /} */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid #ddd",
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: 2,
              height: "20px",
            }}
          >
            <Typography fontWeight={600} id="modal-modal-title">
              GSTIN Documents
            </Typography>
            <IconButton onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* {/ Body Content /} */}
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "80vh",
              paddingTop: "10px",
            }}
          >
            {gstFiles?.documents?.map((e, index) => (
              <Card key={index} elevation={5} sx={{ mb: 3, padding: 3 }}>
                <img
                  src={e}
                  height="500px"
                  width="500px"
                  alt="documents"
                  style={{ margin: "10px 0" }}
                />
                <Divider />
                <Grid item md={12} display="flex" justifyContent="center">
                  <Button
                    type="button"
                    className="-gray-text"
                    variant="outlined"
                    onClick={() => {
                      const updatedImages = [...gstFiles.documents];
                      if (updatedImages.length > 1) {
                        updatedImages.splice(index, 1);
                        setgstFiles({ ...gstFiles, documents: updatedImages });
                      }
                    }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </Grid>
              </Card>
            ))}
          </Box>
        </Box>
      </Modal>
    );
  };

  return (
    <>
      <Box>
        <Typography variant="h2" mb={3}>
          Vendor Details
        </Typography>

        <Grid container spacing={2} my={2}>
          <Grid item md={4} sm={4} xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-1"
              label="Name"
              defaultValue={vendorDetails.name}
            />
          </Grid>

          <Grid item md={4} sm={84} xs={12}>
            <TextField
              fullWidth
              multiline
              maxRows={5}
              defaultValue={vendorDetails.address}
              id="outlined-required-2"
              label="Address"
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={vendorDetails.telephone}
              id="outlined-required-2"
              label="Telephone"
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={vendorDetails.email}
              id="outlined-required-2"
              label="Email"
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-2"
              label="Head Office"
              defaultValue={vendorDetails.headOffice}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Autocomplete
              multiple
              options={operationalCities}
              getOptionLabel={(option) => option}
              defaultValue={vendorDetails.operationalCities.map((c) => c.name)}
              renderInput={(params) => (
                <TextField {...params} label="Operational Cities" />
              )}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Autocomplete
              defaultValue={vendorDetails.categories}
              options={["Printing", "Packaging", "Garments"]}
              renderInput={(params) => (
                <TextField {...params} label="Work Category" />
              )}
            />
          </Grid>

          <Grid item md={4} sm={4} xs={12}>
            <Autocomplete
              defaultValue={vendorDetails.workType}
              options={[
                "Shirts Printing",
                "Box Packaging",
                "Garments Manufacturing",
              ]}
              renderInput={(params) => (
                <TextField {...params} label="Work Type" />
              )}
            />
          </Grid>
          <>
            <Grid item md={4} sm={4} xs={12}>
              <Autocomplete
                defaultValue={vendorDetails.workType}
                options={[
                  "Shirts Printing",
                  "Box Packaging",
                  "Garments Manufacturing",
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Work Type" />
                )}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Typography textAlign={"left"}> KYC Documents</Typography>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                id="adharNo"
                label="Aadhar Number"
                type="number"
                name="adharNo"
                defaultValue={vendorDetails.adharNo}
              />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                id="gstNo"
                label="GSTIN Number"
                type="text"
                name="gstNo"
                defaultValue={vendorDetails.gstNo}
              />
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              <Tooltip title="Upload Documents">
                <Button
                  fullWidth
                  sx={{ height: "55px" }}
                  variant="outlined"
                  component="label"
                  onClick={() => setOpenUploadModal(true)}
                >
                  <BackupIcon
                    style={{
                      fontSize: "60px",
                      color: "#bdbdbd",
                      width: "100%",
                    }}
                  />
                </Button>
              </Tooltip>
            </Grid>
            {uploadedFiles?.aadharcardimage && (
              <Grid item md={4} sm={4} xs={12}>
                <Typography textAlign={"left"} mb={1}>
                  Adhaar Document
                </Typography>

                <Box mt={1} display="flex">
                  <Typography
                    variant="body2"
                    mr={1}
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      setPreviewFile(uploadedFiles?.aadharcardimage)
                    }
                  >
                    📄 {uploadedFiles?.aadharcardimage.name} (
                    {(
                      Number(uploadedFiles?.aadharcardimage.size) / 1024
                    ).toFixed(2)}
                    KB)
                  </Typography>
                  <DeleteForeverIcon
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() =>
                      setUploadedFiles({
                        ...uploadedFiles,
                        aadharcardimage: null,
                      })
                    }
                  />
                </Box>
              </Grid>
            )}

            {!!uploadedFiles?.gstinimage?.length && (
              <Grid item md={4} sm={4} xs={12}>
                <Typography textAlign={"left"} mb={1}>
                  GST Documents
                </Typography>

                {uploadedFiles?.gstinimage.map((file, index) => (
                  <Box
                    key={index}
                    mt={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="body2"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setPreviewFile(file)}
                    >
                      📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </Typography>
                    <DeleteForeverIcon
                      onClick={() => {
                        const updatedFiles = uploadedFiles?.gstinimage.filter(
                          (_, i) => i !== index
                        );
                        setUploadedFiles((prev) => ({
                          ...prev,
                          gstinimage: updatedFiles,
                        }));
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </Box>
                ))}
              </Grid>
            )}

            {/* {uploadedFiles?.aadharcardimage && (
              <Grid item md={6} sm={6} xs={12} mt={2}>
                <Grid item md={12} sm={12} xs={12} mt={2}>
                  <Tooltip title="Aadhar Card">
                    <img
                      src={uploadedFiles?.aadharcardimage.data}
                      width={"300px"}
                      style={{ backgroundPosition: "cover" }}
                    />
                    <br></br>
                    <Typography marginLeft={"20px"}>
                      {uploadedFiles?.aadharcardimage.name}
                    </Typography>
                    <Typography marginLeft={"120px"}>
                      <DeleteForeverIcon
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() =>
                          setUploadedFiles({
                            ...uploadedFiles,
                            aadharcardimage: null,
                          })
                        }
                      />
                    </Typography>
                  </Tooltip>
                </Grid>
              </Grid>
            )} */}

            {/* {uploadedFiles?.gstinimage?.length > 0 && (
              <Grid item md={6} sm={6} xs={12} mt={2}>
                {uploadedFiles?.gstinimage.map((file, index) => (
                  <Grid key={index} item md={12} sm={12} xs={12} mt={2}>
                    <Tooltip title="GSTIN Document">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={
                            file.type === "application/pdf"
                              ? "https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_1280.png"
                              : file.data
                          }
                          width="100px"
                          style={{ objectFit: "cover", borderRadius: "5px" }}
                          alt={file.name}
                        />
                        <Typography>{file.name}</Typography>
                      </div>
                    </Tooltip>

                    <Grid
                      item
                      md={12}
                      sm={12}
                      xs={12}
                      mt={2}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <DeleteForeverIcon
                        onClick={() => {
                          const updatedFiles = uploadedFiles?.gstinimage.filter(
                            (_, i) => i !== index
                          );
                          setUploadedFiles((prev) => ({
                            ...prev,
                            gstinimage: updatedFiles,
                          }));
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            )} */}

            <Grid item md={6} sm={6} xs={12}>
              <Tooltip title="Gstin Documents"></Tooltip>
            </Grid>
          </>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained">Save</Button>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid md={12}>
            <Card>
              <Button onClick={toggleCardVisibility}>
                {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
                {!isCardVisible && "Add Employee"}
              </Button>

              <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={4} sm={4} xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-required-1"
                        label="Name"
                      />
                    </Grid>

                    <Grid item md={4} sm={4} xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-required-2"
                        label="Contact"
                      />
                    </Grid>

                    <Grid item md={4} sm={4} xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-required-3"
                        label="Email"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "end" }}
                    >
                      <Button variant="contained">Save</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item md={12} mb={3}>
            <AppDataGrid
              rows={vendorDetails.vendorEmployees}
              columns={employeesColumn}
              pageSize={10}
              label="Employees"
              pageSizeOptions={[5, 10, 20]}
              showAction={true}
            />
          </Grid>
          <Grid item md={12}>
            <AppDataGrid
              commentIcon
              rows={vendorDetails.tasks}
              columns={taskColumnsVendors}
              pageSize={10}
              label="Activities Allocated"
              pageSizeOptions={[5, 10, 20]}
              showAction={true}
              onRowClick={(row) =>
                navigate({
                  pathname: "/sub-activity-details",
                  search: createSearchParams({
                    taskId: row.id,
                  }).toString(),
                })
              }
            />
          </Grid>
        </Grid>
      </Box>
      {ImageModal()}

      <Modal
        open={Boolean(openUploadModal)}
        onClose={() => setOpenUploadModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            minWidth: "350px",
          }}
        >
          <Typography>Upload KYC Documents</Typography>
          <Grid container spacing={2} my={2}>
            <Grid item md={docType ? 6 : 12} sm={docType ? 6 : 12} xs={12}>
              <Autocomplete
                options={docTypeOptions}
                value={docType}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Document Type" />
                )}
                onChange={(_e, value) => {
                  setDocType(value);
                }}
              />
            </Grid>
            {/* {/ Aadhar Section /} */}
            {docType && (
              <Grid item md={6} sm={6} xs={12}>
                {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={selection.aadhar}
                    onChange={handleSelection}
                    name="aadhar"
                    disabled={uploadedFiles?.aadharcardimage !== null} // Disable after file upload
                  />
                }
                label="Aadhar Card"
              /> */}
                {docType && docType?.value === "aadharcardimage" ? (
                  <TextField
                    type="file"
                    inputProps={{ accept: ".png, .jpg, .jpeg" }}
                    fullWidth
                    name="aadharcardimage"
                    disabled={uploadedFiles?.aadharcardimage !== null} // Disable after file upload
                    onChange={(e) => handleFileUpload(e, "aadharcardimage")}
                  />
                ) : (
                  <TextField
                    type="file"
                    fullWidth
                    inputProps={{
                      accept: ".pdf, .png, .jpg, .jpeg",
                      multiple: true, // Allow multiple files
                    }}
                    name="gstinimage"
                    onChange={(e) => handleFileUpload(e, "gstinimage")}
                  />
                )}
              </Grid>
            )}
            <Grid item md={6} sm={6} xs={12}>
              {/* {/ Display Aadhar File Details /} */}
              {docType && docType?.value === "aadharcardimage"
                ? uploadedFiles?.aadharcardimage && (
                    <Box mt={1} display="flex">
                      <Typography variant="body2" mr={1}>
                        📄 {uploadedFiles?.aadharcardimage.name} (
                        {(
                          Number(uploadedFiles?.aadharcardimage.size) / 1024
                        ).toFixed(2)}
                        KB)
                      </Typography>
                      <DeleteForeverIcon
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() =>
                          setUploadedFiles({
                            ...uploadedFiles,
                            aadharcardimage: null,
                          })
                        }
                      />
                    </Box>
                  )
                : docType &&
                  uploadedFiles?.gstinimage?.length > 0 &&
                  uploadedFiles?.gstinimage.map((file, index) => (
                    <Box
                      key={index}
                      mt={1}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Typography variant="body2">
                        📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </Typography>
                      <DeleteForeverIcon
                        onClick={() => {
                          const updatedFiles = uploadedFiles?.gstinimage.filter(
                            (_, i) => i !== index
                          );
                          setUploadedFiles((prev) => ({
                            ...prev,
                            gstinimage: updatedFiles,
                          }));
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </Box>
                  ))}
            </Grid>

            {/* {/ GSTIN Section /} */}
            {/* <Grid item md={6} sm={6} xs={12}> */}
            {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      uploadedFiles?.aadharcardimage?.data ? true : false
                    }
                    onChange={handleSelection}
                    name="gstin"
                    disabled={
                      !uploadedFiles?.aadharcardimage ||
                      uploadedFiles?.gstinimage?.length > 0 || // Disable after upload
                      !selection.gstin
                    }
                  />
                }
                label="GSTIN Document"
              /> */}
            {/* <TextField
                type="file"
                fullWidth
                inputProps={{
                  accept: ".pdf, .png, .jpg, .jpeg",
                  multiple: true, // Allow multiple files
                }}
                name="gstinimage"
                disabled={
                  uploadedFiles?.gstinimage?.length > 1 ||
                  !uploadedFiles?.aadharcardimage
                }
                onChange={(e) => handleFileUpload(e, "gstinimage")}
              /> */}

            {/* {/ Display GSTIN File Details /} */}
            {/* {uploadedFiles?.gstinimage?.length > 0 &&
                uploadedFiles?.gstinimage.map((file, index) => (
                  <Box
                    key={index}
                    mt={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography variant="body2">
                      📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </Typography>
                    <DeleteForeverIcon
                      onClick={() => {
                        const updatedFiles = uploadedFiles?.gstinimage.filter(
                          (_, i) => i !== index
                        );
                        setUploadedFiles((prev) => ({
                          ...prev,
                          gstinimage: updatedFiles,
                        }));
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </Box>
                ))} */}
            {/* </Grid> */}
          </Grid>

          <Typography textAlign="right">
            <Button
              variant="contained"
              onClick={() => setOpenUploadModal(false)}
            >
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>

      {previewFile && (
        <Dialog
          fullScreen
          open={!!previewFile}
          sx={{
            "& .MuiPaper-root": {
              background: "grey",
            },
          }}
        >
          <Box p={2} pt={0}>
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              sx={{ position: "sticky", right: "20px", top: "20px" }}
            >
              <IconButton onClick={() => setPreviewFile(null)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={
                  previewFile.type === "application/pdf"
                    ? "https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_1280.png"
                    : previewFile?.data
                }
                width="50%"
              />
            </Box>
          </Box>
        </Dialog>
      )}
    </>
  );
};
