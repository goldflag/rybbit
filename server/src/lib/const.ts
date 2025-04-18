import dotenv from "dotenv";

dotenv.config();

export const IS_CLOUD = process.env.CLOUD === "true";

// Define a type for the plan objects
export interface StripePlan {
  priceId: string;
  name: string;
  interval: "month" | "year";
  limits: {
    events: number;
  };
  annualDiscountPriceId?: string; // Make this optional
}

export const STRIPE_PRICES: StripePlan[] = [
  {
    priceId: "price_1R1fIVDFVprnAny2yJtRRPBm",
    name: "pro100k",
    interval: "month",
    limits: {
      events: 100_000,
    },
  },
  {
    priceId: "price_1R2l2KDFVprnAny2iZr5gFLe",
    name: "pro100k-annual",
    interval: "year",
    limits: {
      events: 100_000,
    },
  },
  {
    priceId: "price_1R1fKJDFVprnAny2mfiBjkAQ",
    name: "pro250k",
    interval: "month",
    limits: {
      events: 250_000,
    },
  },
  {
    priceId: "price_1R2lJIDFVprnAny22zUvjg5o",
    name: "pro250k-annual",
    interval: "year",
    limits: {
      events: 250_000,
    },
  },
  {
    name: "pro500k",
    priceId: "price_1R1fQlDFVprnAny2WwNdiRgT",
    interval: "month",
    limits: {
      events: 500_000,
    },
  },
  {
    name: "pro500k-annual",
    priceId: "price_1R2lKIDFVprnAny27wXUAy2D",
    interval: "year",
    limits: {
      events: 500_000,
    },
  },
  {
    name: "pro1m",
    priceId: "price_1R1fR2DFVprnAny28tPEQAwh",
    interval: "month",
    limits: {
      events: 1_000_000,
    },
  },
  {
    name: "pro1m-annual",
    priceId: "price_1R2lKtDFVprnAny2Xl98rgu4",
    interval: "year",
    limits: {
      events: 1_000_000,
    },
  },
  {
    name: "pro2m",
    priceId: "price_1R1fRMDFVprnAny24AMo0Vuu",
    interval: "month",
    limits: {
      events: 2_000_000,
    },
  },
  {
    name: "pro2m-annual",
    priceId: "price_1RE1bQDFVprnAny2ELKQS79d",
    interval: "year",
    limits: {
      events: 2_000_000,
    },
  },
  {
    name: "pro5m",
    priceId: "price_1R2kybDFVprnAny21Mo1Wjuz",
    interval: "month",
    limits: {
      events: 5_000_000,
    },
  },
  {
    name: "pro5m-annual",
    priceId: "price_1RE1ebDFVprnAny2BbHtnuko",
    interval: "year",
    limits: {
      events: 5_000_000,
    },
  },
  {
    name: "pro10m",
    priceId: "price_1R2kzxDFVprnAny2wdMx2Npp",
    interval: "month",
    limits: {
      events: 10_000_000,
    },
  },
  {
    name: "pro10m-annual",
    priceId: "price_1RE1fHDFVprnAny2SKY4gFCA",
    interval: "year",
    limits: {
      events: 10_000_000,
    },
  },
];
