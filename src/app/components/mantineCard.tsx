"use-client";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Center,
  Button,
  Box,
  Flex,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./styles/FeaturesCard.module.css";
import React from "react";
const data = [
  {
    domain: "Frontend Development",
    subtopics: [
      {
        name: "HTML & CSS",
        description:
          "Learn the basics of HTML and CSS, the building blocks of web development.",
      },
      {
        name: "JavaScript",
        description:
          "Understand the fundamentals of JavaScript, the language that powers interactive web features.",
      },
      {
        name: "React",
        description:
          "Build interactive UIs with React, a popular JavaScript library for creating dynamic web applications.",
      },
    ],
  },
  {
    domain: "Backend Development",
    subtopics: [
      {
        name: "Node.js",
        description:
          "Learn the fundamentals of Node.js, a JavaScript runtime for building scalable network applications.",
      },
      {
        name: "Express.js",
        description:
          "Build robust APIs with Express.js, a minimal and flexible Node.js web application framework.",
      },
      {
        name: "Database Design",
        description:
          "Understand the principles of designing databases, including normalization, indexing, and schema design.",
      },
    ],
  },
  {
    domain: "Data Science",
    subtopics: [
      {
        name: "Python for Data Science",
        description:
          "Learn how to use Python for data analysis, visualization, and manipulation.",
      },
      {
        name: "Data Cleaning",
        description:
          "Master techniques for cleaning and preparing raw data for analysis.",
      },
      {
        name: "Machine Learning Basics",
        description:
          "Explore the fundamentals of machine learning, including supervised and unsupervised learning algorithms.",
      },
    ],
  },
  {
    domain: "DevOps",
    subtopics: [
      {
        name: "Continuous Integration/Continuous Deployment (CI/CD)",
        description:
          "Implement CI/CD pipelines to automate the process of building, testing, and deploying applications.",
      },
      {
        name: "Containerization with Docker",
        description:
          "Learn to use Docker for creating, deploying, and managing containers to ensure consistency across different environments.",
      },
      {
        name: "Infrastructure as Code (IaC)",
        description:
          "Understand IaC principles and tools like Terraform to manage and provision infrastructure through code.",
      },
    ],
  },
];
const FeaturesCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {" "}
      {data.map((item, index) => (
        <Card
          key={index}
          withBorder
          radius="md"
          style={{ maxWidth: 340, margin: "auto", marginBottom: "20px" }}
        >
          <Card.Section>
            <Image
              src="data:image/jpeg;base64,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"
              alt={item.domain}
            />
          </Card.Section>

          <Group style={{ justifyContent: "space-between" }} mt="md">
            <div>
              <Text fw={500}>{item.domain}</Text>
              <Text fz="xs" c="dimmed">
                Specialize in building the web
              </Text>
            </div>
            <Badge variant="outline">New</Badge>
          </Group>

          <Card.Section mt="md">
            <Box
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "-8px",
              }}
            >
              {item.subtopics.map((subtopic, index) => (
                <Box key={index}>
                  <Text fw={500} fz="sm" mb={5} pl={5}>
                    {subtopic.name}
                  </Text>
                  <Text fz="xs" c="dimmed" mb={5} pl={5}>
                    {subtopic.description}
                  </Text>
                </Box>
              ))}
            </Box>
          </Card.Section>

          <Card.Section>
            <Group
              style={{ justifyContent: "space-between", gap: "30px" }}
              mt="md"
            >
              <div>
                <Text fz="xl" fw={700} mb={5} pl={15} style={{ lineHeight: 1 }}>
                  Free
                </Text>
                <Text
                  fz="sm"
                  c="dimmed"
                  fw={500}
                  pl={5}
                  style={{ lineHeight: 1 }}
                  mt={3}
                  mb={3}
                >
                  Start learning today
                </Text>
              </div>

              <Button radius="xl" style={{ flex: 1 }}>
                Explore Pathway
              </Button>
            </Group>
          </Card.Section>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesCard;
