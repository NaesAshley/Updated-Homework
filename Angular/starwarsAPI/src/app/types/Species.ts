export interface SpeciesSingle {
  //takes the results of array of objects and each singular is it's own thing
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface SpeciesResponse {
  //results baseon insomnia api callit is an object with "results as an array of objects",
  count: number;
  next: string;
  previous: string;
  results: SpeciesSingle[];
}
