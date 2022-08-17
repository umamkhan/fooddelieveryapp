import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch} from 'react-redux';
import { useParams, useNavigate } from "react-router-dom"
import {DLT , ADD , REMOVE } from '../redux/actions/action'

const CardsDetails = () => {

    const [data, setData] = useState([]);

const {id} = useParams();

const history = useNavigate();

const dispatch = useDispatch();

const getData = useSelector((state)=> state.cartreducers.carts);
//console.log(getData)

const compare = ()=>{
    let comparedata = getData.filter((e)=>{
        return e.id == id
    });
    setData(comparedata);
}

//add data
const send = (e)=>{
    //console.log(e)
    dispatch(ADD(e));
    }

const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
  }

  //remove 
  const remove = (item)=>{
    dispatch(REMOVE(item));
  }

useEffect(()=>{
    compare();

},[id])

  return (
    <>
    <div className="container mt-4">
        <h2 className="text-center">Items Details Page</h2>

        <section className='container mt-3'>
         
         <div className="itemsdetails">
            {
                data.map((ele)=>{
                    return (
                        <>
                           <div className="items_img">
                <img src={ele.imgdata} alt="" />
            </div>
            <div className="details">
            <Table>
                <tbody>
                <tr>
                    <td>
                        <p><strong>Restaurant</strong> : {ele.rname}</p>
                        <p><strong>Price</strong> : ₹ {ele.price}</p>
                        <p><strong>Dishes</strong> : {ele.address}</p>
                        <p><strong>Total</strong> : {ele.price * ele.qnty}</p>
                        <div className="d-flex mt-5 justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                            <span  style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                            <span  style={{fontSize:22}}>{ele.qnty}</span>
                            <span  style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                        </div>
                    </td>
                    <td>
                        <p><strong>Rating  : </strong><span style={{background:"green",color:"#fff", padding:"2px 5px",borderRadius:"5px"}}>{ele.rating}  ★</span></p>
                        <p><strong>Order Review :</strong><span>{ele.somedata}  </span></p>
                        <p><strong>Remove : </strong><span><i className="fas fa-trash" onClick={()=>dlt(ele.id)}style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
                    </td>
                </tr>
                </tbody>
            </Table>
            </div>
            
                        </>
                        
                    )
                })
            }
        
         </div>
         </section>

    </div>
    </>
  )
}

export default CardsDetails