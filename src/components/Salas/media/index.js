import media1 from "./Zona1-1.jpg";
import media2 from "./Zona1-2.jpg";
import media3 from "./Zona1-3.jpg";
import media4 from "./Zona1-4.jpg";
import media5 from "./Zona2-1.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
