import { tensesEndpoint } from "../utils/api";
import { client } from "../utils/client";

export const requestTenses = async () => {
  const { data } = await client.get(tensesEndpoint);
  return data;
}
