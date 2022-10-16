import { $http_t } from "@/plugins/axios";

export const getMovieSessions = async (id) => {
  const res = await $http_t.get(`/movieShows?movie_id=${id}`);
  return res.data.data[String(id)];
};

export const getSeats = async ({ id, time, day }) => {
  const res = await $http_t.get(
    `/showPlaces?movie_id=${id}&daytime=${time}&showdate=${day}`
  );
  return Object.values(res.data.data);
};

export const bookSeat = async (data) => {
  const res = await $http_t.post("/bookPlace", data);
  return res.data.data;
};

// Get movies sessions:

// HTTP GET
// /movieShows
// OR
// /movieShows?movie_id={id}

// Book ticket:

// 	Check for free places:

// HTTP GET
// 	/showPlaces?movie_id={id}&daytime={daytime}&showdate={showdate}
// 	/showPlaces?movie_id=61&daytime=10:50&showdate=2021-06-27

// Book place:

// HTTP POST
// /bookPlace
// {
//   "movie_id": {id},
//   "row": {int},
//   "seat": {int},
//   "showdate": {string},
//   "daytime": {string}
// }

// Request:
// {
//   "movie_id": 61,
//   "row": 9,
//   "seat": 8,
//   "showdate": "2021-06-27",
//   "daytime": "10:50"
// }

// Response:
// {
//     "error_code": 0,
//     "error_message": "no errors",
//     "data": {
//         "movie_id": "61",
//         "row": "9",
//         "seat": "8",
//         "showdate": "2021-06-27",
//         "daytime": "10:50",
//         "ticketkey": "2a8cfbd5a4945f52e92c6b969f440192"
//     }
// }
