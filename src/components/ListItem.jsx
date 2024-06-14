

export default function ListItem({ span, info }) {
      return (
            <li className="text-white">
                  <span className="font-bold">{span}</span>
                  {info}
            </li>
      );
}
