// app/api/banner/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const bannerData = [
    {
      id: 1,
      title: "NIACINAMIDE",
      name: "NIACINAMIDE",
      overview:
        "10PCS NIACINAMIDE Original SOAP NIACINAMIDE Prestige Soap 10x Whitening Soap 750g",
      vote_average: 7.5,
      backdrop_path:
        "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01fWaPdX210n1oBHHzK_!!6000000006923-0-tps-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      id: 2,
      title: "Dune: Part Two",
      name: "Dune: Part Two",
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
      vote_average: 8.2,
      backdrop_path:
        "https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01OauWKp1g7YxDAB0YC_!!6000000004095-0-tps-1976-688.jpg_2200x2200q80.jpg ",
    },
    {
      id: 3,
      title: "Killers of the Flower Moon",
      name: "Killers of the Flower Moon",
      overview:
        "A series of murders in the Osage Nation leads to a major FBI investigation in the 1920s.",
      vote_average: 8.1,
      backdrop_path:
        "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01RFvg2d1HIgAmqQ75b_!!6000000000735-0-tps-1976-688.jpg_2200x2200q80.jpg",
    },
  ];

  return NextResponse.json(bannerData);
}
