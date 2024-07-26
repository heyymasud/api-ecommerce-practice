const Badge = ({active, title}) => {
  return (
    <div className={`pt-[0.1em] pb-[0.1rem] text-xs px-3 rounded-full ${
        active ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
    }`}>
        {title}
    </div>
  )
}

export default Badge