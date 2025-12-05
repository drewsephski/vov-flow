import React from 'react'
import Wrapper from "../global/wrapper"
import Container from "../global/container"
import { BLOGS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, UserIcon, TagIcon } from "lucide-react"

const BlogSection = () => {
    return (
        <div className="w-full pb-16 lg:pb-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col">
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                            Latest Posts
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            Stay updated with the latest insights and trends in voice AI technology
                        </p>
                    </div>
                </Container>

                <div className="w-full mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {BLOGS.map((blog, index) => (
                            <Container key={index} className="group">
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="flex flex-col h-full hover:shadow-lg transition-all duration-300 rounded-lg border border-border/20"
                                >
                                    <div className="relative w-full aspect-video bg-foreground/5 rounded-t-lg overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/20 text-xs font-medium text-foreground">
                                                <TagIcon className="size-3 text-primary" />
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <UserIcon className="size-3" />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ClockIcon className="size-3" />
                                                <span>8 min read</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {blog.desc}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-primary font-medium group-hover:underline">
                                                Read more →
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {blog.authorCompany}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Container>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default BlogSection