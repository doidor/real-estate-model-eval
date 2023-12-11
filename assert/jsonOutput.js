const z = require("zod");

const jsonSchema = z.object({
  price: z.number(),
  currency: z.string(),
  pricePerMp: z.number(),
  location: z.string(),
  neighborhood: z.string(),
  numberOfRooms: z.number(),
  floor: z.number(),
  totalFloors: z.number(),
});

function validateJsonData(output) {
  const text = output
    .replace("```json", "")
    .replace("```", "")
    .replace("---", "")
    .trim();
  let ret = false;

  try {
    const json = JSON.parse(text);

    ret = jsonSchema.safeParse(json).success;
  } catch (error) {
    return false;
  }

  return ret;
}

module.exports = validateJsonData;
