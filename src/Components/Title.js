export default function Title(props) {
  return (
    <div className="grid place-items-center">
      <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
        {props.name}
      </h1>
    </div>
  );
}
