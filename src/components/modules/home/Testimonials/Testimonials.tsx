import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

interface Testimonial {
    quote: string;
    author: {
        name: string;
        role: string;
        avatar: {
            src: string;
            alt: string;
        };
    };
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            quote: "Every Taka helped me save money as a student. Now I know exactly where my allowance goes each month.",
            author: {
                name: "Mahfuz Rahman",
                role: "University Student",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                    alt: "Mahfuz Rahman",
                },
            },
        },
        {
            quote: "Managing household expenses was always stressful. With Every Taka, it’s simple and clear.",
            author: {
                name: "Sadia Akter",
                role: "Homemaker",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                    alt: "Sadia Akter",
                },
            },
        },
        {
            quote: "As a freelancer, my income varies. Every Taka helps me track and balance my earnings easily.",
            author: {
                name: "Arif Hossain",
                role: "Freelance Graphic Designer",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                    alt: "Arif Hossain",
                },
            },
        },
        {
            quote: "I used to write my expenses in a notebook. Now with Every Taka, I can see everything on my phone.",
            author: {
                name: "Rokeya Sultana",
                role: "School Teacher",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
                    alt: "Rokeya Sultana",
                },
            },
        },
        {
            quote: "This app is a lifesaver for small business owners like me. I can track shop expenses very quickly.",
            author: {
                name: "Kamrul Islam",
                role: "Shop Owner",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
                    alt: "Kamrul Islam",
                },
            },
        },
        {
            quote: "Every Taka makes budgeting fun and simple. I was able to save for my first bike in just 6 months.",
            author: {
                name: "Nusrat Jahan",
                role: "College Student",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
                    alt: "Nusrat Jahan",
                },
            },
        },
        {
            quote: "I recommend this app to my colleagues. It’s the easiest way to manage salary and savings.",
            author: {
                name: "Tanvir Ahmed",
                role: "Bank Officer",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
                    alt: "Tanvir Ahmed",
                },
            },
        },
        {
            quote: "Simple, clean, and useful. I use Every Taka to manage my travel and food expenses every month.",
            author: {
                name: "Farhana Kabir",
                role: "Software Engineer",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
                    alt: "Farhana Kabir",
                },
            },
        },
        {
            quote: "Finally a budgeting app that feels made for us. Tracking taka has never been this easy.",
            author: {
                name: "Jahidul Karim",
                role: "Startup Founder",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
                    alt: "Jahidul Karim",
                },
            },
        },
        {
            quote: "I love how simple it is. Just sign in with Google and all my expenses are organized in one place.",
            author: {
                name: "Moumita Chowdhury",
                role: "University Lecturer",
                avatar: {
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
                    alt: "Moumita Chowdhury",
                },
            },
        },
    ];

    return (
        <section className="py-[28px] px-6">
            <div className="container mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="et-testimonials-swiper !py-[80px] md:!py-[100px]"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.author?.name}>
                            <div className="flex flex-col items-center text-center">
                                <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-2 md:gap-4">
                                    <Avatar className="size-12 md:size-16">
                                        <AvatarImage
                                            src={testimonial.author.avatar.src}
                                            alt={testimonial.author.avatar.alt}
                                        />
                                        <AvatarFallback>
                                            {testimonial.author.name}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-left">
                                        <p className="text-sm text-primary font-medium md:text-base">
                                            {testimonial.author.name}
                                        </p>
                                        <p className="text-muted-foreground text-sm md:text-base">
                                            {testimonial.author.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
