
export default function Title({ info, color }) {
      return (
        <h2
          className={`text-center text-white font-bold text-2xl mb-10 mt-5 border-b-4 border-${color}-600 p-4`}
        >
          {info}
        </h2>
      );
}
