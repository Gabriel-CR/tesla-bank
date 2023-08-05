import * as C from "./styled";

const StoreButton = ({ img, altImg, storeName }) => {
  return (
    <C.Container>
      <img src={img} alt={altImg} />
      <div>
        <p>Download via</p>
        <p className="store_name">{storeName}</p>
      </div>
    </C.Container>
  );
};

export default StoreButton;
