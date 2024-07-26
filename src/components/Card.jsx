import Badge from "./Badge";

const Card = ({item}) => {
    const {img=item.thumbnail, title, price, category} = item
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <img
            className="rounded-t-lg"
            src={img}
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>{title}</div>
            <Badge active={true} title={category} />
          </div>
          <div className="font-semibold mt-5">{price}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
