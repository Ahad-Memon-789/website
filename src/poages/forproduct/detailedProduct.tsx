import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
export default function Detailed() {
    const [elemntdata, Setelemntdata] = useState<any>({})
    const params = useParams()
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
            console.log(res.data);
            Setelemntdata({ ...res.data });
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <img src={elemntdata.image} width={'300'} height={"300px"} alt="" />
                    </div>
                    <div className="col-md-8 col-12">
                        <Paper className='mt-5 p-3'>
                            <Typography variant="h5" className="mt-3">
                                <span style={{ color: 'red' }}>Title</span>
                                <span>.</span>
                                <span> {elemntdata.title}</span>

                            </Typography>
                            <Typography variant="h5">
                                <span style={{ color: 'red' }}>Category</span>
                                <span>.</span>
                                <span> {elemntdata.category}</span>

                            </Typography>
                            <Typography variant="h5">
                                <span style={{ color: 'red' }}>Price</span>
                                <span>.</span>
                                <span> {elemntdata.price}</span>

                            </Typography>
                            <Button variant="outlined" color="error">BUY NOW</Button>
                        </Paper>
                    </div>
                </div>
            </div>
        </>)
}