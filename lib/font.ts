import {
  Instrument_Serif,
  Bricolage_Grotesque,
  Gupter,
  Anonymous_Pro,
} from "next/font/google";

export const instrumental = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const bricolag = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin-ext"],
});

export const gupter = Gupter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const anonymouse = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});
