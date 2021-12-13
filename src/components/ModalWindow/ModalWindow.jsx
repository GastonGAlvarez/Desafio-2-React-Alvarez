import {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../../services/getFirestore";
import { useCarritoContext } from '../../CartContext/CartContext';

const ModalWindow = (props) => {
    
const { cartList, removeItemCart } = useCarritoContext();
    
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");    
const [idOrder, setIdOrder] = useState(null); 
   
    const createOrder = (e) => {
            e.preventDefault()
            const buyer = { name, phone, email};
            const db = getFirestore();
            const ordersCollection = db.collection("orders");

            let order = {};
            order.buyer = {buyer};
            order.items = cartList.map((cartItem) => {
                const id = cartItem.id;
                const prodName = cartItem.name;
                return {id, prodName}
            })

            ordersCollection.add(order)
            .then((IdDocument) => {
                setIdOrder(IdDocument.id)
            })
    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={createOrder} >
                        <label>Nombre:</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            type="text"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Telefono:</label>
                        <input
                            value={phone}
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Comprar
                         </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" >
                    Cerrar
              </button>
            </Modal.Footer>
            <small>{idOrder ? ` Su orden fue generada con el ID: ${idOrder}` : null}</small>
        </Modal>
    );
}

export default ModalWindow;