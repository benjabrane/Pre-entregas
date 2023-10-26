import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        // Inicio de la carga de datos
        setIsLoading(true);

        getProducts(categoryId)
            .then((products) => {
                // Éxito en la carga de datos
                setItems(products);
                setIsLoading(false);
            })
            .catch((error) => {
                // Manejo de errores
                console.error("Error al cargar los productos:", error);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <ItemList items={items} isLoading={isLoading} />
        </div>
    );
};

export default ItemListContainer;
