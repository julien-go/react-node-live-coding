import axios from "axios";

interface DeleteWilderProps {
  id: number;
  refresh: () => void;
}

const DeleteWilder = ({ id, refresh }: DeleteWilderProps) => {
  const remove = () => {
    axios
      .delete(`http://localhost:5000/api/wilder/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={(e) => remove()}>Delete</button>;
};

export default DeleteWilder;
