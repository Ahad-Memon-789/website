import { Box, Button, Paper, Typography } from '@mui/material'
import axiox from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/black-friday-elements-assortment_23-2149074076.webp'
export default function Products() {

    const [Renderdata, setRenderdata] = useState<any>([])
    let Renderproduct = () => {
        axiox.get(`https://fakestoreapi.com/products`).then((res) => {

            setRenderdata([...res.data])
        })
            .catch((err) => {
                console.log(err)
            })
    }
    const navigate = useNavigate()
    let buy = (id: any) => {
        navigate(`/detailedProduct/${id}`)
    }
    return (<>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" height={580} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" height={580} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" height={580} alt="..." />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 offset-md-2 legset-md-4 col-12 ">
                    <h3 className='text-dark'>OUR PRODUCT</h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 offset-md-3 legset-md-4 col-12 mb-3 ">
                    <div className='hr'></div>

                </div>
            </div>
        </div>
        {Renderproduct()}
        {Renderdata.map((x: any, i: any) => {
            return (<>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-12 ">
                            <Paper className='py-5 my-5 shadow-lg'>
                                    <img src={x.image} alt="" width={200} height={200} />
                                <Box>
                                    <div className='offset-md-3 legset-md-4 mt-5'>
                                        <Typography variant='h5'>
                                            <span className='text-danger'>TITLE</span><span>.<span>{x.title}</span></span>
                                        </Typography>
                                        <Button variant="outlined" color='error' onClick={() => buy(x.id)} >BUY NOW</Button>
                                    </div>

                                </Box>
                            </Paper>
                        </div>
                    </div>
                </div>


            </>)
        })}
    </>)
}