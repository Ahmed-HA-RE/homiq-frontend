import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import type { AgentData } from '~/schema/agentsSchema';

type AgentsProps = {
  agents: AgentData[];
};

export default function AgentsSection({ agents }: AgentsProps) {
  return (
    <section className='mx-auto max-w-7xl py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mx-auto mb-8 max-w-3xl text-center font-outfit'>
          <h2 className='mb-4 text-2xl font-bold tracking-tight sm:text-3xl'>
            Our Agents
          </h2>
          <p className='text-muted-foreground mx-auto max-w-md md:text-lg'>
            Our agents combine local expertise with personalized service to help
            you find the perfect home or investment.
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          {agents?.map((agent) => (
            <AgentsMemberCard key={agent._id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team member card component
export function AgentsMemberCard({ agent }: { agent: AgentData }) {
  return (
    <div className='group bg-card w-96 overflow-hidden rounded-xl opacity-100 shadow-sm transition-opacity hover:opacity-75'>
      <div className='relative h-64 w-full overflow-hidden pt-2'>
        <img
          src={agent.image}
          alt={agent.name}
          className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className='flex h-auto flex-col p-5'>
        {agent.location && (
          <div className='text-muted-foreground mb-1 flex items-center text-xs'>
            <div className='bg-cyan-400 mr-1.5 h-1.5 w-1.5 rounded-full' />
            {agent.location}
          </div>
        )}

        <h3 className='mb-1 text-xl font-bold'>{agent.name}</h3>
        <p className='text-primary mb-2 text-sm font-medium'>{agent.role}</p>
        <div className='mb-4'>
          <p className='text-muted-foreground text-sm'>{agent.description}</p>
        </div>
        <div className='mt-auto'>
          {agent.links && (
            <div className='flex space-x-3'>
              {agent.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full transition-all'
                >
                  {link.platform === 'instagram' && (
                    <FaInstagram className='h-4 w-4' />
                  )}
                  {link.platform === 'facebook' && (
                    <FaFacebookSquare className='h-4 w-4' />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
