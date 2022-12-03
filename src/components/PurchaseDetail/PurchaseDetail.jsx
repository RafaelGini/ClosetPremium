import React from "react";
import { useParams } from "react-router-dom";

export default function PurchaseDetail(){
    const idOrder = useParams().idOrder;
    return (
        <div>
            GRACIAS: {idOrder}
        </div>
    )
}