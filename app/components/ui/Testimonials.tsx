'use client';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '~/utils/utils';
import { Avatar, AvatarFallback } from './Avatar';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { type Testimonial } from '~/schema/testimonialsSchema';
import { Link } from 'react-router';
import { useAuthStore } from '~/store/authstore';

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
};

const TestimonialsCarousel = ({
  autoplaySpeed = 2500,
  testimonials,
}: TestimonialsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplaySpeed);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, autoplaySpeed]);

  const user = useAuthStore((set) => set.user);

  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24')}>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]' />
        <div className='bg-primary/5 absolute top-1/4 left-1/4 h-32 w-32 rounded-full blur-3xl' />
        <div className='bg-primary/10 absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 md:px-6 font-outfit'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='relative mb-12 text-center md:mb-16'
        >
          <h1 className='from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl'>
            Hear From Our Happy Homeowners
          </h1>

          <motion.p
            className='text-muted-foreground mx-auto max-w-2xl text-base md:text-lg'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From first consultation to closing, our clients share their seamless
            real estate journey with Homiq.
          </motion.p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className='flex justify-center px-4'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='border-border from-secondary/20 to-card relative h-full w-fit rounded-2xl border bg-gradient-to-b p-6 shadow-md backdrop-blur-sm'
                >
                  {/* Enhanced decorative gradients */}
                  <div className='from-primary/15 to-card absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b blur-md' />
                  <div className='from-primary/10 absolute -right-10 -bottom-10 -z-10 h-32 w-32 rounded-full bg-gradient-to-t to-transparent opacity-70 blur-xl' />

                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className='text-primary mb-4'
                  >
                    <div className='relative'>
                      <Quote className='h-10 w-10 -rotate-180' />
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className='text-foreground/90 relative mb-6 text-base leading-relaxed'
                  >
                    <span className='relative'>{testimonial.feedback}</span>
                  </motion.p>

                  {/* Enhanced user info with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className='border-border/40 mt-auto flex items-center gap-3 border-t pt-2'
                  >
                    <Avatar className='border-border ring-primary/10 ring-offset-background h-10 w-10 border ring-2 ring-offset-1'>
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <h4 className='text-foreground font-medium whitespace-nowrap'>
                        {testimonial.name}
                      </h4>
                      <div className='flex items-center gap-2'>
                        <p className='text-primary/80 text-sm whitespace-nowrap'>
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <>
                            <span className='text-muted-foreground flex-shrink-0'>
                              •
                            </span>
                            <p className='text-muted-foreground text-sm whitespace-nowrap capitalize'>
                              {testimonial.role.replace('_', '  ')}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link
        to={`${user ? '/reviews/add' : '/auth/signup'}`}
        className='p-4 mt-8 w-full text-center bg-cyan-500 font-outfit rounded text-white flex justify-center text-lg max-w-md mx-auto hover:bg-cyan-600 hover:scale-90 transition duration-200 '
      >
        {user ? 'Add Your Review' : 'Please Log In to share your review'}
      </Link>
    </section>
  );
};

export default TestimonialsCarousel;
