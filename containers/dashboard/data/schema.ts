import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const portfolioSchema = z.object({
  budget: z.number(),
  created_at: z.number(),
  current_profit: z.number(),
  id: z.number(),
  is_endtarget: z.boolean(),
  is_ongoing: z.boolean(),
  is_pause: z.boolean(),
  name: z.string(),
  profit: z.number(),
  status: z.string(),
  stop_loss: z.number(),
  take_profit: z.number()
})

export type Portfolio = z.infer<typeof portfolioSchema>
