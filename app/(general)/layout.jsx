export default function GeneralLayout({ children }) {
  return (
  <div className="bg-warmGray-200 box__shadow-lg rounded-2xl mb-4 p-4 md:w-2/3">
    {children}
  </div>
  );
}