import z from 'zod';

export const agentSchema = z.object({
  _id: z.string().nonempty(),
  name: z.string().trim().min(4).max(20),
  email: z.string().nonempty().email(),
  description: z.string().nonempty(),
  role: z.literal([
    'CEO',
    'Selling Agent',
    'Selling Assistant',
    'Broker',
    'CEO Assistant',
    'Broker Assistant',
  ]),
  image: z.string(),
  links: z.array(
    z.object({
      _id: z.string(),
      platform: z.literal(['facebook', 'instagram']),
      url: z.url({ protocol: /^https?$/, hostname: z.regexes.domain }),
    })
  ),
  location: z.string().nonempty(),
});

export type AgentData = z.infer<typeof agentSchema>;
