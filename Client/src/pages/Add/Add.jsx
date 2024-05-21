import React from "react";
import "./add.scss";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useDataContext } from "../../context/context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const Add = () => {
  const { shopData, postData, deleteData } = useDataContext();
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      price: "",
      imgSrc: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      price: Yup.number().min(0).required("Required"),
      imgSrc: Yup.string()
        .url("url formatindaq olmalidir")
        .required("Sekil qoymaq vacibdir!"),
    }),
    onSubmit: (values) => {
      postData(values);

      formik.resetForm();
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form">
        <h1>Add Pages</h1>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        ) : null}
        <input
          type="url"
          name="imgSrc"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imgSrc}
        />
        {formik.touched.imgSrc && formik.errors.imgSrc ? (
          <div style={{ color: "red" }}>{formik.errors.imgSrc}</div>
        ) : null}

        <input
          type="number"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}
        <button className="btn btn-outline-success " type="submit">
          Submit
        </button>
      </form>
      <div className="table-div">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shopData.map((item, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {idx}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <img width={60} height={60} src={item.imgSrc} alt="" />
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        deleteData(item._id);
                      }}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Add;
