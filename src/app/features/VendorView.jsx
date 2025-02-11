import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BackupIcon from "@mui/icons-material/Backup";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
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
import imageIcon from "../../../public/noImage.webp";

import { useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { VENDORS_DATA } from "../constants/dataConstant";

export const VendorView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [gstFiles, setgstFiles] = useState({});

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [adharCard, setAdharCard] = useState(null);

  const handleAdharUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAdharCard(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGstUpload = (event) => {
    const files = event.target.files;
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagesArray.push(e.target.result);
        if (imagesArray.length === files.length) {
          setgstFiles({ ...gstFiles, documents: imagesArray });
        }
        // setOpenModal(true);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const vendorDetails = useMemo(() => {
    const id = searchParams.get("vendorId");
    const data = VENDORS_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

 
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
          {/* Title Section with Close Button */}
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

          {/* Body Content */}
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

            {/* <Grid item md={8} sm={8} xs={12}></Grid> */}
            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                id="adharNo"
                label="Adhar Number"
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
                label="GSIN Number"
                type="text"
                name="gstNo"
                defaultValue={vendorDetails.gstNo}
              />
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
              <Grid container>
                <Grid item md={12} sm={12} xs={6}>
                  <Tooltip title="Upload GSTIN Documents">
                    <Button
                      fullWidth
                      sx={{ height: "60px" }}
                      variant="outlined"
                      component="label"
                      onClick={
                        // gstFiles?.documents?.length > 0
                          // ? () => setOpenModal(true):
                          () => {}
                      }
                    >
                      <input
                        style={{ width: "100%" }}
                        onChange={handleGstUpload}
                        accept="image/*"
                        name="documents"
                        multiple
                        type="file"
                        hidden
                        required
                      />

                      <Badge
                        bac
                        color="primary"
                        badgeContent={gstFiles?.documents?.length || 0}
                      >
                        <BackupIcon
                          style={{
                            fontSize: "60px",
                            color: "#bdbdbd",
                            width: "100%",
                          }}
                        />
                      </Badge>
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography textAlign={"center"} sx={{ marginLeft: "0px" }}>
                    GSTIN
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                  <Tooltip title="Upload Adhar Card">
                    <Button fullWidth variant="outlined" component="label">
                      <img
                        onClick={() => {}}
                        style={{
                          cursor: "pointer",
                          borderRadius: "10px",
                          backgroundPosition: "cover",
                        }}
                        src={adharCard ? adharCard : imageIcon}
                        height={"300px"}
                        width={"100%"}
                        alt="upload"
                      />
                      <input
                        onChange={handleAdharUpload}
                        accept="image/*"
                        name="mainImage"
                        type="file"
                        hidden
                        required
                      />
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography textAlign={"center"}>Adhar Card</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} sm={8} xs={12}>
              <Box onClick={ () => {}}  sx={{ border: "1px solid red" }} height={"300px"}>
                <Carousel  showThumbs={false} infiniteLoop useKeyboardArrows>
                  {gstFiles?.documents?.length > 0 ? (
                    gstFiles?.documents?.map((e, index) => (
                      <div key={index}>
                        <img
                          src={e ? e : imageIcon}
                          alt={`document-${index}`}
                          style={{ height: "300px", objectFit: "cover",cursor:'pointer' }}
                         
                        />
                         <input
                        style={{ width: "100%" }}
                        onChange={handleGstUpload}
                        accept="image/*"
                        name="documents"
                        multiple
                        type="file"
                        hidden
                        required
                      />
                        <p
                          className="legend"
                          style={{
                            backgroundPosition: "cover",
                            background: "transparent",
                            boxShadow: "none",
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{ color: "white" }}
                            onClick={() => {
                              const updatedImages = [...gstFiles.documents];
                              if (updatedImages.length > 1) {
                                updatedImages.splice(index, 1);
                                setgstFiles({
                                  ...gstFiles,
                                  documents: updatedImages,
                                });
                              }
                            }}
                          >
                            <DeleteForeverIcon color="secondary" />
                          </Button>
                        </p>
                      </div>
                    ))
                  ) : (
                    <Button
                      fullWidth
                      sx={{ height: "100%" }}
                      
                      component="label"
                      onClick={
                        // gstFiles?.documents?.length > 0
                        //   ? () => setOpenModal(true): 
                        () => {}
                      }
                    >
                      <input
                        style={{ width: "100%" }}
                        onChange={handleGstUpload}
                        accept="image/*"
                        name="documents"
                        multiple
                        type="file"
                        hidden
                        required
                      />
                       <BackupIcon
                          style={{
                            fontSize: "60px",
                            color: "#bdbdbd",
                            width: "100%",
                          }}
                        />
                    </Button>
                  )}
                </Carousel>
              </Box>
                <Typography textAlign={"center"} sx={{ marginLeft: "40px" }}>
                  GSTIN Documents
                </Typography>
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
              label="Tasks Allocated"
              pageSizeOptions={[5, 10, 20]}
              showAction={true}
              onRowClick={(row) =>
                navigate({
                  pathname: "/tasks-details",
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
    </>
  );
};
