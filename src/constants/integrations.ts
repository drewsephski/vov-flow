import React from "react";
import {
    SiOpenai,
    SiAnthropic,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiStripe,
    SiTwilio,
    SiGraphql
} from "react-icons/si";
import {
    Link,
    Webhook,
    CreditCard
} from "lucide-react";

export type Integration = {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    category: "ai-voice" | "database" | "api" | "payment" | "all";
};

export const INTEGRATION_CATEGORIES = [
    {
        label: "All Technologies",
        value: "all"
    },
    {
        label: "AI & Voice",
        value: "ai-voice"
    },
    {
        label: "Databases",
        value: "database"
    },
    {
        label: "APIs & Webhooks",
        value: "api"
    },
    {
        label: "Payment Systems",
        value: "payment"
    }
] as const;

export const INTEGRATIONS: Integration[] = [
    {
        name: "OpenAI",
        description: "Integrate GPT models for advanced conversational AI and natural language processing.",
        icon: SiOpenai,
        category: "ai-voice"
    },
    {
        name: "Anthropic Claude",
        description: "Leverage Claude's advanced reasoning capabilities for intelligent voice interactions.",
        icon: SiAnthropic,
        category: "ai-voice"
    },

    {
        name: "PostgreSQL",
        description: "Robust relational database for storing user data, conversations, and analytics.",
        icon: SiPostgresql,
        category: "database"
    },
    {
        name: "MongoDB",
        description: "Flexible NoSQL database perfect for unstructured conversation data and user profiles.",
        icon: SiMongodb,
        category: "database"
    },
    {
        name: "Redis",
        description: "High-performance caching and real-time data storage for instant voice responses.",
        icon: SiRedis,
        category: "database"
    },
    {
        name: "REST APIs",
        description: "Connect with any RESTful API service for custom integrations and data synchronization.",
        icon: Link,
        category: "api"
    },
    {
        name: "GraphQL",
        description: "Efficient data fetching and real-time updates with GraphQL subscriptions.",
        icon: SiGraphql,
        category: "api"
    },
    {
        name: "Webhooks",
        description: "Real-time event-driven integrations with webhook support for instant updates.",
        icon: Webhook,
        category: "api"
    },
    {
        name: "Stripe",
        description: "Comprehensive payment processing for subscriptions and one-time purchases.",
        icon: SiStripe,
        category: "payment"
    },
    {
        name: "Polar",
        description: "Modern payment platform with built-in subscription management and checkout.",
        icon: CreditCard, // Using CreditCard icon as placeholder since Polar isn't in Simple Icons
        category: "payment"
    },
    {
        name: "Twilio",
        description: "Voice calls, SMS, and messaging APIs for multi-channel communication.",
        icon: SiTwilio,
        category: "api"
    },
    {
        name: "ElevenLabs",
        description: "Ultra-realistic voice synthesis and text-to-speech for natural voice agents.",
        icon: Link, // Using Link icon as placeholder since ElevenLabs isn't in Simple Icons
        category: "ai-voice"
    }
]; 