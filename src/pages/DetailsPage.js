import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  // Dữ liệu giả - sau này có thể thay bằng API hoặc import từ mock data
  const movies = [
    {
      id: "1",
      title: "Avengers: Endgame",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      description: "Các siêu anh hùng Avengers cùng nhau chống lại Thanos để cứu vũ trụ."
    },
    {
      id: "2",
      title: "Spider-Man: No Way Home",
      image: "https://upload.wikimedia.org/wikipedia/en/0/04/Spider-Man_No_Way_Home_poster.jpg",
      description: "Peter Parker đối mặt với đa vũ trụ và những kẻ thù cũ."
    }
  ];

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <h2>Không tìm thấy phim</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: "300px", borderRadius: "10px" }} />
      <p style={{ marginTop: "15px" }}>{movie.description}</p>
    </div>
  );
}

