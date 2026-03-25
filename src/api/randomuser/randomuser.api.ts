import axios from "axios";

export interface IUserCard {
  photo: string;
  name: string;
  role: string;
  bio: string;
}

interface IRandomUserResponse {
  results: {
    name: { first: string; last: string };
    picture: { large: string };
  }[];
}

const roles = [
  "Football Operations Lead",
  "Talent Development Coordinator",
  "Squad Planning Analyst",
  "Player Support Officer",
  "Performance Strategy Staff",
];

const bios = [
  "Supports key decisions behind planning, structure, and day-to-day football operations.",
  "Focuses on player growth, internal development, and long-term talent progression.",
  "Helps evaluate squad balance, planning needs, and future team composition.",
  "Supports communication, coordination, and professional care around the playing group.",
  "Contributes to performance planning and wider football development behind the scenes.",
];

export async function getManagementUsers(): Promise<IUserCard[]> {
  const response = await axios.get<IRandomUserResponse>(
    "https://randomuser.me/api/?results=5",
  );

  return response.data.results.map((user, index) => ({
    photo: user.picture.large,
    name: `${user.name.first} ${user.name.last}`,
    role: roles[index],
    bio: bios[index],
  }));
}
