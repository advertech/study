import { useState } from "react";

export function useOrder() {
    const [orders, setOrder] = useState([]);
    return { orders, setOrder };
}