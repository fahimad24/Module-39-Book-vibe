import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { ContextApi } from "../../provider/contextApi";

// #region Sample data

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// #endregion

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
}

export default function ReadPage() {
  const { readBooks } = useContext(ContextApi);
  const data = readBooks.map((book) => {
    const name = book.bookName;
    return {
      name,
      uv: book.totalPages,
    };
  });
  if (data.length === 0) {
    return (
      <section className="p-20">
        <div className="bg-gray-100 p-10 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-xl">No read books to display.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="p-20">
      <div className="bg-gray-100 p-10 rounded-lg flex items-center justify-center">
        <BarChart width={800} height={500} data={data} margin={margin}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar} />
        </BarChart>
      </div>
    </section>
  );
}
